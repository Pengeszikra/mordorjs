#!/usr/bin/env node

/** MordorJS - the world's first real 1W (1-character-wide) programming language. Transforms any JS file into a vertical, executable format where each character occupies its own line. */

const fs = require('fs');
const { spawnSync } = require('child_process');

/** @returns {string} Verticalized `code-begin.js` (base64-embedded), opens the T template literal and defines single-char variable bindings. */
function codeBegin() {
  return Buffer.from('WwosCmMKLAosCmUKLAosCmYKLAosCmgKLAosCmkKLAosCmoKLAosCmwKLAosCm0KLAosCm4KLAosCm8KLAosCnAKLAosCnIKLAosCnMKLAosCnQKLAosCnUKLAosCmEKLAosCmQKLAosCmcKLAosClMKLAosCkMKLAosClgKLAosClkKLAosCloKLAosCkQKXQo9CmAKYwplCmYKaAppCmoKbAptCm4KbwpwCnIKcwp0CnUKYQpkCmcKUwpDCigKKQogCi4KYAo7CkEKPQo5CisKMQo7Ck8KPQpzCisKbworCnIKKwp0CjsKSwo9CmMKKwpvCisKbgorCnMKKwp0CisKcgorCnUKKwpjCisKdAorCm8KKwpyCjsKUAo9CnMKKwpwCisKbAorCmkKKwp0CjsKSgo9CmoKKwpvCisKaQorCm4KOwpGCj0KWwpdClsKTwpdClsKSwpdCjsKUgo9CnIKKwplCisKdAorCnUKKwpyCisKbgorCloKKwpTCisKdAorCnIKKwppCisKbgorCmcKKwpECisKZgorCnIKKwpvCisKbQorCkMKKwpoCisKYQorCnIKKwpDCisKbworCmQKKwplCisKWAo7CkUKPQpbCl0KKwpbCl0KOwpOCj0KYApgCjsKdwo9CkYKKApSCisKKApBCioKMwotCjEKKQorClkKKQooCikKOwpCCj0KRgooClIKKwpBCioKMworClkKKQooCikKOwpRCj0KRgooClIKKwooCkEKKgozCisKMQopCisKWQopCigKKQo7ClQKPQpgCg==','base64').toString();
}

/** @returns {string} Verticalized `code-end.js` (base64-embedded), closes T, decodes the source and evaluates it via `new Function`. */
function codeEnd() {
  return Buffer.from('YAo7CkcKPQpGCigKUgorCkEKKwpZCikKKAopCjsKTQo9ClQKWwpQCl0KKApHCikKWwpKCl0KKApFCikKOwpWCj0KRgooClIKKwooCkEKKgo5CisKNgopCisKWQopCigKKQo7ClcKPQpGCigKUgorCigKQQoqCjkKKwoyCikKKwpZCikKKAopCjsKTQo9Ck0KWwpQCl0KKApRCikKWwpKCl0KKApWCikKWwpQCl0KKAp3CikKWwpKCl0KKApXCikKWwpQCl0KKApCCikKWwpKCl0KKApHCikKOwpGCigKTQopCigKKQo7Cg==','base64').toString();
}

/** Encoding sentinel characters (U+001D, U+001E, U+001F) used to safely represent `\`, `\n`, and `` ` `` inside the 1W template literal. */
const [ALIAS_BACKSLASH, ALIAS_NEWLINE, ALIAS_BACKTICK] = `\x1d\x1e\x1f`;

/** @param {string} text - Copies text to the system clipboard (macOS/Windows/Linux). */
function copyToClipboard(text) {
    try {
        if (process.platform === 'darwin') {
            spawnSync('pbcopy', { input: text });
        } else if (process.platform === 'win32') {
            spawnSync('clip', { input: text });
        } else {
            spawnSync('xclip', ['-selection', 'clipboard'], { input: text });
        }
    } catch (err) {
        console.error(`Warning: Failed to copy to clipboard: ${err.message}`);
    }
}

/** @param {string} str - Splits a string into pseudo-words of random length (2–7 chars) joined by spaces. @returns {string} */
function virtualizeWords(str) {
    let words = [];
    let i = 0;
    while (i < str.length) {
        const len = Math.floor(Math.random() * 6) + 2;
        words.push(str.substring(i, i + len));
        i += len;
    }
    return words.join(' ');
}

/** @param {string} text @param {number} targetStripCount - Distributes words into N balanced vertical strips. @returns {string[]} */
function wrapToStrips(text, targetStripCount) {
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

/** @param {string} strip @param {number} randomMax - Applies random leading and inter-word spacing up to `randomMax` extra spaces. @returns {string} */
function applyRandomSpacing(strip, randomMax) {
    const words = strip.split(' ').filter(w => w.length > 0);
    if (words.length === 0) return strip;

    let result = ' '.repeat(Math.floor(Math.random() * (randomMax + 1)));
    for (let i = 0; i < words.length; i++) {
        result += words[i];
        if (i < words.length - 1) {
            result += ' '.repeat(1 + Math.floor(Math.random() * (randomMax + 1)));
        }
    }
    return result;
}

/** @param {string} text @param {number|null} stripCount @param {boolean|null} addSeparator @param {number|null} randomMax @param {boolean|null} isBase64 - Renders text in vertical (1-char-per-row) or multi-strip format. @returns {string} */
function verticalize(text, stripCount=null, addSeparator=null, randomMax=null, isBase64=null) {
    const cleanText = text.replace(/\t/g, '  ');
    let processedText = cleanText;

    if (isBase64) {
        processedText = Buffer.from(cleanText).toString('base64');
        processedText = virtualizeWords(processedText);
    }

    let strips = stripCount ? wrapToStrips(processedText, stripCount) : processedText.split('\n');

    if (randomMax !== null) {
        strips = strips.map(strip => applyRandomSpacing(strip, randomMax));
    }

    const maxLength = Math.max(...strips.map(s => s.length));
    let output = '';
    for (let i = 0; i < maxLength; i++) {
        let row = '';
        for (let j = 0; j < strips.length; j++) {
            row += (strips[j][i] || ' ');
            if (addSeparator && j < strips.length - 1) row += ' ';
        }
        output += row.trimEnd() + '\n';
    }
    return output;
}

/** @param {string} text - Puts each character on its own line (strips all existing newlines first). @returns {string} */
function verticalizeRaw(text) {
  return text
    .replace(/\t/g, '  ')
    .replace(/\r/g, '')
    .replace(/\n/g, '')
    .split('')
    .join('\n') + '\n';
}

/** @param {string} jsCode - Encodes and verticalizes JS source into a self-executing 1W MordorJS file. Detects shebang and `require` usage to build the minimal non-1W prefix. @returns {string} */
function generateMordorJS(jsCode) {
    const startVert = codeBegin();
    const endVert = codeEnd();

    const hasShebang = jsCode.startsWith('#!');
    const strippedCode = jsCode
      .replace(/^#!.*\n/, '')
      .replace(/\r/g, '');

    const hasRequire = /\brequire\s*\(/.test(strippedCode);

    const escapedCode = strippedCode
      .replace(/\\/g, '\x1d')
      .replace(/\n/g, '\x1e')
      .replace(/`/g, '\x1f')
    ;

    const verticalizedCode = verticalizeRaw(escapedCode);

    const prefix = [
      hasShebang ? '#!/usr/bin/env node'    : '',
      hasRequire ? 'global.require=require;' : '',
    ].filter(Boolean).join('\n') + (hasShebang || hasRequire ? '\n' : '');

    return prefix + startVert + verticalizedCode + endVert;
}

/** CLI entry point — parses argv and dispatches to `verticalize` or `generateMordorJS`. */
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

function verticalizeRaw(text) {
  return text
    .replace(/\t/g, '  ')
    .replace(/\r/g, '')
    .replace(/\n/g, '')
    .split('')
    .join('\n') + '\n';
}

main();
