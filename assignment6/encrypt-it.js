/*
 * Starter file
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signaling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * Sets up event handlers for the Encrypt It and Reset buttons.
   */
  function init() {
    console.log("Window loaded!");

    let encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleEncrypt);

    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleReset);
  }

  /**
   * Encrypts the user's text using a shift cipher and displays the result.
   */
  function handleEncrypt() {
    console.log("Button clicked!");

    let inputText = document.getElementById("input-text").value;
    let encryptedText = shiftCipher(inputText);

    document.getElementById("result").textContent = encryptedText;
  }

  /**
   * Clears the text area and the result output.
   */
  function handleReset() {
    document.getElementById("input-text").value = "";
    document.getElementById("result").textContent = "";
  }

  /**
   * Returns an encrypted version of the given text, where each letter is shifted
   * alphabetically ahead by 1 letter, and z becomes a.
   *
   * @param {string} text - The original text from the textarea.
   * @returns {string} The encrypted text.
   */
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

})();