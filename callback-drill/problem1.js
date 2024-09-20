const fs = require('fs')
const path = require('path')
const  folderPath = path.join(__dirname, 'json_files');

fs.mkdir(folderPath, { recursive: true }, () => ['file1', 'file2', 'file3'].forEach((file, i) => 
    fs.writeFile(path.join(folderPath, `${file}.json`), JSON.stringify({ data: `random data ${i+1}` }), () => {
        if (i === 2) console.log('All files created. Deletion in 5 seconds...');
        if (i === 2) setTimeout(() => fs.readdir(folderPath, (err, files) => 
            files.forEach((f, j) => fs.unlink(path.join(folderPath, f), () => {
                if (j === files.length - 1) fs.rmdir(folderPath, () => console.log('All files deleted.'));
            }))), 5000);
    }))
);











// const fs = require('fs'), path = require('path'), folderPath = path.join(__dirname, 'json_files');
// fs.mkdir(folderPath, { recursive: true }, () => ['file1', 'file2', 'file3'].forEach((file, i) => 
//     fs.writeFile(path.join(folderPath, `${file}.json`), JSON.stringify({ data: `random data ${i+1}` }), () => {
//         if (i === 2) fs.readdir(folderPath, (err, files) => files.forEach((f, j) => 
//             fs.unlink(path.join(folderPath, f), () => { if (j === files.length - 1) fs.rmdir(folderPath, () => console.log('All files deleted.')); })));
//     }))
// ));
