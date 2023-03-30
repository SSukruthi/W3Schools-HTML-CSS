const element = document.querySelector('.box');

element.addEventListener('animationstart', event => {
  console.log('Animation started!');
  console.log('Animation play state:', event.target.style.animationPlayState);
});

element.addEventListener('animationiteration', () => {
  console.log('Animation looped!');
});

element.addEventListener('animationend', event => {
  console.log('Animation ended!');
  console.log('Animation elapsed time:', event.elapsedTime);
});

setTimeout(() => {
  element.style.animationPlayState = 'paused';
  console.log('Animation paused!');
}, 2000);

setTimeout(() => {
  element.style.animationPlayState = 'running';
  console.log('Animation resumed!');
}, 4000);
