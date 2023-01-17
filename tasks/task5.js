// Zadanie 5

// Po klinknieciu w przycisk "dodaj Kwadraty" za pomocą metody "createElement" stworz 5 obiektow typu "div"
// i ustylizuj je tak by mialy wysokosc i szerokosc ustawiona na 100px
// (mozna to zrobic ustawiajac atrybuty "style" lub dodac class'e za pomoca metody: classname.add('...'))
// Ustaw takze dla kazdego kwadratu inny losowy (background)kolor (mozna uzyc do tego metody getRandomColor)
// Nastepnie kazdy kwadrat nalezy dodac do naszej strony HTML i umiescic go w div'ie o id:
// "squaresContainer" (METODA: appendChild)

// Uwaga: tworzenie i dodawanie kwadratow najlepiej zrobic za pomoca petli
// ale jesli ktos zrobi bez nie bedzie to mialo wplywu na ocenę
// Uwaga: nowyKwadrat.style.width = '100px' (pamiętać o cudzysłowiach)

function getRandomColor() {
  let color = "#" + Math.floor(Math.random() * 1000000);
  return color;
}

// ROZWIĄZANIE:

const task5SubmitButton = document.querySelector("#task5SubmitButton");
const squaresContainer = document.querySelector("#squaresContainer");
let i = 0;
task5SubmitButton.addEventListener("click", () => {
  for (i; i < 5; i++) {
    const square = document.createElement("div");
    square.style.backgroundColor = getRandomColor();
    squaresContainer.appendChild(square);
    square.classList.add("square");
    console.log(square.style.backgroundColor);
    // czasem nie dodaje albo nie losuje koloru.
    // kod za szybko sie wykonuje czy wylosowany zostaje nieprawidlowy?
  }
});
