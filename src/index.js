let setTimeoutStore = {};

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

    this.texts = this.options.texts;
    this.speed = this.options.speed;
    this.pause = this.options.pause;
    this.typing = false;
    this.loop = this.options.loop;
    this.clearText = this.options.clearText;
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
    if (this.loop && this.texts[index] === undefined) {
      this.typeTexts(0);
      return;
    }

    if (index < this.texts.length) {
      this.typeText(this.texts[index], 0, index, () => {
        if (this.clearText) {
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
      this.selector[this.typeTarget] = `${text.substring(0, index)}${this.getBlinker()}`;

      let timeoutName = `typeText${textArrayIndex}${index}`;

      setTimeoutStore[timeoutName] = setTimeout(() => {
        this.typeText(text, index + 1, textArrayIndex, cb);
      }, this.speed);
    } else {
      let blinkingTimeout = `binding${textArrayIndex}${index}`;

      setTimeoutStore[blinkingTimeout] = setTimeout(() => {
        this.selector[this.typeTarget] = text;
        let timeoutName = `typeTextCb${textArrayIndex}${index}`;
        setTimeoutStore[timeoutName] = setTimeout(cb, this.pause);
      }, 500);
    }
  }

  clearText (text, index, textArrayIndex, cb) {
    if (index <= text.length) {
      this.selector[this.typeTarget] = `${text.substring(0, text.length - index)}${this.getBlinker()}`;

      let timeoutName = `clearText${textArrayIndex}${index}`;

      setTimeoutStore[timeoutName] = setTimeout(() => {
        this.clearText(text, index + 1, textArrayIndex, cb);
      }, this.speed);
    } else {
      let timeoutName = `clearTextCb${textArrayIndex}${index}`;
      setTimeoutStore[timeoutName] = setTimeout(cb, this.pause);
    }
  }

  clearSetTimeoutStore () {
    Object.keys(setTimeoutStore).forEach(key => clearTimeout(setTimeoutStore[key]));
  }

  isSelectorInput () {
    return this.selector instanceof window.HTMLInputElement && this.selector.type === 'text';
  }

  shouldStart () {
    return !this.typing && !this.hasDefaultValue();
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

  mergeOptions (options) {
    this.options = {
      speed: 100,
      pause: 400,
      clearText: false,
      loop: true,
      selector: '.type-writer',
      texts: []
    };

    Object.keys(options).forEach(key => {
      this.options[key] = options[key];
    });
  }
}
