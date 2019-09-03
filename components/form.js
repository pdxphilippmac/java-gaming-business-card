import { getText, setText } from "./gamecard.js";
import { writeOnImage } from "./canvas.js";

const input1 = document.querySelector("#playstation-input");
const input2 = document.querySelector("#xbox-input");
const input3 = document.querySelector("#steam-input");

export function setInitialText() {
  // set initial value in the text-input-boxes
  input1.value = getText(0);
  input2.value = getText(1);
  input3.value = getText(2);

  input1.addEventListener("input", function() {
    setText(0, input1.value);
    writeOnImage();
  });
  input2.addEventListener("input", function() {
    setText(1, input2.value);
    writeOnImage();
  });
  input3.addEventListener("input", function() {
    setText(2, input3.value);
    writeOnImage();
  });
}
