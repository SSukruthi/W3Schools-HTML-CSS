// JavaScript for HTML DOM Events

function myClickFunction() {
    document.getElementById("clickDemo").innerHTML = "Hello World (click)";
  }
  
  const div = document.getElementById("myDiv");
  div.addEventListener("contextmenu", (e) => {e.preventDefault()});
  
  function myDblClickFunction() {
    document.getElementById("dblClickDemo").innerHTML += "Hello World (dblclick) ";
  }
  
  const p = document.getElementById("myP");
  p.addEventListener("mousedown", () => {p.style.color = "red"});
  p.addEventListener("mouseup", () => {p.style.color = "blue"});

  function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
  }
  
  function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
  }
  function myFunction(e) {
    let x = e.clientX;
    let y = e.clientY;
    let coor = "Coordinates: (" + x + "," + y + ")";
    document.getElementById("demo").innerHTML = coor;
  }
  
  function clearCoor() {
    document.getElementById("demo").innerHTML = "";
  }
  