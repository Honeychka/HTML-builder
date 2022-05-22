const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

async function copyDir(src, dist)  {
  const srcPath = path.join(__dirname, src);
  const distPath = path.join(__dirname, dist);

  await fsPromises.mkdir(distPath, { recursive: true });

  let files =  await fsPromises.readdir(distPath);
  
  for (let file of files) {
    await fsPromises.rm(path.join(distPath, file));
  }
  files = await fsPromises.readdir(srcPath);
  
  for (let file of files) {
    await fsPromises.copyFile(path.join(srcPath, file), path.join(distPath, file));
  }
}
copyDir('files', 'files-copy');
