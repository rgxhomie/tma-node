const fs = require('fs');
const findMostRepeatedLetter = require('tma-most-repeated-letter');

function analyzeText(filePath) {
  const text = fs.readFileSync(filePath, 'utf-8');

  const mostRepeated = findMostRepeatedLetter(text);

  console.log(`Most repeated letter: ${mostRepeated}`);
}

const filePath = process.argv[2];
if(filePath) analyzeText(filePath);
else console.log('Error! File path is required!')