export default class TypeWriter {
  constructor (options) {
    this.mergeOptions(options);
    this.init();
  }

  init () {
    this.selector =
      typeof this.options.selector === 'string'
        ? document.querySelector(this.options.selector)
        : this.options.selector;

    if (this.selector === undefined || this.selector === null) {
      return console.log('Please provide a valid selector.');
    }

    this.lineBreak = this.options.lineBreak;
    this.texts = this.normalizeTexts(this.options.texts);
    this.speed = this.options.speed;
    this.blinkInterval = this.options.blinkInterval;
    this.typing = false;
    this.loop = this.options.loop;
    this.clear = this.options.clear;

    this.setTimeOutStore = {};
  }

  initInputSelector () {
    this.typeTarget = 'value';
    this.selector.defaultPlaceholder =
      this.selector.defaultPlaceholder || this.selector.placeholder;
    this.selector.placeholder = '';
  }

  initNoneInputSelector () {
    this.typeTarget = 'innerHTML';
  }

  start () {
    this.isSelectorInput()
      ? this.initInputSelector()
      : this.initNoneInputSelector();

    if (this.shouldStart()) {
      this.typing = true;

      this.typeTexts(0);
    }
  }

  restoreInputSelector () {
    this.selector.placeholder = this.selector.defaultPlaceholder;
  }

  restoreNoneInputSelector () { }

  stop () {
    if (this.typing) {
      this.isSelectorInput()
        ? this.restoreInputSelector()
        : this.restoreNoneInputSelector();

      this.clearSetTimeoutStore();
      this.typing = false;
      this.selector[this.typeTarget] = '';
    }
  }

  typeTexts (index) {
    if (this.texts[index] === undefined) {
      if (this.loop) {
        this.typeTexts(0);
        return;
      } else {
        if (this.clear) {
          this.selector[this.typeTarget] = '';
        }
      }
    }

    if (index < this.texts.length) {
      this.typeText(this.texts[index], 0, index, () => {
        if (this.clear) {
          this.clearText(this.texts[index], 0, index, () => {
            this.typeTexts(index + 1);
          });
        } else {
          this.typeTexts(index + 1);
        }
      });
    }
  }

  typeText (text, index, textArrayIndex, cb) {
    if (index <= text.length) {
      if (this.shouldLineBreak(text[index])) {
        index += 3;
      }

      this.selector[this.typeTarget] = `${text.substring(0, index)}${this.getBlinker()}`;

      let timeoutName = `typeText${textArrayIndex}${index}`;

      this.setTimeOutStore[timeoutName] = setTimeout(() => {
        this.typeText(text, index + 1, textArrayIndex, cb);
      }, this.speed);
    } else {
      if (this.lineBreak) {
        this.selector[this.typeTarget] = `${text}`;
        let timeoutName = `typeTextCb${textArrayIndex}${index}`;
        this.setTimeOutStore[timeoutName] = setTimeout(cb, this.blinkInterval);
        return;
      }

      let blinkingTimeout = `blinding${textArrayIndex}${index}`;
      // let it blink
      this.setTimeOutStore[blinkingTimeout] = setTimeout(() => {
        this.selector[this.typeTarget] = text;
        let blinkingTimeoutAgain = `blinkOnce${textArrayIndex}${index}`;
        this.setTimeOutStore[blinkingTimeoutAgain] = setTimeout(() => {
          this.selector[this.typeTarget] = `${text}${this.getBlinker()}`;
          let blinkingTimeoutOnceAgain = `blinkTwice${textArrayIndex}${index}`;
          this.setTimeOutStore[blinkingTimeoutOnceAgain] = setTimeout(() => {
            // finish blinking and type the next text
            this.selector[this.typeTarget] = text;
            let timeoutName = `typeTextCb${textArrayIndex}${index}`;
            this.setTimeOutStore[timeoutName] = setTimeout(cb, this.blinkInterval);
          }, this.blinkInterval);
        }, this.blinkInterval);
      }, this.blinkInterval);
    }
  }

  clearText (text, index, textArrayIndex, cb) {
    if (index <= text.length) {
      if (this.shouldLineBreak(text[text.length - index])) {
        index = index + 3;
      }

      this.selector[this.typeTarget] = `${text.substring(0, text.length - index)}${this.getBlinker()}`;

      let timeoutName = `clearText${textArrayIndex}${index}`;
      this.setTimeOutStore[timeoutName] = setTimeout(() => {
        this.clearText(text, index + 1, textArrayIndex, cb);
      }, this.speed);
    } else {
      let timeoutName = `clearTextCb${textArrayIndex}${index}`;
      this.setTimeOutStore[timeoutName] = setTimeout(cb, this.blinkInterval);
    }
  }

  clearSetTimeoutStore () {
    Object.keys(this.setTimeOutStore).forEach(key => clearTimeout(this.setTimeOutStore[key]));
  }
  isSelectorInput () {
    return this.selector instanceof window.HTMLInputElement && this.selector.type === 'text';
  }

  shouldStart () {
    return this.isSelectorInput() ? !this.typing && !this.hasDefaultValue() : !this.typing;
  }

  hasDefaultValue () {
    return this.selector[this.typeTarget] !== '';
  }

  getBlinker () {
    return this.selector[this.typeTarget].indexOf('|') !==
      this.selector[this.typeTarget].length
      ? '|'
      : '';
  }

  normalizeTexts (texts) {
    if (this.lineBreak) {
      texts = [texts.join('<br>')];
    }
    return texts;
  }

  shouldLineBreak (char) {
    return char === '<' || char === '>';
  }

  mergeOptions (options) {
    this.options = {
      speed: 100,
      blinkInterval: 200,
      clear: true,
      loop: true,
      selector: '.type-writer',
      texts: [],
      lineBreak: false
    };

    Object.keys(options).forEach(key => {
      this.options[key] = options[key];
    });
  }
}
