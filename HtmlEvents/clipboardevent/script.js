const inputField = document.getElementById('inputField');

inputField.oncut = (event) => {
  console.log('Text cut!');
  const clipboardData = event.clipboardData.getData('text/plain');
  console.log('Clipboard data:', clipboardData);
};

inputField.oncopy = (event) => {
  console.log('Text copied!');
  const clipboardData = event.clipboardData.getData('text/plain');
  console.log('Clipboard data:', clipboardData);
};

inputField.onpaste = (event) => {
  console.log('Text pasted!');
  const clipboardData = event.clipboardData.getData('text/plain');
  console.log('Clipboard data:', clipboardData);
};
