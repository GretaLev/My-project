// Dirbti su šiuo masyvu:
// [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];

// 1. Dirbant su šiuo masyvu eilės tvarka atlikti žemiau pateiktas užduotis. Naudoti metodus: pop, push, shift, unshift, splice.
// 1.1. Pašalinti pirmą masyvo narį.
// 1.2. Pašalinti paskutinį masyvo narį.
// 1.3. Rasti vidurinį masyvo narį ir jį pašalinti.
// 1.4. Pašalinti priešpaskutinį masyvo narį.
// 1.5. Pašalinti antrą masyvo narį.
// 1.6. Pašalinti 7 ir 8 masyvo narius.
// 1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.
// 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.
// 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.
// 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.
// 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.
// 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.
// 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.
// 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.
// 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.
// 1.16. Į masyvo vidurį pridėti skaičių 0.
// 1.17. Pašalinti pirmą masyvo narį.
// 1.18. Pašalinti paskutinį masyvo narį.
// 1.19. Į masyvo pradžią pridėti žodį "start".
// 1.20. Į masyvo pabaigą pridėti žodį "end".

// Atlikus šias užduotis eilės tvarka masyvas turėtų atrodyti taip:
// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

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

// // 1.1. Pašalinti pirmą masyvo narį.

array.shift();

console.log(array);

let first = array.slice(0, 1);
console.log(first);

// // 1.2. Pašalinti paskutinį masyvo narį.

array.pop();

console.log(array);

// // 1.3. Rasti vidurinį masyvo narį ir jį pašalinti.

let middleIndex = Math.floor(array.length / 2);
array.splice(middleIndex, 1);

console.log(array);

// // 1.4. Pašalinti priešpaskutinį masyvo narį.

array.splice(-2, 1);

console.log(array);

// // 1.5. Pašalinti antrą masyvo narį.

array.splice(1, 1);

console.log(array);

// // 1.6. Pašalinti 7 ir 8 masyvo narius.

array.splice(6, 2);

console.log(array);

// // 1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.

array.splice(-6, 3);

console.log(array);

// // 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.

array.splice(2, 1, 888);

console.log(array);

// // 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.

array.splice(9, 1, 33, 789, 6543);

console.log(array);

// // 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.

array.splice(-1, 1, 321, 654, 987);

console.log(array);

// // 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.

array.splice(1, 0, 11);

console.log(array);

// // 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.

array.splice(13, 0, 1);

console.log(array);

// // 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.

array.splice(-1, 0, -1);

console.log(array);

// // 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.

array.unshift(1, 2, 3);

console.log(array);

// // 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.

array.push(-333, -321, -312);

console.log(array);

// // 1.16. Į masyvo vidurį pridėti skaičių 0.

array.splice(13, 0, 0);

console.log(array);

// // 1.17. Pašalinti pirmą masyvo narį.

array.shift();

console.log(array);

// // 1.18. Pašalinti paskutinį masyvo narį.

array.pop();

console.log(array);

// // 1.19. Į masyvo pradžią pridėti žodį "start".

array.unshift("start");

console.log(array);

// // 1.20. Į masyvo pabaigą pridėti žodį "end".

array.push("end");

console.log(array);

// 2. Tęsiant darbą su šiuo masyvu atlikti šias užduotis naudojant slice metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina slice metodas, ir šį kintamąjį išvesti į konsolę:
// 2.1. Gauti pirmą masyvo narį.
// 2.2. Gauti paskutinį masyvo narį.
// 2.3. Gauti antrą masyvo narį.
// 2.4. Gauti priešpaskutinį masyvo narį.
// 2.5. Gauti aštuntą masyvo narį.
// 2.6. Gauti devintą masyvo narį skaičiuojant nuo galo.
// 2.7. Gauti vidurinį masyvo narį.
// 2.8. Gauti pirmus tris masyvo narius.
// 2.9. Gauti paskutinius tris masyvo narius.
// 2.10. Gauti pirmus 10 masyvo narius.
// 2.11. Gauti paskutinius 10 masyvo narius.
// 2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).
// 2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).
// 2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).
// 2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).
// 2.16. Gauti visus masyvo narius išskyrus pirmą.
// 2.17. Gauti visus masyvo narius išskyrus paskutinį.
// 2.18. Gauti visus masyvo narius išskyrus pirmus 5.
// 2.19. Gauti visus masyvo narius išskyrus paskutinius 5.
// 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).
// 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių).
// 2.22. Gauti visus narius išskyrus pirmą ir paskutinį.
// 2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.
// 2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.
// 2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.
// 2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.
// 2.27. Gauti 9 narius skaičiuojant nuo 11.
// 2.28. Gauti 12 narių skaičiuojant nuo 8.
// 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
// 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.

let array = [
  "start",
  2,
  3,
  5,
  11,
  155,
  888,
  "15x",
  6789,
  -5564,
  "obuolys",
  -51,
  55,
  0,
  33,
  789,
  6543,
  1,
  "trylika",
  444,
  321,
  654,
  -1,
  987,
  -333,
  -321,
  "end",
];

console.log(array);

// 2.1. Gauti pirmą masyvo narį.

let start = array.slice(0, 1);
console.log(start);

// 2.2. Gauti paskutinį masyvo narį.

let end = array.slice(-1, 27);
console.log(end);

// 2.3. Gauti antrą masyvo narį.

let second = array.slice(1, 2);
console.log(second);

// 2.4. Gauti priešpaskutinį masyvo narį.

let secondEnd = array.slice(-2, 26);
console.log(secondEnd);

// 2.5. Gauti aštuntą masyvo narį.

let eighth = array.slice(7, 8);
console.log(eighth);

// 2.6. Gauti devintą masyvo narį skaičiuojant nuo galo.

let ninthEnd = array.slice(-9, 19);
console.log(ninthEnd);

// 2.7. Gauti vidurinį masyvo narį.

let middle = array.slice(13, 14);
console.log(middle);

// 2.8. Gauti pirmus tris masyvo narius.

let firstThree = array.slice(0, 3);
console.log(firstThree);

// 2.9. Gauti paskutinius tris masyvo narius.

let lastThree = array.slice(-3, 27);
console.log(lastThree);

// 2.10. Gauti pirmus 10 masyvo narius.

let firstTen = array.slice(0, 10);
console.log(firstTen);

// 2.11. Gauti paskutinius 10 masyvo narius.

let lastTen = array.slice(-10, 27);
console.log(lastTen);

// 2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).

let thirdToEighth = array.slice(2, 8);
console.log(thirdToEighth);

// 2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).

let lastFifthToNinth = array.slice(-9, -4);
console.log(lastFifthToNinth);

// 2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).

let eleventhToNineteenth = array.slice(10, 19);
console.log(eleventhToNineteenth);

// 2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).

let last9To17 = array.slice(-16, -7);
console.log(last9To17);

// 2.16. Gauti visus masyvo narius išskyrus pirmą.

let allWithoutFirst = array.slice(1, 27);
console.log(allWithoutFirst);

// 2.17. Gauti visus masyvo narius išskyrus paskutinį.

let allWithoutLast = array.slice(0, 26);
console.log(allWithoutLast);

// 2.18. Gauti visus masyvo narius išskyrus pirmus 5.

let allWithoutFirstFive = array.slice(5, 27);
console.log(allWithoutFirstFive);

// 2.19. Gauti visus masyvo narius išskyrus paskutinius 5.

let allWithoutLastFive = array.slice(0, 23);
console.log(allWithoutLastFive);

// 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).

let first13 = array.slice(0, 13);
console.log(first13);

// 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių).

let last13 = array.slice(-13, 27);
console.log(last13);

// 2.22. Gauti visus narius išskyrus pirmą ir paskutinį.

let twoTo26 = array.slice(1, 26);
console.log(twoTo26);

// 2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.

let task23 = array.slice(5, 24);
console.log(task23);

// 2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.
let task24 = array.slice(1, 19);
console.log(task24);

// 2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.
let task25 = array.slice(7, 26);
console.log(task25);

// 2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.
let task26 = array.slice(9, 15);
console.log(task26);

// 2.27. Gauti 9 narius skaičiuojant nuo 11.
let task27 = array.slice(10, 19);
console.log(task27);

// 2.28. Gauti 12 narių skaičiuojant nuo 8.
let task28 = array.slice(7, 19);
console.log(task28);

// 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
let firstArray = array.slice(0, 5);
let secondArray = array.slice(-6, 27);
console.log(firstArray);
console.log(secondArray);

let bothArrays = firstArray.concat(secondArray);
console.log(bothArrays);

// 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
let firstArray30 = array.slice(2, 5);
let secondArray30 = array.slice(14, 17);
console.log(firstArray30);
console.log(secondArray30);

let bothArrays30 = firstArray30.concat(secondArray30);
console.log(bothArrays30);
