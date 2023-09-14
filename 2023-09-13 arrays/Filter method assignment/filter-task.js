// 3. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant filter metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina filter metodas, ir šį kintamąjį išvesti į konsolę:

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
// 3.1. Gauti tik teigiamus skaičius.

let task31 = array.filter(function (num) {
  return num > -1;
});
console.log(task31);

// 3.2. Gauti tik neigiamus skaičius.
let task32 = array.filter(function (num) {
  return num < 0;
});
console.log(task32);

// 3.3. Gauti tik skaičius, kurie dalinasi iš 2.
let task33 = array.filter(function (num) {
  return num % 2 === 0;
});
console.log(task33);

// 3.4. Gauti tik skaičius, kurie dalinasi iš 3.
let task34 = array.filter(function (num) {
  return num % 3 === 0;
});
console.log(task34);

// 3.5. Gauti tik skaičius, kurie dalinasi iš 5.
let task35 = array.filter(function (num) {
  return num % 5 === 0;
});
console.log(task35);

// 3.6. Gauti tik skaičius, kurie dalinasi iš 11.
let task36 = array.filter(function (num) {
  return num % 11 === 0;
});
console.log(task36);

// 3.7. Gauti tik skaičius, kurie dalinasi iš 31.
let task37 = array.filter(function (num) {
  return num % 31 === 0;
});
console.log(task37);

// 3.8. Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3.
let task38 = array.filter(function (num) {
  return num % 2 === 0 && num % 3 === 0;
});
console.log(task38);

// 3.9. Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7.
let task39 = array.filter(function (num) {
  return num % 3 === 0 && num % 7 === 0;
});
console.log(task39);

// 3.10. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9.
let task310 = array.filter(function (num) {
  return num % 5 === 0 && num % 9 === 0;
});
console.log(task310);

// 3.11. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11.
let task311 = array.filter(function (num) {
  return num % 5 === 0 && num % 11 === 0;
});
console.log(task311);

// 3.12. Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12.
let task312 = array.filter(function (num) {
  return num % 2 === 0 && num % 8 === 0 && num % 12 === 0;
});
console.log(task312);

// 3.13. Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3.
let task313 = array.filter(function (num) {
  return num % 2 === 0 || num % 3 === 0;
});
console.log(task313);

// 3.14. Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5.
let task314 = array.filter(function (num) {
  return num % 3 === 0 || num % 5 === 0;
});
console.log(task314);

// 3.15. Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6.
let task315 = array.filter(function (num) {
  return num % 5 === 0 || num % 6 === 0;
});
console.log(task315);

// 3.16. Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8.
let task316 = array.filter(function (num) {
  return num % 7 === 0 || num % 8 === 0;
});
console.log(task316);

// 3.17. Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13.
let task317 = array.filter(function (num) {
  return num % 9 === 0 || num % 13 === 0;
});
console.log(task317);

// 3.18. Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5.
let task318 = array.filter(function (num) {
  return num % 2 === 0 || num % 3 === 0 || num % 5 === 0;
});
console.log(task318);

// 3.19. Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9.
let task319 = array.filter(function (num) {
  return num % 5 === 0 || num % 7 === 0 || num % 9 === 0;
});
console.log(task319);

// 3.20. Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11.
let task320 = array.filter(function (num) {
  return num % 7 === 0 || num % 8 === 0 || num % 11 === 0;
});
console.log(task320);

// 3.21. Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13.
let task321 = array.filter(function (num) {
  return num % 9 === 0 || num % 12 === 0 || num % 13 === 0;
});
console.log(task321);

// 3.22. Gauti tik skaičius, kurie yra didesni už 100.
let task322 = array.filter(function (num) {
  return num > 100;
});
console.log(task322);

// 3.23. Gauti tik skaičius, kurie yra didesni už 555.
let task323 = array.filter(function (num) {
  return num > 555;
});
console.log(task323);

// 3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.
let task324 = array.filter(function (num) {
  return num >= 888;
});
console.log(task324);

// 3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.
let task325 = array.filter(function (num) {
  return num >= 6789;
});
console.log(task325);

// 3.26. Gauti tik skaičius, kurie yra mažesni už 50.
let task326 = array.filter(function (num) {
  return num < 50;
});
console.log(task326);

// 3.27. Gauti tik skaičius, kurie yra mažesni už 1000.
let task327 = array.filter(function (num) {
  return num < 1000;
});
console.log(task327);

// 3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.
let task328 = array.filter(function (num) {
  return num <= -1;
});
console.log(task328);

// 3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.
let task329 = array.filter(function (num) {
  return num <= -5564;
});
console.log(task329);

// 3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.
let task330 = array.filter(function (num) {
  return num < 1000 && num > 500;
});
console.log(task330);

// 3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.
let task331 = array.filter(function (num) {
  return num < 1000 && num > 500;
});
console.log(task331);

// 3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.
let task332 = array.filter(function (num) {
  return num < 0 && num > -50;
});
console.log(task332);

// 3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.
let task333 = array.filter(function (num) {
  return num <= 0 && num > -100;
});
console.log(task333);

// 3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.
let task334 = array.filter(function (num) {
  return num >= 0 && num < 55;
});
console.log(task334);

// 3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.
let task335 = array.filter(function (num) {
  return num >= 444 && num <= 654;
});
console.log(task335);

// 3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.
let task336 = array.filter(function (num) {
  return num > -1 && num % 2 === 0;
});
console.log(task336);

// 3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3.
let task337 = array.filter(function (num) {
  return num > -1 && num % 3 === 0;
});
console.log(task337);

// 3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4.
let task338 = array.filter(function (num) {
  return num < 0 && num % 4 === 0;
});
console.log(task338);

// 3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.
let task339 = array.filter(function (num) {
  return num < 0 && num % 111 === 0;
});
console.log(task339);

// 3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.
let task340 = array.filter(function (num) {
  return num > 500 && num % 2 === 0;
});
console.log(task340);

// 3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.
let task341 = array.filter(function (num) {
  return num > 1000 && num % 3 === 0;
});
console.log(task341);

// 3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.
let task342 = array.filter(function (num) {
  return num < 1000 && num % 9 === 0;
});
console.log(task342);

// 3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.
let task343 = array.filter(function (num) {
  return num < 500 && num % 2 === 0;
});
console.log(task343);

// 3.44. Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.
let task344 = array.filter(function (num) {
  return num >= 33 && num % 3 === 0;
});
console.log(task344);

// 3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.
let task345 = array.filter(function (num) {
  return num >= 444 && num % 12 === 0;
});
console.log(task345);

// 3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.
let task346 = array.filter(function (num) {
  return num <= 155 && num % 5 === 0;
});
console.log(task346);

// 3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.
let task347 = array.filter(function (num) {
  return num <= -333 && num % 9 === 0;
});
console.log(task347);

// 3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.
let task348 = array.filter(function (num) {
  return num > 100 && num < 500 && num % 5 === 0;
});
console.log(task348);

// 3.49. Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2.
let task349 = array.filter(function (num) {
  return num >= 888 && num < 1000 && num % 2 === 0;
});
console.log(task349);

// 3.50. Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333, dalinasi iš 3 ir nėra nulis.
let task350 = array.filter(function (num) {
  return num <= 888 && num >= -333 && num % 3 === 0 && num != 0;
});
console.log(task350);

// 3.51. Gauti tik skaičius.
let task351 = array.filter(function (num) {
  return !isNaN(num);
});
console.log(task351);

// 3.52. Gauti tik tekstus (string).
let task352 = array.filter(function (num) {
  return typeof num === "string";
});
console.log(task352);

// 3.53. Gauti tik tekstus (string), kurie turi daugiau nei 5 simbolius.
let task353 = array.filter(function (num) {
  return typeof num === "string" && num.length > 5;
});
console.log(task353);

// 3.54. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
let task354 = array.filter(function (num) {
  return typeof num === "string" && num.length <= 5;
});
console.log(task354);

// 3.55. Gauti tik tekstus (string), kurie turi mažiau nei 7 simbolius.
let task355 = array.filter(function (num) {
  return typeof num === "string" && num.length < 7;
});
console.log(task355);

// 3.56. Gauti tik tekstus (string), kurie turi raidę t.
let task356 = array.filter(function (num) {
  return typeof num === "string" && num.includes("t");
});
console.log(task356);

// 3.57. Gauti tik tekstus (string), kurie turi raidę y.
let task357 = array.filter(function (num) {
  return typeof num === "string" && num.includes("y");
});
console.log(task357);

// 3.58. Gauti tik tekstus (string), kurie turi raides e arba a.
let task358 = array.filter(function (num) {
  return typeof num === "string" && (num.includes("e") || num.includes("a"));
});
console.log(task358);

// 3.59. Gauti tik tekstus (string), kurie turi raides t ir i.
let task359 = array.filter(function (num) {
  return typeof num === "string" && (num.includes("t") || num.includes("i"));
});
console.log(task359);

// 3.60. Gauti tik tekstus (string), kurie turi raide t, bet neturi raidės k.
let task360 = array.filter(function (num) {
  return typeof num === "string" && num.includes("t") && !num.includes("k");
});
console.log(task360);

// 3.61. Gauti tik tekstus (string), kurie turi raide a, bet neturi raidės s.
let task361 = array.filter(function (num) {
  return typeof num === "string" && num.includes("a") && !num.includes("s");
});
console.log(task361);

// 3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t.
let task362 = array.filter(function (num) {
  return typeof num === "string" && num.includes("t");
});
console.log(task362);

// 3.63. Gauti tik tekstus (string), kurie turi raidžių junginį st.
let task363 = array.filter(function (num) {
  return typeof num === "string" && num.includes("st");
});
console.log(task363);

// 3.64. Gauti tik tekstus (string), kurie turi raidžių junginį nd.
let task364 = array.filter(function (num) {
  return typeof num === "string" && num.includes("nd");
});
console.log(task364);

// 3.65. Gauti tik tekstus (string), kurie neturi raidės s.
let task365 = array.filter(function (num) {
  return typeof num === "string" && !num.includes("s");
});
console.log(task365);

// 3.66. Gauti tik tekstus (string), kurie neturi raidės t.
let task366 = array.filter(function (num) {
  return typeof num === "string" && !num.includes("t");
});
console.log(task366);

// 3.67. Gauti tik tekstus (string), kurie neturi raidės r ir l.
let task367 = array.filter(function (num) {
  return typeof num === "string" && !num.includes("r") & !num.includes("l");
});
console.log(task367);

// 3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi.
let task368 = array.filter(function (num) {
  return typeof num === "string" && /^\d/.test(num);
});
console.log(task368);

// 3.69. Gauti tik tekstus (string), kurie prasideda raide s.
let task369 = array.filter(function (num) {
  return typeof num === "string" && num.startsWith("s");
});
console.log(task369);

// 3.70. Gauti tik tekstus (string), kurie prasideda raide o.
let task370 = array.filter(function (num) {
  return typeof num === "string" && num.startsWith("o");
});
console.log(task370);

// 3.70. Gauti tik tekstus (string), kurie baigiasi raide d.
let task37o = array.filter(function (num) {
  return typeof num === "string" && num.endsWith("d");
});
console.log(task37o);

// 3.71. Gauti tik tekstus (string), kurie baigiasi raide s.
let task371 = array.filter(function (num) {
  return typeof num === "string" && num.endsWith("s");
});
console.log(task371);

// 3.72. Gauti tik tekstus (string), kurie turi daugiau nei 4 simbolius ir turi raidę o.
let task372 = array.filter(function (num) {
  return typeof num === "string" && num.length > 4 && num.includes("o");
});
console.log(task372);

// 3.73. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
let task373 = array.filter(function (num) {
  return typeof num === "string" && num.length >= 5 && num.includes("a");
});
console.log(task373);

// 3.74. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių.
let task374 = array.filter(function (num) {
  return typeof num === "string" && num.length % 2 === 0;
});
console.log(task374);

// 3.75. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s.
let task375 = array.filter(function (num) {
  return typeof num === "string" && num.length % 2 === 1 && num.includes("s");
});
console.log(task375);

// 3.76. Gauti tik tekstus (string), kurių trečias simbolis yra a.
let task376 = array.filter(function (num) {
  return typeof num === "string" && num.charAt(2) === "a";
});
console.log(task376);

// 3.77. Gauti tik tekstus (string), kurių ketvirtas simbolis yra l.
let task377 = array.filter(function (num) {
  return typeof num === "string" && num.charAt(3) === "l";
});
console.log(task377);

// 3.78. Gauti tik tekstus (string), kurių penktas simbolis nėra t ir kurie turi daugiau simbolių nei 4.
let task378 = array.filter(function (num) {
  return typeof num === "string" && num.charAt(4) !== "t" && num.length > 4;
});
console.log(task378);

// 3.79. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.
let task379 = array.filter(function (num) {
  return (
    typeof num === "string" &&
    num.charAt(0) !== "e" &&
    num.length < 6 &&
    !/^\d/.test(num)
  );
});
console.log(task379);
