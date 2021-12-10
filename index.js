const makeArrayFromTxt = require('./app');

// Day 1
const { day_1_1, day_1_2 } = require('./days/day_1');
const input_1 = makeArrayFromTxt('./days/day_1.txt');
const result_1_1 = day_1_1(input_1);
const result_1_2 = day_1_2(input_1);
// console.log(result_1_1);
// console.log(result_1_2);

// Day 2
const { day_2_1 } = require('./days/day_2');
const input_2 = makeArrayFromTxt('./days/day_2.txt');
const result_2_1 = day_2_1(input_2);
// console.log(result_2_1);

// Day 6
const { day_6_1, day_6_2 } = require('./days/day_6');
const input_6 = [1, 1, 3, 5, 1, 1, 1, 4, 1, 5, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 2, 5, 1, 1, 1, 1, 1, 2, 1, 4, 1, 4, 1, 1, 1, 1, 1, 3, 1, 1, 5, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 3, 5, 1, 1, 1, 1, 4, 1, 5, 4, 1, 1, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 5, 1, 1, 1, 3, 4, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 4, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 5, 2, 3, 1, 2, 3, 1, 1, 2, 1, 2, 4, 5, 1, 5, 1, 4, 1, 1, 1, 1, 2, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 3, 1, 1, 1, 1, 1, 1, 4, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2, 1, 1, 1, 1, 2, 2, 1, 2, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 4, 2, 1, 4, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 3, 3, 1, 1, 1, 3, 5, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1];
const result_6_1 = day_6_1(input_6, 80);
const result_6_2 = day_6_2(input_6, 256);
// console.log(result_6_1);
console.log(result_6_2);

