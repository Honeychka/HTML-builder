const fs = require('fs');
const path = require('path');

let link = path.join(__dirname, 'text.txt')
const stream = fs.createReadStream(link, 'utf-8');
stream.on('data',  chunk => console.log(chunk));
