"use strict";

// selecting canvas and declaring it as a variable
const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");
const image = document.getElementById("source");

window.onload = function() {
  let canvas = document.getElementById("canvas");
  let canvasContext = canvas.getContext("2d");
  var img = document.getElementById("source");
  canvasContext.drawImage(img, 10, 10, 450, 350);
};

//Fill Canvas Red
//canvasContext.fillStyle = "red";
//canvasContext.fillRect(0, 0, 100, 100);

// eigenes zeug

function playstationFunction() {
  // const canvas = document.createTextNode("PlayStation ");
  // document.body.appendChild(canvas);
  //Fill Canvas Red

  image.addEventListener("onclick", e => {
    canvasContext.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);
  });
}
//letctx = canvas.getContext("2d");
//ctx.font = "30px Arial";
//ctx.strokeText("Testy Test", 10, 50);//

//

// selecting Input fields  and declaring it as a variable
let playstation = document.getElementById("playstation-input");

let xbox = document.getElementById("xbox-input");

let steam = document.getElementById("steam-input");

// try
