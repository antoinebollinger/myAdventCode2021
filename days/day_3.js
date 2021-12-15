// PART 1
const day_3_1 = (array) => {
    let tmp = new Array(array[0].length).fill(0);
    tmp = tmp.map((e, i, a) => {
        const tmp_0 = array.map(ele => ele.slice(i, i + 1)).filter(ele => ele === '0').length;
        const tmp_1 = array.map(ele => ele.slice(i, i + 1)).filter(ele => ele === '1').length;
        return (tmp_0 > tmp_1) ? 0 : 1;
    });
    return parseInt(tmp.join(''), 2) * parseInt(tmp.map(ele => ele === 0 ? 1 : 0).join(''), 2);
}
const day_3_2 = (array) => {
    let etalon_oxy = new Array(array[0].length).fill(0);
    let etalon_co2 = new Array(array[0].length).fill(0);
    let oxy = array;
    let co2 = array;
    for (i = 0; i < array[0].length; i++) {
        if (oxy.length > 1) {
            etalon_oxy = etalon_oxy.map((e, i, a) => {
                const tmp_0 = oxy.map(ele => ele.slice(i, i + 1)).filter(ele => ele === '0').length;
                const tmp_1 = oxy.map(ele => ele.slice(i, i + 1)).filter(ele => ele === '1').length;
                return (tmp_1 >= tmp_0) ? 1 : 0;
            });
            oxy = oxy.filter(ele => parseInt(ele[i]) === etalon_oxy[i]);
        }
        if (co2.length > 1) {
            etalon_co2 = etalon_co2.map((e, i, a) => {
                const tmp_0 = co2.map(ele => ele.slice(i, i + 1)).filter(ele => ele === '0').length;
                const tmp_1 = co2.map(ele => ele.slice(i, i + 1)).filter(ele => ele === '1').length;
                return (tmp_0 <= tmp_1) ? 0 : 1;
            });
            co2 = co2.filter(ele => parseInt(ele[i]) === etalon_co2[i]);
        }
    }
    return parseInt(oxy[0], 2) * parseInt(co2[0], 2);
}

// const input = ["00100", "11110", "10110", "10111", "10101", "01111", "00111", "11100", "10000", "11001", "00010", "01010"];
// console.log(day_3_2(input));

//Export
module.exports = { day_3_1, day_3_2 };