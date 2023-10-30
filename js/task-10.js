function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const controls = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  const boxesArr = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesArr.push(box);
  }

  boxesArr.forEach((box) => {
    boxes.appendChild(box);
  });
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

controls.querySelector("button[data-create]").addEventListener("click", () => {
  createBoxes(parseInt(controls.querySelector("input").value));
});

controls.querySelector("button[data-destroy]").addEventListener("click", destroyBoxes);