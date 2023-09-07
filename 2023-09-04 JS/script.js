console.groupCollapsed("Basics");
// Kintamojo sukūrimas:
// 1. Inicijavimo žodelis (var, let, const)
// 2. Kintamojo pavadinimas
// 3. Lygybės ženklas
// 4. Kintamojo vertė

var vardas = "John"; //string (tekstas) duomenų tipas
let pavarde = "Joe"; //string (tekstas) duomenų tipas
let miestas = `Kaunas`; //string (tekstas) duomenų tipas
let amzius = 25; // Number (skaičius) duomenų tipas (nereikia kabučių)
let yraStudentas = true; //BooLean (true/false) duomenų tipas (negali būti tarpų)
const asmensKodas = 49205064532; //Number (skaičius) duomenų tipas

console.log(vardas);
console.log(pavarde);
console.log(miestas);
console.log(amzius);
console.log(yraStudentas);
console.log(asmensKodas);

pavarde = "Steve";
// amzius = 26;
amzius = amzius + 1;

console.log(pavarde);
console.log(amzius);

console.log(vardas, typeof vardas);
console.log(amzius, typeof amzius);
console.log(yraStudentas, typeof yraStudentas);

console.log("Hello, " + vardas + ".");
console.log("Hello, " + vardas + ".");
console.log(`Hello, ${vardas}.`);

console.log(
  vardas +
    " " +
    pavarde +
    " (amžius " +
    amzius +
    " m.), asmens kodas: " +
    asmensKodas +
    ", gyvenamasis miestas: " +
    miestas +
    "."
);
// Ignoruoti kabutes galima su back slash ženklu.

let sentence = "Lorem ipsum dolor sit amet consectetur";

console.log(sentence);
console.log(sentence.length); //string simbolių skaičius
console.log(sentence[6]);
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
console.log(sentence.replaceAll("i", "o"));

console.groupEnd();

console.groupCollapsed("Math Operators");
//Matematiniai operatoriai

let num1 = 22;
let num2 = 10;
let num3 = "10";

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

console.log(num1 + num2 * num2);
console.log((num1 + num2) * num2);

console.log(num1 + num3);

console.groupEnd();

//SĄLYGOS
// Dviguba lygybė (loosely equal ==): tikrina TIK reikšmes ir nekreipia dėmesio į duomenų tipą.
console.log(10 == 10); //true
console.log("vienas" == "vienas"); //true
console.log("10" == "10"); //true
console.log(10 == "10"); //true

// Triguba lygybė (strictly qual ===): pirmiausiai tikrina ar sutampa duomenų tipai, o tada tikrina reikšmes.

console.log(10 === 10); //true
console.log("vienas" === "vienas"); //true
console.log("10" === "10"); //true
console.log(10 === "10"); //false

console.log(10 > 10); //false
console.log(10 < 10); //false
console.log(10 >= 10); //true
console.log(10 <= 10); //true

console.log(10 == 10); //true
console.log(10 != 10); //false

console.log(10 === 10); //true
console.log(10 !== 10); //false

console.log(true);
console.log(!true);

// IF, ELSE IF, ELSE
let originalLight = "green";
let light = originalLight.toLowerCase();

console.log(light);
console.log(light.toLowerCase());

if (light === "green") {
  console.log("Galima eiti!");
} else if (light === "yellow") {
  console.log("pasiruošk");
} else if (light === "red") {
  console.log("stop");
} else {
  console.log("sugedo");
}

let word = "tree";
console.log(word);

let fisrtLetter = word[0];

if (fisrtLetter === "t") {
  console.log("žodis ${word} prasideda raide t");
} else {
  console.log("Žodis ${word} neprasideda t raide");
}

// AND OPERATORIUS &&
//OR OPERATORIUS ||

let personAge = 17;

if (personAge >= 18) {
  console.log("pirkti bilietą galima");
} else {
  console.log("pirkti bilieto negali");
}

if (personAge < 18) {
  console.log("pirkti bilieto negalima");
} else {
  console.log("pirkit galima");
}

if (personAge > 17) {
  console.log("pirkti bilieta galima");
} else {
  console.log("pirkti bilieto negali");
}

personAge = 16;

if (personAge < 16) {
  console.log("pirkti negali");
} else if (personAge >= 16 && personAge < 18) {
  console.log("gali pirkti su tėvų sutikimu");
} else if (personAge >= 18) {
  console.log("pirkti bilieta galima");
}

//NESTING

if (personAge >= 16) {
  console.log("pirkit galima");
} else {
  console.log("pirkti negali");
}
