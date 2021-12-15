const { strToArray } = require('./app');

// -------- DAY 1 ---------------- //
const { day_1_1, day_1_2 } = require('./days/day_1');
const input_1 = strToArray('./days/day_1.txt');
const result_1_1 = day_1_1(input_1);
const result_1_2 = day_1_2(input_1);
// console.log(result_1_1);
// console.log(result_1_2);

// -------- DAY 2 ---------------- //
const { day_2_1, day_2_2 } = require('./days/day_2');
const input_2 = strToArray('./days/day_2.txt');
const result_2_1 = day_2_1(input_2);
const result_2_2 = day_2_2(input_2);
// console.log(result_2_1);
// console.log(result_2_2);

// -------- DAY 3 ---------------- //
const { day_3_1, day_3_2 } = require('./days/day_3');
const input_3 = strToArray('./days/day_3.txt');
const result_3_1 = day_3_1(input_3);
const result_3_2 = day_3_2(input_3);
// console.log(result_3_1);
console.log(result_3_2);


// -------- DAY 6 ---------------- //
const { day_6_1, day_6_2 } = require('./days/day_6');
const input_6 = [1, 1, 3, 5, 1, 1, 1, 4, 1, 5, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 2, 5, 1, 1, 1, 1, 1, 2, 1, 4, 1, 4, 1, 1, 1, 1, 1, 3, 1, 1, 5, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 3, 5, 1, 1, 1, 1, 4, 1, 5, 4, 1, 1, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 5, 1, 1, 1, 3, 4, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 4, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 5, 2, 3, 1, 2, 3, 1, 1, 2, 1, 2, 4, 5, 1, 5, 1, 4, 1, 1, 1, 1, 2, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 3, 1, 1, 1, 1, 1, 1, 4, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2, 1, 1, 1, 1, 2, 2, 1, 2, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 4, 2, 1, 4, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 3, 3, 1, 1, 1, 3, 5, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1];
const result_6_1 = day_6_1(input_6, 80);
const result_6_2 = day_6_2(input_6, 256);
// console.log(result_6_1);
// console.log(result_6_2);

