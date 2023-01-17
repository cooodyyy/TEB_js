// Zadanie 1
//  - Pobierz wartość z inputa (id: randomNumber)
//  - sprawdź czy jest równa szczęśliwej liczbie (7)
//  - Jeżeli po kliknieciu przycisku "losuj" szczesliwa liczba rowna sie siedem
//  - w div'ie "resultContainer1" dodaj tekst "Gratulacje, wygrałeś!"(Pokolorowany na zielono)
//  - jeżeli nie dodaj to napis "Niestety przegrałeś" (pokolorwany na czerwono)

// ROZWIĄZANIE:

const randomNumber = document.querySelector("#randomNumber");
const task1SubmitButton = document.querySelector("#task1SubmitButton");
const resultContainer1 = document.querySelector("#resultContainer1");

const luckyNumber = "7";

task1SubmitButton.addEventListener("click", () => {
  if (!isNaN(parseInt(randomNumber.value))) {
    if (parseInt(randomNumber.value) === parseInt(luckyNumber)) {
      resultContainer1.textContent = "Gratulacje, wygrałeś!";
      resultContainer1.style.color = "green";
    } else {
      resultContainer1.textContent = "Niestety przegrałeś";
      resultContainer1.style.color = "red";
    }
  } else resultContainer1.textContent = "Wprowadź liczbę"
});
