let calculation = localStorage.getItem("calculation") || "";

displayCalculation();

function updateCalculation(value) {
  calculation += value;

  displayCalculation();

  localStorage.setItem("calculation", calculation);
}

function displayCalculation() {
  document.querySelector(".js-calculation").innerHTML = calculation;
}

// document.addEventListener("DOMContentLoaded", () => {
//     let calculation = localStorage.getItem("calculation") || "";
//     let calculationData = document.querySelector(".js-calculation");

//     displayCalculation();

//     window.updateCalculation = function(value) {
//         calculation += value;
//         displayCalculation();
//         localStorage.setItem("calculation", calculation);
//     };

//     function displayCalculation() {
//         calculationData.innerHTML = calculation;
//         calculationData.classList.remove("no-calculation");
//     }
// });
