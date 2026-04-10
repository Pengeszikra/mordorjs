const fs = require('fs');
const path = require('path');
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
        // Virtual word length between 2 and 7
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

function verticalize(text, stripCount, addSeparator, randomMax, isBase64) {
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
    const startPath = path.join(__dirname, 'templates', 'start.js');
    const endPath = path.join(__dirname, 'templates', 'end.js');

    if (!fs.existsSync(startPath) || !fs.existsSync(endPath)) {
        throw new Error(`Required template files ${startPath} or ${endPath} not found.`);
    }

    const startTemplate = fs.readFileSync(startPath, 'utf8');
    const endTemplate = fs.readFileSync(endPath, 'utf8');

    // Normalize newlines, tabs, and escape backticks (backtick -> 0x1F)
    const shebangStripped = jsCode.startsWith('#!') 
        ? jsCode.slice(jsCode.indexOf('\n') + 1) 
        : jsCode;
    const unixCode = shebangStripped.replace(/\r\n?/g, '\n');
    const tablessCode = unixCode.replace(/\t/g, '  ');
    const commentSafeCode = tablessCode.replace(/\/\/.*(?=\n|$)/g, (m) => `/*${m.slice(2)}*/`);
    const backslashSafeCode = commentSafeCode.replace(/\\/g, '\\\\').replace(/\$\{/g, '\\${');
    const escapedCode = backslashSafeCode.replace(/`/g, '\x1f');

    // Verticalize the escaped code: every character followed by a newline
    const verticalizedCode = escapedCode.split('').join('\n') + '\n';

    // Concatenate the fragments
    return startTemplate + verticalizedCode + endTemplate;
}

module.exports = {
    copyToClipboard,
    virtualizeWords,
    wrapToStrips,
    applyRandomSpacing,
    verticalize,
    generateMordorJS
};
