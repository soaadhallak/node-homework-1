import os from "node:os";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { add,subtract,multiply } from "./math.js";
import chalk from "chalk";
import fs from "node:fs";

//------------------------
//----CONSTS VARIABLES----
//------------------------

// Convert total memory and free memory from bytes to megabytes
const totalMemory = (os.totalmem() / (1024 * 1024)).toFixed(0);
const freeMemory = (os.freemem() / (1024 * 1024)).toFixed(0);

const fileName = fileURLToPath(import.meta.url);
const direPath = dirname(fileName);
const numberOne = 4;
const numberTwo = 5;

// CLI inputs
const numberOneFromCLI = Number(process.argv[2]) ?? 0;
const numberTwoFromCLI = Number(process.argv[3]) ?? 0;

//---------------------
//----- CONSOLE LOG----
//---------------------

// Display the start
console.log("Hello from Node.js!");

// Display project path information
console.log(`The current file name: ${fileName}`);
console.log(`The current directory: ${direPath} `);

// Display OS details
console.log(`OS: ${os.type()}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

// Display math operations resualts
console.log(`${numberOne} + ${numberTwo} = ${add(numberOne,numberTwo)}`);
console.log(`${numberOne} - ${numberTwo} = ${subtract(numberOne,numberTwo)}`);
console.log(`${numberOne} * ${numberTwo} = ${multiply(numberOne,numberTwo)}`);

// Messages with colors
console.log(chalk.green("Success!"));
console.log(chalk.yellow("Warning!"));
console.log(chalk.red("Error!"));

// Write in file with read from it 
fs.writeFile("log.txt","Node.js homework completed successfully.",(err) => {
    if(err) {
        console.error(`Error handling file: ${err}`);
        return ;
    } 

    console.log("File created successfully!");

    fs.readFile("log.txt","utf8",(err,data) => {
        if(err) {
            console.error(`Error handling file: ${err}`);
            return ;
        }

        console.log(`File Content: ${data}`);
    })
})

// Display add operation resualt 
console.log(`Result: ${add(numberOneFromCLI,numberTwoFromCLI)}`);