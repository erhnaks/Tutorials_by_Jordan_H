"user strict";

const numberOutput = document.querySelector("#number");
const subTen = document.querySelector("#subTen");
const reset = document.querySelector("#reset");
const addTen = document.querySelector("#addTen");

const changeInput = (event) => {
  const text = event.target.innerText;
  event.preventDefault();
  text === "reset"
    ? (numberOutput.value = 0)
    : (numberOutput.value =
        parseInt(numberOutput.value) + parseInt(event.target.innerText));
};
