const currentHashElement = document.getElementById('currentHash');
const previousHashElement = document.getElementById('previousHash');

window.onhashchange = (event) => {
  console.log('Hash changed!');
  console.log('Old URL:', event.oldURL);
  console.log('New URL:', event.newURL);

  const currentHash = window.location.hash;
  const previousHash = event.oldURL.split('#')[1];
  currentHashElement.textContent = currentHash;
  previousHashElement.textContent = previousHash;
};

currentHashElement.textContent = window.location.hash;
