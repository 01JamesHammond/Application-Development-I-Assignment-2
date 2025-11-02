//const textAnalyzer = require('./textAnalyzer');
const { countTotalWords, findLongestWord, countTotalLines } = require('../src/textAnalyzer.js');
//console.log(textAnalyzer)




const fs = require('fs');

// Reading the files
const quotesContent = fs.readFileSync('./data/quotes.txt', 'utf8');
const sampleTextContent = fs.readFileSync('./data/sample-text.txt', 'utf8');


// Tests for countWords
describe('countWords function', () => {
    test('counts total words in quotes.txt', () => {
        const result = countTotalWords(quotesContent);
        //expect(typeof result).toBe('number');
        expect(result).toBe(99);
    });

    test('counts total words in sample-text.txt', () => {
        const result = countTotalWords(sampleTextContent);
        //expect(typeof result).toBe('number');
        expect(result).toBe(207);
    });
});

// Tests for findLongestWord
describe('findLongestWord function', () => {
    test('finds the longest word in quotes.txt', () => {
        const result = findLongestWord(quotesContent);
        //expect(typeof result).toBe('string');
        expect(result).toBe("sophistication");
    });

    test('finds the longest word in sample-text.txt', () => {
        const result = findLongestWord(sampleTextContent);
        //expect(typeof result).toBe('string');
        expect(result).toBe("infrastructure");
    });
});




// Tests for countLines
describe('countLines function', () => {
    test('counts total lines in quotes.txt', () => {
        const result = countTotalLines(quotesContent);
        //expect(typeof result).toBe('number');
        expect(result).toBe(10);
    });

    test('counts total lines in sample-text.txt', () => {
        const result = countTotalLines(sampleTextContent);
        //expect(typeof result).toBe('number');
        expect(result).toBe(1);
    });
});
