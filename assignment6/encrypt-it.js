window.addEventListener("load", init);

function init() {
  console.log("Window loaded!");

  let encryptButton = document.getElementById("encrypt-it");
  encryptButton.addEventListener("click", handleEncrypt);

  let resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", handleReset);
}

function handleEncrypt() {
  console.log("Button clicked!");

  let inputText = document.getElementById("input-text").value;
  let encryptedText = shiftCipher(inputText);

  document.getElementById("result").textContent = encryptedText;
}

function handleReset() {
  document.getElementById("input-text").value = "";
  document.getElementById("result").textContent = "";
}

function shiftCipher(text) {
  text = text.toLowerCase();
  let result = "";

  for (let i = 0; i < text.length; i++) {
    if (text[i] < "a" || text[i] > "z") {
      result += text[i];
    } else if (text[i] === "z") {
      result += "a";
    } else {
      let letter = text.charCodeAt(i);
      let resultLetter = String.fromCharCode(letter + 1);
      result += resultLetter;
    }
  }

  return result;
}