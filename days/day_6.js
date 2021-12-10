// PART 1
const day_6_1 = (array, days = 0) => {
    let tmp = array.slice();
    for (let i = 0; i < days; i++) {
        tmp = [...tmp.map(ele => ele === 0 ? 6 : --ele), ...tmp.filter(ele => ele === 0).fill(8)];
    }
    return (tmp.length);
}

//Export
module.exports = { day_6_1: day_6_1 };