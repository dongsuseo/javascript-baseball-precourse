const userInput = document.getElementById("user-input").value;
let strike = 0;
let ball = 0;

const compare = (answer) => {
  if (userInput.indexOf(answer[0]) == 0) {
    strike++;
  } else if (userInput.indexOf(answer[0]) != -1) {
    ball++;
  }
  if (userInput.indexOf(answer[1]) == 1) {
    strike++;
  } else if (userInput.indexOf(answer[0]) != -1) {
    ball++;
  }
  if (userInput.indexOf(answer[2]) == 2) {
    strike++;
  } else if (userInput.indexOf(answer[0]) != -1) {
    ball++;
  }
  console.log(userInput, answer, strike, ball);

  return strike, ball;
};
