You are an expert JavaScript and systems engineer.

Your task is to implement a complete toolchain for a custom encoding system called MordorJS (M||D||JS).

Core Concept
------------
MordorJS represents any text or code as a 1-character-wide vertical stream, where:
- each character occupies its own line
- visual layout is independent from logical order
- decoding reconstructs the original content by reading in a defined order

Project Goals
-------------
Implement:
1. JS → Mordor-code compiler
2. Self-running 1-column JS output (loader + payload)
3. Mordor Project container (multi-file format)
4. Eye Reader CLI (decoder + project reconstructor)
5. Optional visual formatter (Matrix / Shape mode)

1) Mordor Code Encoding
-----------------------
Input:
- A JavaScript source file

Transformations:
- Replace backtick (`) with ASCII 0x1F
- Replace tab (\t) with 2 spaces
- Keep newline as-is

Output:
- Each character is placed on its own line

Example:
c
o
n
s
o
l
e
.
l
o
g
(
'
h
i
'
)

2) Self-running Loader (1-char width compatible)
------------------------------------------------
Generate a JavaScript wrapper that:
- Only uses single-character variables: [a-z A-Z _ $]
- Only uses single-digit numbers: [0-9]
- No multi-character literals (except inside runtime-generated strings)
- All strings must be constructed dynamically
- No arrow functions

Responsibilities:
1. Build required strings: "sort", "constructor", "split", "join", "return String.fromCharCode("
2. Build numbers without multi-digit literals:
   - A = 9 + 1 → 10
   - Q = A * 3 + 1 → 31 (0x1F)
   - B = A * 9 + 6 → 96 (backtick)
3. Reconstruct source: T.split("\n").join("")
4. Restore backticks: replace charCode(31) → charCode(96)
5. Execute: Function(source)()

3) Mordor Project Format
------------------------
Single file containing multiple files.

File header format:
- A line starting and ending with at least 4 underscores
- The filename is written reversed
Example:
____sj.xedni/crs____
→ src/index.js

Rules:
- Headers detected by leading "_" (>=4) and trailing "_" (>=4, counted from right)
- File content follows in Mordor-code format
- Next header starts next file
- File order is arbitrary

4) Eye Reader CLI
-----------------
Commands:
- eye read file.mordor: reconstructs files
- eye run file.mordor: reconstructs + executes entry point

Responsibilities:
- parse headers
- reverse filenames
- decode Mordor blocks
- restore escaped characters
- write files

5) Optional Formatter
---------------------
Implement visual layout engine.

Modes:
- column (default)
- matrix
- shape (mask-based)

Requirements:
- preserve character order
- allow arbitrary visual layout
- fill unused cells with space

Deliverables
------------
- CLI tool (Node.js)
- Compiler function: JS → Mordor-code
- Loader generator
- Eye Reader (decoder)
- Example Mordor Project
- Documentation (README)

Design Principles
-----------------
- Structure is preserved, layout is free
- No base64 required for JS (only for sensitive/binary)
- Everything must be reconstructible
- Keep loader minimal and deterministic

Output
------
- working Node.js project
- clear modular structure
- minimal dependencies
- readable code

If anything is ambiguous, make reasonable engineering decisions and document them.

This is a real system, not a joke — implement it cleanly.
