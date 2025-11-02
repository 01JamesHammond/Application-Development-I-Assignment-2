const fs = require('fs');
const path = require('path');

// Reading the files
const quotesContent = fs.readFileSync('./data/quotes.txt', 'utf8');
const sampleTextContent = fs.readFileSync('./data/sample-text.txt', 'utf8');



// Display in Command Prompt
console.log('\n=== File Content Start ===\n');
console.log(quotesContent);
console.log('\n=== File Content End ===\n');

// Display in Command Prompt
console.log('\n=== File Content Start ===\n');
console.log(sampleTextContent);
console.log('\n=== File Content End ===\n');




function countTotalWords(content){
    const words = content.split(' ')
    return words.length
}

function findLongestWord(content){
    let longestWord = ''; // To be the longest word
    // I built the entire structure in this function, but I struggled with figuring out how to use the split properly. I took the line directly below from chatGPT AFTER I built everything else and couldn't find a simple solution.
    const words = content.split(/[\s.,!?;:"'()\r\n]+/);
    for(let i = 0; i < words.length; i++){
        if (longestWord.length < words[i].length){
            longestWord = words[i]
        }
    }
    return longestWord
}

function countTotalLines(content){
    const lines = content.split('\n')
    return lines.length
}


// In order to test these function in cmd, here is a prompt "node src/textAnalyzer.js". Using this will output the test our function section below.
// Test our functions
console.log("Testing textAnalyzer.js functions:");

// countTotalWords
console.log("Total Words qoutes content =", countTotalWords(quotesContent));
console.log("Total Words sample-text content =", countTotalWords(sampleTextContent));

// findLongestWord
console.log("Longest Word qoutes content =", findLongestWord(quotesContent));
console.log("Longest Word sample-text content =", findLongestWord(sampleTextContent));

// countTotalLines
console.log("Total Lines qoutes content =", countTotalLines(quotesContent));
console.log("Total Lines sample-text content =", countTotalLines(sampleTextContent));


// Export functions so other files can use them
module.exports = {
    countTotalWords,
    findLongestWord,
    countTotalLines
};