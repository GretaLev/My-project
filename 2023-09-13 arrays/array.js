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

// 1.1. Pašalinti pirmą masyvo narį.

array.shift();

console.log(array);

// 1.2. Pašalinti paskutinį masyvo narį.

array.pop();

console.log(array);

// 1.3. Rasti vidurinį masyvo narį ir jį pašalinti.

let middleIndex = Math.floor(array.length / 2);
array.splice(middleIndex, 1);

console.log(array);

// 1.4. Pašalinti priešpaskutinį masyvo narį.

array.splice(-2, 1);

console.log(array);

// 1.5. Pašalinti antrą masyvo narį.

array.splice(1, 1);

console.log(array);

// 1.6. Pašalinti 7 ir 8 masyvo narius.

array.splice(6, 2);

console.log(array);

// 1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.

array.splice(-6, 3);

console.log(array);

// 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.

array.splice(2, 1, 888);

console.log(array);

// 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.

array.splice(9, 1, 33, 789, 6543);

console.log(array);

// 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.

array.splice(-1, 1, 321, 654, 987);

console.log(array);

// 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.

array.splice(1, 0, 11);

console.log(array);

// 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.

array.splice(13, 0, 1);

console.log(array);

// 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.

array.splice(-1, 0, -1);

console.log(array);

// 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.

array.unshift(1, 2, 3);

console.log(array);

// 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.

array.push(-333, -321, -312);

console.log(array);

// 1.16. Į masyvo vidurį pridėti skaičių 0.

array.splice(13, 0, 0);

console.log(array);

// 1.17. Pašalinti pirmą masyvo narį.

array.shift();

console.log(array);

// 1.18. Pašalinti paskutinį masyvo narį.

array.pop();

console.log(array);

// 1.19. Į masyvo pradžią pridėti žodį "start".

array.unshift("start");

console.log(array);

// 1.20. Į masyvo pabaigą pridėti žodį "end".

array.push("end");

console.log(array);
