const path = require('path');
const fsPromises = require('fs').promises;
const FILENAME = 'bundle.css';
const styles = [];


async function mergeCSS(src, dist) {
  const srcPath = path.join(__dirname, src);
  const distFilePath = path.join(__dirname, dist, FILENAME);

  let files = await fsPromises.readdir(srcPath);
  for (let file of files) {
    const stats = await fsPromises.stat(path.join(srcPath, file));

    if (stats.isFile() && path.extname(file) === '.css') {
      let stylesBuffer = await fsPromises.readFile(path.join(srcPath, file));
      styles.push(stylesBuffer);
    }
  }

  let start = true;
  for(let style of styles) {
    if (start) {
      await fsPromises.writeFile(distFilePath, style);
      start = false;
    } else {
      await fsPromises.writeFile(distFilePath, style, { flag: 'a' });
    }
  }
}


mergeCSS('styles', 'project-dist');