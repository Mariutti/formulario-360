const backClrPicker = document.querySelector(`#backClr`);
const backColor = () => backClrPicker.value;

const formClrPicker = document.querySelector(`#formClr`);
const formColor = () => formClrPicker.value;

const main = document.querySelector(`main`);
const header = document.querySelector("header");
const body = document.body;

function trocaCorForm() {
  console.log("olá");
  main.style.backgroundColor = `${formColor()}`;
  header.style.backgroundColor = `${formColor()}`;
  body.style.backgroundColor = `${backColor()}`;
}

backClrPicker.addEventListener("input", trocaCorForm);
formClrPicker.addEventListener("input", trocaCorForm);
