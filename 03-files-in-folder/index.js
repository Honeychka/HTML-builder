const path = require('path');
const fs = require('fs');


fs.readdir(path.join(__dirname, 'secret-folder'), (err, files) => {
  for (let file of files) {
    fs.stat(path.join(__dirname, 'secret-folder', file), (err, stats) => {
      if (!stats.isDirectory()) {
        const fileName = path.basename(file, path.extname(file));
        const fileExt = path.extname(file).slice(1);
        const fileZize = stats.size;
        console.log( `${fileName} - ${fileExt} - ${fileZize}b`);
      }
    });
  }
});