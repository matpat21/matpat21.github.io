function makeBigger() {
  alert("The text is now bigger!");

  document.getElementById("textInput").style.fontSize = "24pt";
}

function applyStyle() {
  let textArea = document.getElementById("textInput");
  let fancy = document.getElementById("fancyShmancy");

  if (fancy.checked) {
    alert("FancyShmancy selected!");

    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    alert("BoringBetty selected!");

    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

function mooText() {
  let textArea = document.getElementById("textInput");

  let text = textArea.value.toUpperCase();

  let sentences = text.split(".");

  for (let i = 0; i < sentences.length; i++) {
    sentences[i] = sentences[i].trim();

    if (sentences[i].length > 0) {
      sentences[i] = sentences[i] + "-Moo";
    }
  }

  textArea.value = sentences.join(". ");
}
