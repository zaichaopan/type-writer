import TypeWriter from '../dist/type-writer';

const texts = ['Laravel is the best!', 'Vue is awesome!'];

let input = document.querySelector('input.type-writer');

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

let paragraph = ['Laravel is the best! <br> Vue is awesome!'];

let paragraphDiv = document.querySelector('div.paragraph');
console.log(paragraphDiv);

let paragraphTypeWriter = new TypeWriter({
  texts: paragraph,
  selector: paragraphDiv,
  speed: 100,
  loop: false,
  clear: false
});

setTimeout(() => {
  paragraphTypeWriter.start();
  console.log('called');
}, 400);
