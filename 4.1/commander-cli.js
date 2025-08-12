const { Command } = require('commander');
const fs = require('fs');

const program = new Command();

program.command('count')
.argument('<file>', 'file to count')
.action((file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
        if(err){
            console.log(err);
        } else{
            const lines = data.split('\n').length;
            console.log("There are " + lines + " lines");
        }
    })
})
 
program.parse();