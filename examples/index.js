import TypeWriter from '../dist/type-writer';

/**
 * Turn an input into a type writer
 */
let input = document.querySelector('input.type-writer');
let texts = ['Vue', 'React', 'Angular'];

let inputTypeWriter = new TypeWriter({
  texts,
  selector: input,
  speed: 100,
  loop: true,
  clear: true
});

setTimeout(() => { inputTypeWriter.start(); }, 400);

input.addEventListener('click', () => { inputTypeWriter.stop(); });

input.addEventListener('blur', () => { inputTypeWriter.start(); });

/**
 *  Type each text in a new line
 *
 */
let paragraph = ['Hello world!', 'How are you doing?'];

let paragraphDiv = document.querySelector('div.paragraph');

let paragraphTypeWriter = new TypeWriter({
  texts: paragraph,
  selector: paragraphDiv,
  speed: 100,
  loop: true,
  clear: true,
  lineBreak: true
});

setTimeout(() => { paragraphTypeWriter.start(); }, 400);
