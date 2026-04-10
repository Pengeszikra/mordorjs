#!/usr/bin/env node

const fs = require('fs');
const { verticalize, generateMordorJS, copyToClipboard } = require('./index');

function main() {
    const args = process.argv.slice(2);
    let stripCount = null;
    let addSeparator = false;
    let shouldCopy = false;
    let randomMax = null;
    let isBase64 = false;
    let isMordorJS = false;
    let filePath = null;

    for (let i = 0; i < args.length; i++) {
        if (args[i] === '-h' || args[i] === '--help') {
            console.log("Usage: mordorjs [options] [file]");
            console.log("\nOptions:");
            console.log("  -w, --wide <number>    Wrap into exactly <number> vertical strips");
            console.log("  -s                     Add a spacing strip between data strips");
            console.log("  -c, --copy             Automatically copy the result to the clipboard");
            console.log("  -r, --random [number]  Add random vertical spacing (default 3)");
            console.log("  -b64, --base64         Encode input to Base64 before verticalizing");
            console.log("  -mjs, --mordorjs       Create a runnable vertical JS 'Mordor' file");
            console.log("  -h, --help             Show this help message");
            process.exit(0);
        } else if (args[i] === '-w' || args[i] === '--wide') {
            stripCount = parseInt(args[i + 1], 10);
            i++; 
        } else if (args[i] === '-s') {
            addSeparator = true;
        } else if (args[i] === '-c' || args[i] === '--copy') {
            shouldCopy = true;
        } else if (args[i] === '-b64' || args[i] === '--base64') {
            isBase64 = true;
        } else if (args[i] === '-mjs' || args[i] === '--mordorjs') {
            isMordorJS = true;
        } else if (args[i] === '-r' || args[i] === '--random') {
            const nextArg = args[i + 1];
            if (nextArg && !isNaN(parseInt(nextArg, 10)) && !nextArg.startsWith('-')) {
                randomMax = parseInt(nextArg, 10);
                i++;
            } else {
                randomMax = 3; 
            }
        } else if (!filePath && !args[i].startsWith('-')) {
            filePath = args[i];
        }
    }

    const processResult = (text) => {
        let result;
        try {
            if (isMordorJS) {
                result = generateMordorJS(text);
            } else {
                result = verticalize(text, stripCount, addSeparator, randomMax, isBase64);
            }
            process.stdout.write(result);
            if (shouldCopy) {
                copyToClipboard(result);
            }
        } catch (err) {
            console.error(`Error: ${err.message}`);
            process.exit(1);
        }
    };

    if (filePath) {
        try {
            const data = fs.readFileSync(filePath, 'utf8');
            processResult(data);
        } catch (err) {
            console.error(`Error reading file: ${err.message}`);
            process.exit(1);
        }
    } else if (!process.stdin.isTTY) {
        let data = '';
        process.stdin.on('data', chunk => {
            data += chunk;
        });
        process.stdin.on('end', () => {
            processResult(data);
        });
    } else {
        console.error("Warning: no input provided. Pass a file or pipe text via stdin.");
        console.log("Usage: mordorjs [options] [file]");
        console.log("Use 'mordorjs --help' to see all available options.");
        process.exit(1);
    }
}

module.exports = { main };

if (require.main === module) {
    main();
}
