#!/usr/bin/env node

/**
 * MordorJS - One Program to Rule Them All
 *
 * This program transforms input text into vertical columns.
 * Each input line (or wrapped strip) becomes a 1-character wide column.
 */

const fs = require('fs');
const { spawnSync } = require('child_process');

/**
 * Copies text to the system clipboard based on the platform.
 */
function copyToClipboard(text) {
    try {
        if (process.platform === 'darwin') {
            spawnSync('pbcopy', { input: text });
        } else if (process.platform === 'win32') {
            spawnSync('clip', { input: text });
        } else {
            // Default to xclip for Linux/Unix
            spawnSync('xclip', ['-selection', 'clipboard'], { input: text });
        }
    } catch (err) {
        console.error(`Warning: Failed to copy to clipboard: ${err.message}`);
    }
}

/**
 * Splits a continuous string into "virtual words" of random lengths.
 */
function virtualizeWords(str) {
    let words = [];
    let i = 0;
    while (i < str.length) {
        // Virtual word length between 2 and 7 as requested
        const len = Math.floor(Math.random() * 6) + 2;
        words.push(str.substring(i, i + len));
        i += len;
    }
    return words.join(' ');
}

/**
 * Distributes words into a target number of strips using a more balanced approach.
 */
function wrapToStrips(text, targetStripCount) {
    // Clean tabs to double spaces and split into words
    const words = text.replace(/\t/g, '  ').split(/\s+/).filter(w => w.length > 0);

    if (words.length === 0) return Array(targetStripCount).fill('');
    if (targetStripCount <= 1) return [words.join(' ')];

    const totalContentLength = words.reduce((acc, w) => acc + w.length, 0) + words.length - 1;

    const strips = [];
    let wordIndex = 0;
    let remainingContentLength = totalContentLength;

    for (let i = 0; i < targetStripCount; i++) {
        const remainingStrips = targetStripCount - i;
        const targetForThisStrip = remainingContentLength / remainingStrips;

        let currentStripWords = [];
        let currentStripLength = 0;

        while (wordIndex < words.length) {
            const word = words[wordIndex];
            const wordLenWithSpace = (currentStripWords.length > 0 ? 1 : 0) + word.length;

            if (remainingStrips === 1 ||
                currentStripLength === 0 ||
                Math.abs(currentStripLength + wordLenWithSpace - targetForThisStrip) < Math.abs(currentStripLength - targetForThisStrip)) {

                currentStripWords.push(word);
                currentStripLength += wordLenWithSpace;
                wordIndex++;
                remainingContentLength -= wordLenWithSpace;
            } else {
                break;
            }
        }
        strips.push(currentStripWords.join(' '));
    }

    return strips;
}

/**
 * Adds random spacing between words and at the start.
 */
function applyRandomSpacing(strip, randomMax) {
    const words = strip.split(' ').filter(w => w.length > 0);
    if (words.length === 0) return strip;

    let result = '';
    const startOffset = Math.floor(Math.random() * (randomMax + 1));
    result += ' '.repeat(startOffset);

    for (let i = 0; i < words.length; i++) {
        result += words[i];
        if (i < words.length - 1) {
            const midOffset = 1 + Math.floor(Math.random() * (randomMax + 1));
            result += ' '.repeat(midOffset);
        }
    }
    return result;
}

function verticalize(text, stripCount=null, addSeparator=null, randomMax=null, isBase64=null) {
    // Clean tabs to double spaces
    const cleanText = text.replace(/\t/g, '  ');

    let processedText = cleanText;

    if (isBase64) {
        processedText = Buffer.from(cleanText).toString('base64');
        processedText = virtualizeWords(processedText);
    }

    let strips;
    if (stripCount) {
        strips = wrapToStrips(processedText, stripCount);
    } else {
        strips = processedText.split('\n');
    }

    if (randomMax !== null) {
        strips = strips.map(strip => applyRandomSpacing(strip, randomMax));
    }

    const maxLength = Math.max(...strips.map(s => s.length));
    let output = '';

    for (let i = 0; i < maxLength; i++) {
        let row = '';
        for (let j = 0; j < strips.length; j++) {
            const strip = strips[j];
            row += (strip[i] || ' ');

            if (addSeparator && j < strips.length - 1) {
                row += ' ';
            }
        }
        output += row.trimEnd() + '\n';
    }

    return output;
}

/**
 * Creates a runnable vertical JS "Mordor" file using start and end templates.
 */
function generateMordorJS(jsCode) {
    const startPath = 'tomojs1.js';
    const endPath = 'tomojs2.js';

    if (!fs.existsSync(startPath) || !fs.existsSync(endPath)) {
        throw new Error(`Required template files ${startPath} or ${endPath} not found.`);
    }

    const startTemplate = fs.readFileSync(startPath, 'utf8');
    const endTemplate = fs.readFileSync(endPath, 'utf8');

    // Normalize newlines, tabs, and escape backticks (backtick -> 0x1F)
    const escapedCode = jsCode
      .replace(/`/g, '\x1f')
      // .replace(/(.+)[^;]\n/g,'$1;\n')
    ;

    // Verticalize the escaped code
    const verticalizedCode = verticalize(escapedCode,1);
    const startVert = verticalize(startTemplate,1);
    const endVert = verticalize(endTemplate,1);

    // return verticalizedCode;
    // Concatenate the fragments
    return startVert + verticalizedCode + endVert;
}

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
        if (args[i] === '-w' || args[i] === '--wide') {
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
        if (isMordorJS) {
            result = generateMordorJS(text);
        } else {
            result = verticalize(text, stripCount, addSeparator, randomMax, isBase64);
        }
        process.stdout.write(result);
        if (shouldCopy) {
            copyToClipboard(result);
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
        console.log("Usage: node mordor.js [-w|--wide number] [-s] [-c|--copy] [-r|--random [number]] [-b64|--base64] [-mjs] [file]");
        process.exit(1);
    }
}

main();
