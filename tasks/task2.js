// Zadanie 2
// Pobierz dwie wartosci z inputow ("firstNumberToCompare", "secondNumberToCompare")
// i sprawdz ktora liczba jest wieksza.
// Następnie w div'ie o id: resultContainer2 po kliknieciu w przycisk "Porownaj" dodaj napis:
// "Wieszka liczba jest ..." (gdzie w miejsce 3 kropek trzeba wpisac ta liczbe)

// UWAGA: Pamietaj ze div z rezultatem ma ustawiony atrybut CSS: "display" na wartość none,
// a więc oznacza ze nie wyswietli sie na stronie
// Nalezy tak zmienic ten atrybut zeby napis byl widoczny na stronie (wartosc: 'block')

// UWAGA: jezeli chcesz z inputa dostac liczbe, zastosuj funkcje parseInt np: parseInt(wartoscInputa)

// ROZWIĄZANIE:

const firstNumberToCompare = document.querySelector("#firstNumberToCompare");
const secondNumberToCompare = document.querySelector("#secondNumberToCompare");
const task2SubmitButton = document.querySelector("#task2SubmitButton");
const resultContainer2 = document.querySelector("#resultContainer2");

task2SubmitButton.addEventListener("click", () => {
  const firstNumber = parseInt(firstNumberToCompare.value);
  const secondNumber = parseInt(secondNumberToCompare.value);
  let result;

  if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    firstNumber === secondNumber
      ? (result = "Liczby są takie same!")
      : firstNumber > secondNumber
      ? (result = `Pierwsza liczba jest większa niż druga: ${firstNumber} > ${secondNumber}`)
      : (result = `Druga liczba jest większa niż pierwsza: ${secondNumber} > ${firstNumber}`);
  } else result = "Wprowadź Obie liczby!";

  resultContainer2.innerHTML = result;
  resultContainer2.style.display = "block";
});
