const fontSizeControl = document.querySelector("#font-size-control");

fontSizeControl.addEventListener("input", () => {
  const fontSize = fontSizeControl.value;

  const text = document.querySelector("#text");
  text.style.fontSize = fontSize + "px";
});