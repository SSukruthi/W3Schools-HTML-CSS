const draggable = document.getElementById('draggable');
const dropzone = document.getElementById('dropzone');

draggable.ondragstart = (event) => {
  console.log('Drag started!');
  event.dataTransfer.setData('text/plain', 'Dragged item');
};

draggable.ondrag = () => {
  console.log('Dragging!');
};

draggable.ondragend = () => {
  console.log('Drag ended!');
};

dropzone.ondragenter = (event) => {
  console.log('Drag entered dropzone!');
  event.preventDefault();
  dropzone.classList.add('highlight');
};

dropzone.ondragover = (event) => {
  console.log('Dragging over dropzone!');
  event.preventDefault();
};

dropzone.ondragleave = () => {
  console.log('Drag left dropzone!');
  dropzone.classList.remove('highlight');
};

dropzone.ondrop = (event) => {
  console.log('Dropped!');
  const data = event.dataTransfer.getData('text/plain');
  console.log('Data transferred:', data);
  dropzone.classList.remove('highlight');
};
