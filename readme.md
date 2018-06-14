# Type Writer

A nice javascript plugin to add cool __typing text effect__ to your site.

[demo](#)

## Installation

## Usage

* Install the plugin

```bash
npm install --save @zai/type-writer
```

* Import the class

```js
import TypeWriter from '@zai/type-writer';
```

* Instantiate a TypeWriter instance and pass through your config option Object. Supported options:
  * __texts__: an array to hold all the texts you want to type into your page.

  * __selector__: a valid __html DOM__ which can be turned into a type writer. You can also pass __a string__ as selector which can be used by __document.querySelector__.

  * __speed__: an integer (milliseconds) to specify the speed of typing. __The default value is 100__ (milliseconds).

  * __blinkInterval__. an integer (milliseconds) to specify the cursor blinking interval after finishing typing each text item in the texts array. __The default value is is 200__ (millisecond).

  * __clear__: a boolean used to specify whether you want to clear the text from its last char when the text has been typed out. __The default value is true__. If the value is false, the whole text will be removed at one time after it has been typed out.

  * __loop__: a boolean used to specify whether you want to keep looping through all texts in the texts array from the first item after all of them have been typed out. __The default value is true__.

  * __lineBreak__: a boolean used to specify whether you want to type each text in the texts array in a new line. __The default value is false__. If you want to type each text in a new line, set it to false.

A typical TypeWriter instance will look like

```js
import TypeWriter from '@zai/type-writer';

let input = document.querySelector('input.type-writer');
const texts = ['Javascript', 'Vue', 'React', 'Angular'];

let inputTypeWriter = new TypeWriter({
  texts,
  selector: input,
  speed: 100, // default value will be used if it is omitted
  loop: true, // default value will be used if it is omitted
  blinkInterval: 200, // default value will be used if it is omitted
  clear: true, // default value will be used if it is omitted
  lineBlink: false // // default value will be used if it is omitted
});

```

* Start Typing

You can start typing by calling __start__ method of the the instance you created.

```js
inputTypeWriter.start();

// or if you prefer to start typing after a few delay
setTimeout(() => { inputTypeWriter.start(); }, 400);
```

* Stop Typing

You may to want to add some interaction to your site by letting user start or stop the typing. To do that, you only need to call __stop__ method of the instance to stop typing and call __start__ method to start typing again.

```js
inputTypeWriter.stop();
```

__Note:__

__The stop__ method will __stop__ typing and __clear__ all the timers set by the __start__ methods.

## Examples

You can find more useful examples by navigating to the [examples](https://github.com/zaichaopan/type-writer/tree/master/examples) directory. Or you can check the demo link.
