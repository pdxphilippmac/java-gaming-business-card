import { getText, setText } from "./gamecard.js";

// selecting canvas and declaring it as a variable
const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");
const image = document.getElementById("source");
const generatorImage = document.querySelector(".summary-image1");

//Input wird im html gefunden
// const input1 = document.querySelector("#playstation-input");
// const input2 = document.querySelector("#xbox-input");
// const input3 = document.querySelector("#steam-input");

// Write on Canvas

// get the canvas in the html document

// function to write on image

export function writeOnImage() {
  // after refresh draw image on canvas with the canvas size of the image
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);

  canvasContext.drawImage(generatorImage, 0, 0, canvas.width, canvas.height);

  //declare text input design
  canvasContext.font = "20px Cinzel";
  canvasContext.fillStyle = "white";
  canvasContext.shadowColor = "black";
  canvasContext.shadowBlur = 6;
  canvasContext.shadowOffsetX = 3;
  canvasContext.shadowOffsetY = 3;

  //import what is typed into input-text-field
  const text0 = getText(0); // die funktion in eine variabel packen und dann den text0 in die if-abfrage stellen.
  if (text0) {
    canvasContext.fillText(`Playstation: ${text0}`, 150, 330);
  }
  const text1 = getText(1);
  if (text1) {
    canvasContext.fillText(`Xbox: ${text1}`, 150, 360);
  }
  const text2 = getText(2);
  if (text2) {
    canvasContext.fillText(`Steam: ${text2}`, 150, 390);
  }
}
// inpt add text only when input
// if (input1.text[0]) {
//   canvasContext.fillText(`Playstation: ${getText[0]}}`, 100, 330);
// }
// if (input2.value) {
//   canvasContext.fillText(`Xbox: ${input2.value}`, 100, 340);
// }
// if (input3.value) {
//   canvasContext.fillText(`Steam: ${getText(2)}`, 100, 370);
// }
