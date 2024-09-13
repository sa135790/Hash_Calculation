const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// Function to calculate SHA3-256 hash
function calculateSHA3_256(filePath) {
    const hash = crypto.createHash('sha3-256');
    const fileBuffer = fs.readFileSync(filePath);
    hash.update(fileBuffer);
    return hash.digest('hex');
}

// Read files from directory
const dir = './file_Hash_Calculator';   
const files = fs.readdirSync(dir);

// Calculate hashes
let hashes = files.map(file => {
    const filePath = path.join(dir, file);
    return calculateSHA3_256(filePath);
});

// Sort and concatenate hashes
hashes.sort();
const concatenatedHashes = hashes.join('');

// Your email
const email = 'Set your email here'.toLowerCase();
const resultString = concatenatedHashes + email;

// Calculate final SHA3-256 hash
const finalHash = crypto.createHash('sha3-256').update(resultString).digest('hex');
console.log(finalHash);

