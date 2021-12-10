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

//Export
module.exports = { day_2_1 };
