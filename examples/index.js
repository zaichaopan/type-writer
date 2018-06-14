import TypeWriter from '../dist/type-writer';

const texts = ['Laravel is the best!', 'Vue is awesome!'];

let input = document.querySelector('input.type-writer');

let inputTypeWriter = new TypeWriter({
  texts,
  selector: input,
  speed: 100,
  loop: true,
  clear: true
}
);

setTimeout(() => { inputTypeWriter.start(); }, 400);

input.addEventListener('click', () => { inputTypeWriter.stop(); });

input.addEventListener('blur', () => { inputTypeWriter.start(); });
