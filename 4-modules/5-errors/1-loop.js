const path = require('path');
const fs = require('fs');

const files = ['.bash_profile', '.npmrc'];

files.forEach(file => {
  try {
    const filePath = path.resolve(process.env.HOME, file);
    const data = fs.readFileSync(filePath);
    console.log('File data is', data);
  } catch (error) {
    console.log("fsomething went wrong and we are going to ignore it");
  }

});
