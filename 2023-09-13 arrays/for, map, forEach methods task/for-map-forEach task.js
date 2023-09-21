// 4. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant for ciklą ir map/forEach metodą. Kiekvieną užduotį atlikti abiem būdais (for ciklu ir map/forEach metodu). Visus narius išvesti į konsole pagal žemiau pateiktas sąlygas:
// 4.1. Tik skaičius (number tipo duomenis).
// 4.2. Tik tekstą (string tipo duomenis).
// 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.
// 4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.
// 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.
// 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".
// 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
//   "Index: 0, Number: 2"
//   "Index: 1, Number: 3"
//   "Index: 2, Number: 5"
//   Ir t.t.
// 4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.
// 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
//   - Pirmo skaičiaus dauginti nereikia.
//   - Antrą skaičių dauginti iš pirmo.
//   - Trečią skaičių dauginti iš antro.
//   - Ketvirta skaičių dauginti iš trečio.
//   - Penktą skaičių dauginti iš ketvirto.
//   Ir t.t.
// 4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.
// 4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".
// 4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".
// 4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";
// 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";
// 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obuolys is between -5564 and -51 in the array".

let array = [
  4,
  5,
  -5556,
  155,
  640,
  "15x",
  6789,
  -5564,
  478,
  654,
  "obuolys",
  789,
  -51,
  55,
  -222,
  0,
  -357,
  -56,
  "trylika",
  444,
  7778,
  4154,
  4751,
];

console.log(array);

// 4. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant for ciklą ir map/forEach metodą. Kiekvieną užduotį atlikti abiem būdais (for ciklu ir map/forEach metodu). Visus narius išvesti į konsole pagal žemiau pateiktas sąlygas:
// 4.1. Tik skaičius (number tipo duomenis).

function task(array) {
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (!isNaN(item)) {
      let ul41 = document.querySelector("#task-41");
      let liElement = document.createElement("li");
      liElement.textContent = item;
      ul41.append(liElement);
    }
  }
}
task(array);

// function taskMap(array) {
//   array.map((item) => {
//     if (!isNaN(item)) {
//    console.log(item)
//     }
//   });
// }

// taskMap(array);

// function taskForEach() {
//   array.forEach((item) => {
//     if (!isNaN(item)) {
//       let liElement = document.createElement("li");
//       liElement.textContent = item;
//       ul41.append(liElement);
//     }
//   });
// }

// taskForEach(array);
// 4.2. Tik tekstą (string tipo duomenis).

for (let i = 0; i < array.length; i++) {
  let item = array[i];
  if (typeof item === "string") {
    let ul42 = document.querySelector("#task-42");
    let liElement = document.createElement("li");
    liElement.textContent = item;
    ul42.append(liElement);
  }
}

// array.map((item) => {
//   if (typeof item === "string") {
//     console.log(item);
//   }
// });

// array.forEach((item) => {
//   if (typeof item === "string") {
//     console.log(item);
//   }
// });

// 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.

for (let i = 0; i < array.length; i++) {
  let item = array[i];
  if (!isNaN(item)) {
    let ul43 = document.querySelector("#task-43");
    let liElement = document.createElement("li");
    liElement.textContent = item ** 4;
    ul43.append(liElement);
  }
}

// array.map((item) => {
//   if (!isNaN(item)) {
//     console.log(item ** 4);
//   }
// });

// array.forEach((item) => {
//   if (!isNaN(item)) {
//     console.log(item ** 4);
//   }
// });

// 4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.

for (let i = 0; i < array.length; i++) {
  let item = array[i];
  if (!isNaN(item)) {
    let ul44 = document.querySelector("#task-44");
    let liElement = document.createElement("li");
    liElement.textContent = item + 55;
    ul44.append(liElement);
  }
}

// array.map((item) => {
//   if (!isNaN(item)) {
//     console.log(item + 55);
//   }
// });

// array.forEach((item) => {
//   if (!isNaN(item)) {
//     console.log(item + 55);
//   }
// });

// 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.

for (let i = 0; i < array.length; i++) {
  let item = array[i];
  if (!isNaN(item)) {
    let ul45 = document.querySelector("#task-45");
    let liElement = document.createElement("li");
    liElement.textContent = item / 2;
    ul45.append(liElement);
  }
}

// array.map((item) => {
//   if (!isNaN(item)) {
//     console.log(item / 2);
//   }
// });

// array.forEach((item) => {
//   if (!isNaN(item)) {
//     console.log(item / 2);
//   }
// });

// 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".

for (let i = 0; i < array.length; i++) {
  let item = array[i];
  if (!isNaN(item)) {
    let ul46 = document.querySelector("#task-46");
    let liElement = document.createElement("li");
    liElement.textContent = "Number: " + item;
    ul46.append(liElement);
  }
}

// array.map((item) => {
//   if (!isNaN(item)) {
//     console.log("Number: " + item);
//   }
// });

// array.forEach((item) => {
//   if (!isNaN(item)) {
//     console.log("Number: " + item);
//   }
// });

// 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
//   "Index: 0, Number: 2"
//   "Index: 1, Number: 3"
//   "Index: 2, Number: 5"
//   Ir t.t.

for (let i = 0; i < array.length; i++) {
  let item = array[i];
  if (!isNaN(item)) {
    let ul47 = document.querySelector("#task-47");
    let liElement = document.createElement("li");
    liElement.textContent = "Index: " + i + "," + " Number: " + item;
    ul47.append(liElement);
  }
}

// array.map(function (item, index) {
//   if (!isNaN(item)) {
//     console.log("Index: " + index + ", " + "Number: " + item);
//   }
// });

// array.forEach(function (item, index) {
//   if (!isNaN(item)) {
//     console.log("Index: " + index + ", " + "Number: " + item);
//   }
// });

// 4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.

for (let i = 0; i < array.length; i++) {
  let item = array[i];
  if (!isNaN(item)) {
    let ul48 = document.querySelector("#task-48");
    let liElement = document.createElement("li");
    liElement.textContent = item * i;
    ul48.append(liElement);
  }
}

// array.map(function (item, index) {
//   if (!isNaN(item)) {
//     console.log(item * index);
//   }
// });

// array.forEach(function (item, index) {
//   if (!isNaN(item)) {
//     console.log(item * index);
//   }
// });

// 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
//   - Pirmo skaičiaus dauginti nereikia.
//   - Antrą skaičių dauginti iš pirmo.
//   - Trečią skaičių dauginti iš antro.
//   - Ketvirta skaičių dauginti iš trečio.
//   - Penktą skaičių dauginti iš ketvirto.
//   Ir t.t.

let arrayNums = array.filter(function (num) {
  return typeof num === "number";
});

console.log(arrayNums);

for (let i = 0; i < arrayNums.length; i++) {
  let item = arrayNums[i];
  let previousNum = arrayNums[i - 1];
  if (i > 0) {
    let ul49 = document.querySelector("#task-49");
    let liElement = document.createElement("li");
    liElement.textContent = item * previousNum;
    ul49.append(liElement);
  }
}

// // arrayNums.map(function (item, i) {
// //   let previousNum = arrayNums[i - 1];
// //   if (i > 0) {
// //     console.log(item * previousNum);
// //   }
// // });

// arrayNums.forEach(function (item, i) {
//   let previousNum = arrayNums[i - 1];
//   if (i > 0) {
//     console.log(item * previousNum);
//   }
// });

// 4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.

let arrayNums5 = array.filter(function (num) {
  return typeof num === "number";
});

console.log(arrayNums);

for (let i = 0; i < arrayNums.length; i++) {
  let item = arrayNums5[i];

  if (item * 5 > 350) {
    let ul410 = document.querySelector("#task-410");
    let liElement = document.createElement("li");
    liElement.textContent = item;
    ul410.append(liElement);
  }
}

// arrayNums.map(function (item, i) {
//   if (item * 5 > 350) {
//     console.log(item);
//   }
// });

// arrayNums.forEach(function (item, i) {
//   if (item * 5 > 350) {
//     console.log(item);
//   }
// });

// 4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".

for (let i = 0; i < array.length; i++) {
  let item = array[i];
  let length = array[i].length;
  if (typeof item === "string") {
    let ul411 = document.querySelector("#task-411");
    let liElement = document.createElement("li");
    liElement.textContent = item + " has " + length + " symbols";
    ul411.append(liElement);
  }
}

// array.map((item) => {
//   let length = item.length;
//   if (typeof item === "string") {
//     console.log(item + " has " + length + " symbols");
//   }
// });

// array.forEach((item) => {
//   let length = item.length;
//   if (typeof item === "string") {
//     console.log(item + " has " + length + " symbols");
//   }
// });

// 4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".

for (let i = 0; i < array.length; i++) {
  let item = array[i];
  if (typeof item === "string") {
    let ul412 = document.querySelector("#task-412");
    let liElement = document.createElement("li");
    liElement.textContent = item.toUpperCase().split("").join("-");
    ul412.append(liElement);
  }
}

// array.map((item) => {
//   if (typeof item === "string") {
//     console.log(item.toUpperCase().split("").join("-"));
//   }
// });

// array.forEach((item) => {
//   if (typeof item === "string") {
//     console.log(item.toUpperCase().split("").join("-"));
//   }
// });

// 4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";
for (let i = 0; i < array.length; i++) {
  let item = array[i];
  if (typeof item === "string") {
    let ul413 = document.querySelector("#task-413");
    let liElement = document.createElement("li");
    splitLetters = item.split("");
    splitLetters[0] = "_";
    splitLetters[2] = "_";
    liElement.textContent = splitLetters.join("");
    ul413.append(liElement);
  }
}

// 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";
for (let i = 0; i < array.length; i++) {
  let item = array[i];
  if (typeof item === "string") {
    let ul414 = document.querySelector("#task-414");
    let liElement = document.createElement("li");
    liElement.textContent = item.split("").reverse().join("");
    ul414.append(liElement);
  }
}

// 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obuolys is between -5564 and -51 in the array".

array.map((item, index) => {
  if (typeof item === "string") {
    if (index === array.length - 1) {
      let ul415 = document.querySelector("#task-415");
      let liElement = document.createElement("li");
      liElement.textContent = `Word ${item} is the first in the array and after ${
        array[index - 1]
      } in the array`;
      ul415.append(liElement);
    } else {
      let ul415 = document.querySelector("#task-415");
      let liElement = document.createElement("li");
      liElement.textContent = `Word ${item} is between ${
        array[index - 1]
      } and ${array[index + 1]} in the array`;
      ul415.append(liElement);
    }
  }
});
