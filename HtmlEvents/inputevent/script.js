const textInputElement = document.getElementById('textInput');

textInputElement.oninput = (event) => {
  console.log('Input changed!');
  console.log('Input data:', event.data);
  console.log('Input data transfer:', event.dataTransfer);
  console.log('Input type:', event.inputType);
  console.log('Is composing:', event.isComposing);
};
