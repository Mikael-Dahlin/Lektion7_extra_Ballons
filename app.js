// declare variables from html elements
const balloons = document.querySelectorAll(".button");
const resetButton = document.querySelector("#reset");
let alerted = false;

// add event listener to balloon elements
balloons.forEach((element) => {
  element.addEventListener("mouseover", (event) => {
    event.preventDefault();
    pop(event.target);
  });
});

// add a second event listener to balloon elements
balloons.forEach((element) => {
  element.addEventListener("mouseout", (event) => {
    event.preventDefault();
    checkDone();
  });
});

// add event listener to Reset Balloons button
resetButton.addEventListener("click", () => {
  document.querySelectorAll(".popped").forEach((element) => {
    element.textContent = "";
    element.classList.remove("popped");
    alerted = false;
  });
});

// function to pop the balloon
function pop(element) {
  element.textContent = "POP!";
  element.classList.add("popped");
}

// function to check if all balloons are popped
function checkDone(){
  if (
    balloons.length === document.querySelectorAll(".popped").length &&
    !alerted
  ) {
    alerted = true;
    alert("Congratulations you have popped all the balloons!");
  }
}