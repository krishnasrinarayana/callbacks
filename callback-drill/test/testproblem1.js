const fs = require('fs');
const path = require('path');

// Import the problem1 script to execute it
require('../problem1');

// Define the directory path
const dirPath = path.join(__dirname, '../json_files');

// Function to check if the directory is empty
function checkIfDirIsEmpty(callback) {
    fs.readdir(dirPath, (err, files) => {
        if (err) throw err;
        callback(files.length === 0);
    });
}

// Function to clean up directory
function cleanup(callback) {
    fs.rmdir(dirPath, (err) => {
        if (err) throw err;
        callback();
    });
}

// Test Problem 1
setTimeout(() => {
    checkIfDirIsEmpty((isEmpty) => {
        if (isEmpty) {
            console.log('Problem 1 Test Passed: Directory is empty.');
        } else {
            console.log('Problem 1 Test Failed: Directory is not empty.');
        }
        e   
        cleanup(() => {
            console.log('Directory cleanup complete.');
        });
    });
}, 2000); // Adjust timeout as needed
