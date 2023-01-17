// Zadanie 3
// po kliknieciu przycisku "Oblicz sume", oblicz sumę liczb WIĘKSZYCH od 10 z podanej tablicy liczb (numbersArray) i
// wypisz w div'ie o id: resultContainer3 tą obliczoną sumę
let numbersArray = [10, 2, 5, 11, 20, 100, 5, -8, 7];

// Kod pomocniczy ktory, wyswietla tablice na stronie
const numbersArrayDiv = document.getElementById("numbersArray");
numbersArrayDiv.innerHTML = numbersArray;

// ROZWIĄZANIE:
const task3SubmitButton = document.querySelector("#task3SubmitButton");
const resultContainer3 = document.querySelector("#resultContainer3");

task3SubmitButton.addEventListener("click", () => {
  let sum = 0;

  for (const number of numbersArray) if (number > 10) sum = sum + number;
  resultContainer3.innerHTML = sum;
});

// Zadanie 4

// PO kliknieciu przycisku "Dodaj liczbe",
// do tablicy: "numbersArray" dodaj kolejna liczbe podana przez uzytkownika w inpucie o id: numberToAddToArray

// Dodatkowo lista liczb ktora jest widoczna na stronie (zadanie 3) powinna zostac odswiezona (powinna rozniez wyswietlac ta dodana liczbe)
// UWAGA: jezeli chcesz z inputa dostac liczbe, zastosuj funkcje parseInt np: parseInt(wartoscInputa)
// UWAGA: przed dodaniem do tablicy sprawdz czy wartosc rzeczywiscie nie jest nullem (np kiedy w inpucie nie zostala podana zadna liczba)

// ROZWIĄZANIE:
const task4SubmitButton = document.querySelector("#task4SubmitButton");
const numberToAddToArray = document.querySelector("#numberToAddToArray");

task4SubmitButton.addEventListener("click", () => {
  const newNumber = parseInt(numberToAddToArray.value);

  if (!isNaN(newNumber)) numbersArray.push(newNumber);
  numbersArrayDiv.innerHTML = numbersArray;
  resultContainer3.innerHTML = "";
});
