// http://javascript.info/localstorage
const storage = localStorage; // konstante gewählt, damit man später an einer stelle alles ändern kann. z.b von localStorage auf sessionStorage. localStorage und sessionStorage sind feste Begriffe, die im Browser schon bestehen, also wo die Info gespeichert wird.

export function setItem(key, value) {
  // Convert any JS-object in a JSON-String
  const jsonValue = JSON.stringify(value);
  storage.setItem(key, jsonValue);
}

export function getItem(key) {
  // Convert JSON-String to JS-object
  const jsonValue = storage.getItem(key);
  if (jsonValue) {
    return JSON.parse(jsonValue);
  }
  return null;
}
