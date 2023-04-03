document.getElementById("myDIV").addEventListener("transitionend", myFunction);

function myFunction(event) {
    this.innerHTML = "CSS Property used: " + event.propertyName + "<br>" +
                      "Transition lasted: " + event.elapsedTime + " seconds" + "<br>";
}
