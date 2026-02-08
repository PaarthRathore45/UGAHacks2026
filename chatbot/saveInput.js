import fs from 'fs';

const inputText = "Finish homework and clean room";
fs.writeFileSync('input.txt', inputText);
console.log("Input saved to input.txt!");