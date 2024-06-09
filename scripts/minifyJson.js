const fs = require('fs');
const path = require('path');

const minifyFile = (filePath) => {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const minified = JSON.stringify(JSON.parse(fileContents));
  fs.writeFileSync(filePath, minified);
  console.log(`Minified: ${filePath}`);
};

const minifyJsonFiles = (dir) => {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      minifyJsonFiles(fullPath);
    } else if (path.extname(fullPath) === '.json') {
      minifyFile(fullPath);
    }
  });
};

// 'public/data' ディレクトリをミニファイ
const targetDirectory = path.join(__dirname, '..', 'data');
minifyJsonFiles(targetDirectory);
console.log('JSON files have been minified.');
