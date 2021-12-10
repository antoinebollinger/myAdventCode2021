//Part 1
const day_1_1 = (array) => {
    return array
        .filter((e, i, a) => a[i - 1] <= e)
        .length;
}
// Part 2
const day_1_2 = (array) => {
    return array
        .map((ele, index, array) => parseInt(ele) + parseInt(array[index + 1]) + parseInt(array[index + 2]))
        .filter((ele, index, array) => array[index - 1] < ele)
        .length;
}
//Export
module.exports = { day_1_1: day_1_1, day_1_2: day_1_2 };