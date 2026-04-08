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
    // Clean tabs and split into words
    const words = text.replace(/\t/g, ' ').split(/\s+/).filter(w => w.length > 0);
    
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

function verticalize(text, stripCount, addSeparator, randomMax, isBase64) {
    let processedText = text;
    
    if (isBase64) {
        // Convert to Base64
        processedText = Buffer.from(text).toString('base64');
        // Virtualize words so randomization and wrapping have boundaries
        processedText = virtualizeWords(processedText);
    }

    let strips;
    if (stripCount) {
        strips = wrapToStrips(processedText, stripCount);
    } else {
        // If not wrapping, we still need to split by spaces if it was base64 virtualized
        strips = isBase64 ? processedText.split('\n') : processedText.split('\n');
        // Note: For Base64 without -w, we might just treat it as one giant line if we don't handle it
        if (isBase64 && !stripCount) {
             strips = [processedText];
        }
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

function main() {
    const args = process.argv.slice(2);
    let stripCount = null;
    let addSeparator = false;
    let shouldCopy = false;
    let randomMax = null;
    let isBase64 = false;
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

    const defaultText = `MordorJS — One Program to Rule Them All

The Eye revealed a shocking truth:
this hidden gem has been lying in plain sight all along — we just never used it.

For decades, we’ve been measuring developer productivity in lines of code.

We pretend we don’t.
We say things like maintainability, clarity, simplicity.
But somewhere in the background, LOC still whispers:

more lines = more work = more value

So I decided to take this idea seriously.

Very seriously.

The Problem Nobody Noticed

Modern code wastes horizontal space.

It assumes:

a wide screen
a cooperative editor
a human reading left to right

Like it’s still 1970 and we’re using typewriters.

But what if that assumption is wrong?`;

    const processResult = (text) => {
        const result = verticalize(text, stripCount, addSeparator, randomMax, isBase64);
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
        if (args.length === 0) {
            console.log("Usage: node mordor.js [-w|--wide number] [-s] [-c|--copy] [-r|--random [number]] [-b64|--base64] [file]");
            console.log("\nDefaulting to MordorJS text:\n");
        }
        processResult(defaultText);
    }
}

main();
