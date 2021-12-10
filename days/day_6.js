// PART 1
const day_6_1 = (array, days = 0) => {
    let tmp = array.slice();
    for (let i = 0; i < days; i++) {
        tmp = [...tmp.map(ele => ele === 0 ? 6 : --ele), ...tmp.filter(ele => ele === 0).fill(8)];
    }
    return (tmp.length);
};
const day_6_2 = (array, days = 0) => {
    let tmp = new Array(9).fill(0).map((e, i) => array.filter(ele => ele === i).length);
    for (let i = 0; i < days; i++) {
        nbr0 = tmp[0];
        tmp = tmp.map((e, i, a) => (i === a.length - 1) ? nbr0 : a[i + 1]);
        tmp[6] += nbr0;
    }
    return tmp.reduce((p, c) => p + c);
};

//Export
module.exports = { day_6_1, day_6_2 };