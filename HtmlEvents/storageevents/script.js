window.addEventListener("storage", myFunction);

function myFunction(event) {
  var url = event.url;
  var key = event.key;
  var oldValue = event.oldValue;
  var newValue = event.newValue;
  var storageArea = event.storageArea;

  document.getElementById("url").textContent = url;
  document.getElementById("key").textContent = key;
  document.getElementById("oldValue").textContent = oldValue;
  document.getElementById("newValue").textContent = newValue;
  document.getElementById("storageArea").textContent = JSON.stringify(storageArea);
}
