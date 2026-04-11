/**
 * MordorJS - the world first real 1D programming language
 *
 * this program can generate mordorjs code as .cjs file
 * this program can generate mordor-code
 * this program can generate mordor-porject
 */

const fs = require('fs');
const { spawnSync } = require('child_process');

function codeBegin() {
  return Buffer.from('WwosCmMKLAosCmUKLAosCmYKLAosCmgKLAosCmkKLAosCmoKLAosCmwKLAosCm0KLAosCm4KLAosCm8KLAosCnAKLAosCnIKLAosCnMKLAosCnQKLAosCnUKLAosCmEKLAosCmQKLAosCmcKLAosClMKLAosCkMKLAosClgKLAosClkKLAosCloKLAosCkQKXQo9CmAKYwplCmYKaAppCmoKbAptCm4KbwpwCnIKcwp0CnUKYQpkCmcKUwpDCigKKQogCi4KYAo7CkEKPQo5CisKMQo7Ck8KPQpzCisKbworCnIKKwp0CjsKSwo9CmMKKwpvCisKbgorCnMKKwp0CisKcgorCnUKKwpjCisKdAorCm8KKwpyCjsKUAo9CnMKKwpwCisKbAorCmkKKwp0CjsKSgo9CmoKKwpvCisKaQorCm4KOwpGCj0KWwpdClsKTwpdClsKSwpdCjsKUgo9CnIKKwplCisKdAorCnUKKwpyCisKbgorCloKKwpTCisKdAorCnIKKwppCisKbgorCmcKKwpECisKZgorCnIKKwpvCisKbQorCkMKKwpoCisKYQorCnIKKwpDCisKbworCmQKKwplCisKWAo7CkUKPQpbCl0KKwpbCl0KOwpOCj0KYApgCjsKdwo9CkYKKApSCisKKApBCioKMwotCjEKKQorClkKKQooCikKOwpCCj0KRgooClIKKwpBCioKMworClkKKQooCikKOwpRCj0KRgooClIKKwooCkEKKgozCisKMQopCisKWQopCigKKQo7ClQKPQpgCg==','base64').toString();
}

function codeEnd() {
  return Buffer.from('YAo7CkcKPQpGCigKUgorCkEKKwpZCikKKAopCjsKTQo9ClQKWwpQCl0KKApHCikKWwpKCl0KKApFCikKOwpWCj0KRgooClIKKwooCkEKKgo5CisKNgopCisKWQopCigKKQo7ClcKPQpGCigKUgorCigKQQoqCjkKKwoyCikKKwpZCikKKAopCjsKTQo9Ck0KWwpQCl0KKApRCikKWwpKCl0KKApWCikKWwpQCl0KKAp3CikKWwpKCl0KKApXCikKWwpQCl0KKApCCikKWwpKCl0KKApHCikKOwpGCigKTQopCigKKQo7Cg==','base64').toString();
}

const [ALIAS_BACKSLASH, ALIAS_BACKTICK, ALIAS_NEWLINE] = `\x1d\x1e\x1f`;

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
    const startVert = codeBegin();
    const endVert = codeEnd();

    // Encode special chars before verticalizing:
    // backslash → \x1d (must be FIRST to avoid double-encoding)
    // newline   → \x1e (structural \n from verticalize won't be confused with original)
    // backtick  → \x1f (avoid breaking template literal T)
    const escapedCode = jsCode
      .replace(/^#!.*\n/, '')   // strip shebang (new Function() doesn't handle it)
      .replace(/\r/g, '')        // normalize line endings
      .replace(/\\/g, '\x1d')   // encode backslash (MUST be first!)
      .replace(/\n/g, '\x1e')   // encode newline
      .replace(/`/g, '\x1f')    // encode backtick
    ;

    // Verticalize the escaped code
    const verticalizedCode = verticalizeRaw(escapedCode);

    // return verticalizedCode;
    // Prefix: runs in mm.js's CJS module scope (where require IS available),
    // sets it on global so that F(M)() can access it in global scope.
    const prefix = 'global.require=require;\n';
    return prefix + startVert + verticalizedCode + endVert;
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

function verticalizeRaw(text) {
  return text
    .replace(/\t/g, '  ')
    .replace(/\r/g, '')
    .replace(/\n/g, '')
    .split('')
    .join('\n') + '\n';
}

main();
