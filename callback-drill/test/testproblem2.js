const fs = require('fs');
const path = require('path');

// Import the problem2 script to execute it
require('../problem2');

// Define file paths
const uppercasedFilePath = path.join(__dirname, '../uppercased.txt');
const sentencesFilePath = path.join(__dirname, '../sentences.txt');
const sortedFilePath = path.join(__dirname, '../sorted.txt');

// Function to read file contents
function readFileContent(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;
        callback(data);
    });
}

// Test Problem 2
setTimeout(() => {
    readFileContent(uppercasedFilePath, (data) => {
        if (data === 'THIS IS A TEST. THIS IS ONLY A TEST.') {
            console.log('Uppercased file test passed.');
        } else {
            console.log('Uppercased file test failed.');
        }
        
        readFileContent(sentencesFilePath, (data) => {
            if (data === 'this is a test.\nthis is only a test.') {
                console.log('Sentences file test passed.');
            } else {
                console.log('Sentences file test failed.');
            }
            
            readFileContent(sortedFilePath, (data) => {
                if (data === 'this is a test.\nthis is only a test.') {
                    console.log('Sorted file test passed.');
                } else {
                    console.log('Sorted file test failed.');
                }
                
            
                fs.unlink(uppercasedFilePath, () => {});
                fs.unlink(sentencesFilePath, () => {});
                fs.unlink(sortedFilePath, () => {});
                console.log('Files cleanup complete.');
            });
        });
    });
}, 2000); // Adjust timeout as needed
