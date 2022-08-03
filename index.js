const inputNum = document.querySelector("#number");
const submitBtn = document.querySelector("#submit-btn");
const div = document.querySelector(".container");

submitBtn.addEventListener("click", () => {
  if (inputNum.value > 0) {
    collatzIt();
  } else {
    alert("Input a positive number");
  }
});

function collatzIt() {
  let calculatedNum = inputNum.value;
  let allowTestOn1 = false; //Lar brukeren kjøre testen på tallet 1 også
  let counter = 0;
  let numArray = [];
  numArray.push(parseInt(inputNum.value));

  while (true) {
    if (calculatedNum === 1 && allowTestOn1) {
      break;
    } else if (calculatedNum % 2 === 0) {
      calculatedNum = calculatedNum / 2;
      counter += 1;
      numArray.push(calculatedNum);
    } else if (calculatedNum % 2 !== 0) {
      calculatedNum = calculatedNum * 3 + 1;
      counter += 1;
      numArray.push(calculatedNum);
    } else {
      break;
    }

    allowTestOn1 = true;
  }

  const resultDiv = document.createElement("div");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");

  p1.textContent = "Utfører Collatz funksjonen på tallet " + inputNum.value;
  p2.textContent = "Antall steg før tallet endte på 1: " + counter;
  p3.textContent = "Høyeste tall nådd i sekvensen: " + Math.max(...numArray);
  resultDiv.classList.add("result-div");

  div.appendChild(resultDiv).appendChild(p1);
  div.appendChild(resultDiv).appendChild(p2);
  div.appendChild(resultDiv).appendChild(p3);
  console.log(numArray);
}
