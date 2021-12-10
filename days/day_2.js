const { strToNbr } = require('../app');

// PART 1
const day_2_1 = (array) => {
    const forward = array
        .filter(ele => ele.includes('forward'))
        .map(ele => parseInt(ele.replace('forward ', '')))
        .reduce((pre, cur) => pre + cur);
    const upDown = array
        .filter(ele => !ele.includes('forward'))
        .map(ele => (ele.includes('down') ? parseInt(ele.replace('down ', '')) : -1 * parseInt(ele.replace('up ', ''))))
        .reduce((pre, cur) => pre + cur);
    return (forward * upDown);
}
const day_2_2 = (array) => {
    let aim = 0, horizontal = 0, depth = 0;
    array.forEach(ele => {
        if (ele.includes('forward')) {
            horizontal += strToNbr(ele);
            depth += strToNbr(ele) * aim;
        } else {
            if (ele.includes('down')) {
                aim += strToNbr(ele);
            } else {
                aim -= strToNbr(ele)
            }
        }
    });
    return depth * horizontal;
}

//Export
module.exports = { day_2_1, day_2_2 };
