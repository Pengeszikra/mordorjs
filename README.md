# M||D||JS = mordor.js

The only rule is: 1 char wide JS code

## mordor code

```
V r w
e e i
r a t
t d h
i a
c b f
a l r
l e e
    e
r c
e o
a d s
d e p
a   a
b f c
l o i
e r n
  m g
  a .
  t
```

## mordor projec

```
D 
e l
s a
c t
r e
i r
b
e
```

## Usage

```bash
./mordor.js [options] [file]
```

If no file is provided, it reads from **stdin** (piped text) or defaults to the internal "MordorJS" manifesto.

## Options

| Option | Long Form | Description |
| :--- | :--- | :--- |
| `-w <num>` | `--wide <num>` | **Wrap into Columns:** Re-wraps the text into exactly `<num>` vertical strips. Words are preserved and distributed evenly. |
| `-s` | | **Spacing:** Adds an empty space strip between each data strip for better readability. |
| `-r [num]` | `--random [num]` | **Randomize:** Adds random vertical spacing (0 to `num`) before the first word and between every word in a strip. Default `num` is 3. |
| `-b64` | `--base64` | **Base64 Mode:** Encodes input to Base64 first. Uses "virtual words" (2-7 chars) to allow wrapping and randomization. |
| `-c` | `--copy` | **Clipboard:** Automatically copies the final vertical output to your system clipboard. |
