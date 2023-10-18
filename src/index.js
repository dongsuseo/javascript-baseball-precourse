import { makeAnswer } from "./makeAnswer.js";
import { compare } from "./compare.js";

let strike = 0;
let ball = 0;
const inputValidation = /^[1-9]$/;

const userInput = document.getElementById("user-input");
let result = document.getElementById("result");

const answer = makeAnswer();

userInput.addEventListener("keydown", (event) => {
  event.preventDefault();

  if (!inputValidation.test(event.value.trim())) {
    alert("1~9사이 숫자만 입력 가능합니다.");
  }
  if (event.value.length > 3) {
    alert("3자리 숫자만 입력 가능합니다.");
  }
});

strike, (ball = compare(answer));

if (strike > 0 && ball > 0) {
  result.innerText = `${ball}볼 ${strike}스트라이크`;
} else if (strike > 0) {
  result.innerText = `${strike}스트라이크`;
} else if (ball > 0) {
  result.innerText = `${ball}볼`;
} else {
  result.innerText = `낫싱`;
}
