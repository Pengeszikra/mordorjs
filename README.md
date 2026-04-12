# mordor.js

`mordor.js` is a toolkit and npm module around the Mordor file formats and 1W-style JavaScript transformations, also able to create modor-code and mordor-project files.

## What I Built
Everybody knows that productivity is measured in LOC. The more lines of code you produce, the more serious your project must be. Clean, readable code matters too, of course. And surely you remember the old convention that a line should stay under 80 characters.

We chose to move beyond that.

In mordor.js, there is only one rule:

the maximum line length is 1.

That is all.

Simple, isn’t it?

## 1D programming language
Because the whole codebase is a single vertical line, it comes with many advantages:

- Long lines are no longer a problem
- AI has a much harder time reading your code
- Your editor width becomes irrelevant
- Horizontal scrolling is gone forever
- Screenshot-based code theft becomes much less practical
- Your daily LOC can grow to legendary numbers
- Code review becomes an act of courage


## Usage

```bash
./mordor.js [options] [file]
```

If no file is provided, it reads from **stdin** (piped text) or defaults to the internal "MordorJS" manifesto.

## Options

| Option | Long Form | Description |
| :--- | :--- | :--- |
| `-w <num>` | `--wide <num>` | **Wrap into Columns:** Re-wraps the text into exactly `<num>` vertical strips. Words are preserved and distributed evenly. |
| `-s` | | **Separator:** Adds a space between each column strip for better readability. |
| `-r [num]` | `--random [num]` | **Randomize:** Adds random vertical spacing (0 to `num`) before the first word and between every word in a strip. Default `num` is 3. |
| `-b64` | `--base64` | **Base64 Mode:** Encodes input to Base64 first. Uses "virtual words" (2–7 chars) to allow wrapping and randomization. |
| `-c` | `--copy` | **Clipboard:** Automatically copies the final output to your system clipboard. |
| `-mjs` | `--mordorjs` | **MordorJS Mode:** Converts a `.js` file into a self-executing 1W vertical program (`.cjs`). |
| `-pro` | `--project` | **Project Mode:** Packages an entire folder tree into a single `mordor-project` file (skips `node_modules`, hidden files, lock files; images truncated to 1KB). |
| `-h` | `--help` | **Help:** Show options in mordor-code format (`-w 31 -r 3 -s`), prefixed with `==== M\|\|D\|\|JS ====`. |
| `-ai-h` | `--ai-help` | **AI Help:** Show options in plain readable text, prefixed with `==== M\|\|D\|\|JS ====`. |

## mordor-code

Transform any JS file into a self-executing 1-character-wide vertical program:

```bash
mordorjs myfile.js -mjs > myfile.cjs
node myfile.cjs
```

The generated file runs identically to the original. Shebang lines and `require()` calls are handled automatically.

## mordor-project

Package an entire project folder into a single portable text file:

```bash
mordorjs ./my-project -pro -w 31 -s > my-project.mordor-project.txt
```

Each file in the folder becomes one entry: a header line followed by the file's content in wide mordor format.

**Automatically skipped:**
- Hidden files and directories (`.git`, `.env`, etc.)
- `node_modules`, `dist`, `build`, `coverage`, `.next`, `.nuxt`
- Lock files (`package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`, etc.)

**Images** (`.jpg`, `.jpeg`, `.png`): only the first 1KB is included as base64.  
**Binary files**: base64-encoded automatically based on extension.  
**Text files**: included as-is, rendered in the same wide mordor format as the other CLI flags produce.

Format spec:

```
entry :=
  header newline payload

header :=
  /^_{4,}\s(.+)\s_{4,}$/

header content :=
  <reversed-relative-path>

payload :=
  all following lines until next header or EOF
```

## License

This repository uses a split-license model.

### Source code
All source code of the `mordor.js` program is licensed under the MIT License.

See: [LICENSE](./LICENSE)

### Specifications, format descriptions, and examples
The following are licensed under CC BY 4.0:

- `mordor-code-js` format description
- `mordor-code` format description
- `mordor-project` format description
- examples, documentation, and format-spec texts unless stated otherwise

See: [SPEC-LICENSE](./SPEC-LICENSE)

## Notes

The license of a file depends on its nature:

- program source files are MIT
- specification texts and examples are CC BY 4.0 unless explicitly marked otherwise

## Copyright

Copyright (c) 2026 Péter Vívó
