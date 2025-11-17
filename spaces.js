const fs = require ('fs');

const data = fs.readFileSync(
    'ebook.txt',
    {
        encoding: 'utf8',
        flag: 'r'
    }
);


console.log(data.replaceAll(" ", "Ivan Yatsynovych"));