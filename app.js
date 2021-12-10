const fs = require('fs');

const makeArrayFromTxt = (path) => {
    const text = fs.readFileSync(path, 'utf-8');
    const textByLine = text.split('\n');
    return textByLine;
}

module.exports = makeArrayFromTxt;