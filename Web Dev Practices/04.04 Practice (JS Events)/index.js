// 'const' is another keyword to declare variables
// 'document.querySelector' is used to access elements in the html file

// ex 1: button that triggers an alert message
const button =  document.querySelector(".event-button");
button.addEventListener("click", function () {alert("Hey there! Today we're discussing JavaScript Events.");});

// ex 2:
const input = document.querySelector(".input-to-copy");  const paragraph = document.querySelector(".p-to-copy-to");
input.addEventListener("keyup", function () {paragraph.innerText = input.value;});

// ex 3
const input2 = document.querySelector(".color-input");  const paragraph2 = document.querySelector(".color-box");

input2.addEventListener("change", function () {paragraph2.style.backgroundColor = input2.value;});