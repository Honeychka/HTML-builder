const fs = require('fs');
const process = require('process');
const readline = require('readline');
const path = require('path');
const { stdin: input, stdout: output  } = process;

let link = path.join(__dirname, 'destination.txt')
const file = fs.createWriteStream(link);
const rl = readline.createInterface({ input, output });

output.write('Hi!\n');
const writable = () => {
    rl.question('', (data) => {
      if (data === 'exit') {
        return rl.close(); 
      }
      
      file.write(`${data}\n`);
      writable(); 
    });
  };
  writable();

process.on('exit', (code) => {
    output.write('Good bye!\n');
});
process.on('SIGINT', ()=>{
    process.exit();
})


