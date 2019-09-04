import { setItem, getItem } from "./storage.js";

const storageCard = getItem("GameCard");
let gamecard;
if (storageCard) {
  gamecard = storageCard;
} else {
  gamecard = {
    src:
      "https://www.tokkoro.com/picsup/2915032-metal-gear-solid-fox-simple-minimalism-foxhound___mixed-wallpapers.jpg",

    texts: ["PS-ID", "Xbox-ID", "Steam-ID"]
  };
}

export function setSrc(value) {
  gamecard.src = value;
  log();
  setItem("GameCard", gamecard);
}
export function setText(index, value) {
  gamecard.texts[index] = value;
  log();
  setItem("GameCard", gamecard);
}

export function getSrc() {
  return gamecard.src;
}

export function getText(index) {
  return gamecard.texts[index];
}

function log() {
  console.log(gamecard);
}
