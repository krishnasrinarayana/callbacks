const fs = require('fs');
const path = require('path');

// Define file paths
const inputFilePath = path.join(__dirname, 'lipsum.txt');
const filenamesFilePath = path.join(__dirname, 'filenames.txt');

// Step 1: Read the given file lipsum.txt
fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) throw err;

    // Step 2: Convert content to uppercase & write to new file
    const uppercasedFilePath = path.join(__dirname, 'uppercased.txt');
    fs.writeFile(uppercasedFilePath, data.toUpperCase(), (err) => {
        if (err) throw err;
        fs.writeFile(filenamesFilePath, 'uppercased.txt\n', (err) => {
            if (err) throw err;

            // Step 3: Read the new file, convert to lowercase, split into sentences, write to new file
            fs.readFile(uppercasedFilePath, 'utf8', (err, uppercasedData) => {
                if (err) throw err;
                const lowercasedContent = uppercasedData.toLowerCase();
                const sentences = lowercasedContent.split('.').map(sentence => sentence.trim()).filter(Boolean);
                const sentencesFilePath = path.join(__dirname, 'sentences.txt');
                fs.writeFile(sentencesFilePath, sentences.join('.\n'), (err) => {
                    if (err) throw err;
                    fs.appendFile(filenamesFilePath, 'sentences.txt\n', (err) => {
                        if (err) throw err;

                        // Step 4: Read the new file, sort content, write to another file
                        fs.readFile(sentencesFilePath, 'utf8', (err, sentencesData) => {
                            if (err) throw err;
                            const sortedSentences = sentencesData.split('\n').sort().join('\n');
                            const sortedFilePath = path.join(__dirname, 'sorted.txt');
                            fs.writeFile(sortedFilePath, sortedSentences, (err) => {
                                if (err) throw err;
                                fs.appendFile(filenamesFilePath, 'sorted.txt\n', (err) => {
                                    if (err) throw err;

                                    // Step 5: Read filenames.txt and delete all new files
                                    fs.readFile(filenamesFilePath, 'utf8', (err, filenamesData) => {
                                        if (err) throw err;
                                        const filesToDelete = filenamesData.split('\n').filter(file => file.trim().length > 0);
                                        filesToDelete.forEach(file => {
                                            fs.unlink(path.join(__dirname, file), (err) => {
                                                if (err) throw err;
                                                console.log(`${file} deleted successfully`);
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
