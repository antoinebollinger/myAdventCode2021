const fs = require('fs');

const strToArray = (path) => {
    const text = fs.readFileSync(path, 'utf-8');
    const textByLine = text.split('\n');
    return textByLine;
}

const strToNbr = (txt) => {
    return parseInt(txt.match(/\d/g).join(''));
}
module.exports = { strToArray, strToNbr };