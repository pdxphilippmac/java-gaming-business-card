// selecting canvas and declaring it as a variable
const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");
const image = document.getElementById("source");

const input1 = document.querySelector("#playstation-input");
const input2 = document.querySelector("#xbox-input");
const input3 = document.querySelector("#steam-input");

// old "image loads on canvas"-function

//   window.onload = function() {
//   let canvas = document.getElementById("canvas");
//   let canvasContext = canvas.getContext("2d");
//   let img = document.getElementById("source");
//   canvasContext.drawImage(img, 10, 10, 480, 380);
// };

// Write on Canvas

// get the canvas in the html document
const generatorImage = document.querySelector("#canvas");

// function to write on image

export function writeOnImage() {
  // after refresh draw image on canvas with the canvas size of the image
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);

  canvasContext.drawImage(image, 0, 0, canvas.width, canvas.height);

  //declare text input design
  canvasContext.font = "28px Cinzel";
  canvasContext.fillStyle = "white";

  canvasContext.shadowColor = "black";
  canvasContext.shadowBlur = 6;
  canvasContext.shadowOffsetX = 3;
  canvasContext.shadowOffsetY = 3;

  //import what is typed into input-text-field

  canvasContext.fillText(input1.value, 100, 290);
  canvasContext.fillText(input2.value, 100, 340);
  canvasContext.fillText(input3.value, 100, 390);
}

// function that gives event listener to input fields

export function addInputEventlistener() {
  input1.addEventListener(
    "input",
    writeOnImage //addPlaystation
  );
  input2.addEventListener("input", writeOnImage);
  input3.addEventListener("input", writeOnImage);
}
// export function addPlaystation() {
//   canvasContext.font = "28px Cinzel";
//   canvasContext.fillStyle = "white";

//   canvasContext.shadowColor = "black";
//   canvasContext.shadowBlur = 6;
//   canvasContext.shadowOffsetX = 3;
//   canvasContext.shadowOffsetY = 3;
//   canvasContext.fillText("Playststation", 100, 290);
// }
writeOnImage();
