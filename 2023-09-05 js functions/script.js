// console.log((10 + 10) * 2);
// console.log((10 + 25) * 2);
// console.log((10 + 30) * 2);
// console.log((10 + 35) * 2);
// console.log((10 + 40) * 2);
// console.log((10 + 45) * 2);
// console.log((10 + 50) * 2);
// console.log((10 + 55) * 2);
// console.log((10 + 60) * 2);
// console.log((10 + 120) * 2);

//DRY - Don't Repeat Ypurself

//FUNKCIJOS
//Funkcija reikia sukurti ir iškviesti

//Funkcijos sukūrimas:
// 1. Inicijavimo žodelis (function)
// 2. Funckijos pavadinimas
//3. Paprasti skliaustai () - skirti funkcijos argumentams arba parametrams
//4. Riestiniai skliaustai {} - skirti funckijos apibrėžimas (rašyti ką ta funkciją turi atlikti)

function hello() {
  console.log("hello");
}

//FUNKCIJOS IŠKVIETIMAS
//1. Funkcijos pavadinimas
//2. Paprasti skliaustai ()

hello();

function helloWithName(personName) {
  console.log(`Hello, ${personName}`);
}

helloWithName("John");
helloWithName("Tom");
helloWithName("Martin");

function getPerimeter(height, width) {
  console.log(height);
  console.log(width);
  console.log("Perimetras: " + (height + width) * 2);
}

getPerimeter(10, 10);
getPerimeter(10, 25);
getPerimeter(10, 35);
getPerimeter(10, 45);
getPerimeter(10, 50);
getPerimeter(10, 55);
getPerimeter(10, 60);
