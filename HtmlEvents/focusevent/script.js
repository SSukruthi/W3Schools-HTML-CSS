const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

input1.onfocus = (event) => {
  console.log('Input 1 focused!');
  console.log('Related target:', event.relatedTarget);
};

input1.onblur = (event) => {
  console.log('Input 1 blurred!');
  console.log('Related target:', event.relatedTarget);
};

input2.addEventListener('focusin', (event) => {
  console.log('Input 2 focused in!');
  console.log('Related target:', event.relatedTarget);
});

input2.addEventListener('focusout', (event) => {
  console.log('Input 2 focused out!');
  console.log('Related target:', event.relatedTarget);
});
