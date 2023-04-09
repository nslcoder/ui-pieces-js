const form = document.querySelector("form");
const item = document.querySelector("input");
const list = document.querySelector("#checklist > ul");
const fullCompletedPath = document.querySelector("#outer-circle");
const completedPercent = document.querySelector("#completed-percent");

let numberOfItems,
  completedCount = 0;

const calculateCompletedPercent = (completedCount) => {
  const percent = Math.round((completedCount / numberOfItems) * 100);
  completedPercent.textContent = `${percent}%`;
};

const calculateCompletedPart = (completedCount) => {
  const completedPart = (completedCount / numberOfItems) * 360;
  fullCompletedPath.style.backgroundImage = `conic-gradient(#1aaff0 0 ${completedPart}deg, #4f4e52 ${
    completedPart === 0 ? 0 : completedPart + 1
  }deg)`;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  newSpan.textContent = item.value;
  const newInput = document.createElement("input");
  newInput.setAttribute("type", "checkbox");

  newLi.appendChild(newSpan);
  newLi.appendChild(newInput);

  list.appendChild(newLi);
  item.value = "";
  numberOfItems = list.childElementCount;

  newInput.addEventListener("change", (e) => {
    if (e.target.checked) {
      completedCount += 1;
      calculateCompletedPart(completedCount);
      calculateCompletedPercent(completedCount);
    } else {
      completedCount -= 1;
      calculateCompletedPart(completedCount);
      calculateCompletedPercent(completedCount);
    }
  });
});
