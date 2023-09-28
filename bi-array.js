"use strict";

let matrizJS = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 2],
];

console.log(matrizJS[0][2]);

matrizJS[0][2] = 25;

let matrizJS2 = [];
matrizJS2[0] = [1, 2, 3];
matrizJS2[1] = [4, 5, 6];
matrizJS2[2] = [7, 8, 9];
matrizJS2[3] = [2.5, 3.8, 15];
matrizJS2[4] = [3.2, 12.3, 13];

console.log(matrizJS[0][2], matrizJS2[4][2]);
