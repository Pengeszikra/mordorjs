*This is a submission for the [DEV April Fools Challenge](https://dev.to/challenges/aprilfools-2026)*

## What I Built
<!-- Give us an overview of your delightfully useless project -->
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

## Demo
<!-- Share a video demo or link to your project -->

## Code
<!-- Show us the code! You can embed a GitHub repo directly into your post. -->
https://github.com/Pengeszikra/mordorjs

> npm module
```sh
npm install -g mordorjs
```
https://www.npmjs.com/package/mordorjs

## Secret ingredient
```javascript
/** @type {string[]} - Character map, for example: c = 'c', D = '.' */
[,c,,e,,f,,h,,i,,j,,l,,m,,n,,o,,p,,r,,s,,t,,u,,a,,d,,g,,S,,C,,X,,Y,,Z,,D]=`cefhijlmnoprstuadgSC() .`;
/** @type {number} - A = 10 */
A=9+1;
/** @type {string} - O = 'sort' */
O=s+o+r+t;
/** @type {string} - K = 'constructor' */
K=c+o+n+s+t+r+u+c+t+o+r;
/** @type {string} - P = 'split' */
P=s+p+l+i+t;
/** @type {string} - J = 'join' */
J=j+o+i+n;
/* F = Function */
F=[][O][K];
/** @type {string} - R = 'return String.fromCharCode(' */
R=r+e+t+u+r+n+Z+S+t+r+i+n+g+D+f+r+o+m+C+h+a+r+C+o+d+e+X;
/** @type {string} - E = '' */
E=[]+[];
/** @type {string} - N = '' (empty string) */
N=``;
/** @type {string} - w = '\x1d' (U+001D, backslash encoding marker) */
w=F(R+(A*3-1)+Y)();
/** @type {string} - B = '\x1e' (U+001E, newline encoding marker) */
B=F(R+A*3+Y)();
/** @type {string} - Q = '\x1f' (U+001F, backtick encoding marker) */
Q=F(R+(A*3+1)+Y)();
/** @type {string} - G = '\n' */
G=F(R+A+Y)();
/** @type {string} - T contains the 1W JS source between the begin and end split points */
T=`
`;
/** @type {string} - M = source with structural newlines removed */
M=T[P](G)[J](E);
/** @type {string} - V = '`' (backtick, char code 96) */
V=F(R+(A*9+6)+Y)();
/** @type {string} - W = '\' (backslash, char code 92) */
W=F(R+(A*9+2)+Y)();
/**
 * Restore the normalized source:
 * M = source
 *      .split('\x1f').join('`')
 *      .split('\x1d').join('\\')
 *      .split('\x1e').join('\n')
 */
M=M[P](Q)[J](V)[P](w)[J](W)[P](B)[J](G);
/* Execute the normalized JS source: Function(M)(); */
F(M)();
```

## How I Built It
<!-- Tell us about the technologies you used -->
I was using gemini cli for mass coding, testing, reworking workflow.
But sometime need a good old handcoded method also.
The video base image created by geminit:nano-banana
video: seadance 2.0

> build script
```
node mordor.js mordor.js --mordorjs > bin/mordor.cjs
```
That means the project can already rebuild itself using its own transformation model.

## The next phase
This short fragment shows how the language begins.
The extra `,` characters are used to avoid unwanted vertical string `\n` artifacts.
```javascript
[
,
c
,
,
e
,
,
f
,
,
h
]
=
`
c
e
f
h
`
;
```

From there, our resistance developers found a key survival technique for an age in which the AI threat was rising too quickly.

The next logical step was a human-read-first carrier format:

## mordor-code
mordor-code is a multiline vertical stream format.

It is designed to be read vertically, not horizontally. It may be compact, or it may contain extra space-filled columns between letters and symbols. Tabs are not allowed, and multi-width characters should be avoided. In generated output, tabs are normalized to two spaces.

In mordor-code, newline may also be represented explicitly as ¬ when needed.

Because spacing inside the vertical stream is flexible, mordor-code can carry not only source-like content, but also human-only hints, hidden notes, and decorative structures embedded directly into the layout.

And for the example block, this would fit well:

> A small mordor-code example:
```mordor-code
T  i  i  c  p     b     
h  m  n  a  a     u     b
i  p  f  n  r  a  t  r  e
s  o  o  n  s  i     e
   r  r  o  e     y  a  r
   t  m  t     a  u  d  e
   a  a     t  g  o  !  a
   n  t  b  h  e        d
   t  i  e     n  c     y
      o        t  a     !
      n        s  n     !
               !
```

## mordor-project
As of v0.0.2, mordorjs can also generate a mordor-project file.

A mordor-project is a single text container that can carry an entire project tree in one file.

Each embedded file is stored as:

a header line
followed by a vertical payload block

For now, the project payload is carried in base64-rendered mordor form, which makes recovery safer for all file types, including indentation-sensitive and binary content.

### definition
```
entry :=
  header newline payload

header :=
  /^_{4,}\s(.+)\s_{4,}$/

header content :=
  <reverse-coding-info>::<reverse-path>

payload :=
  all following lines until next header or EOF
```

Do not miss the demo vide where you can watch the mordor-project creation process.

## Prize Category
<!-- If you are submitting for a specific prize category (Best Google AI Usage, Best Ode to Larry Masinter, or Community Favorite), tell us which one and why! -->

## Finally I found one important note:
```mordor-code
                c   p               t     a           i   t
          c   d a   r     W     s   h     s           s   h
T n c l i o   u m   e     h   i e d a o       s e f o     o
o o o o t n r r p c c   d a   s a e t b     a c n r n     s P
  t m s   c e i a o i a i t i o l s   j h   n a t a l   b e r
    p t   l c n i n s n s   n l e i t e a p d v r g y   e   e
    a     u o g g s i d s r t a d g h c n o   e u m     y   s
a   c     s r   n t o   o e a t . n e t d t   n s e   c o w e
n a t   w i d     r n   l m c e   s   -   e   g t n   o n h r
y b   d a o e     u   i v a t d I     m   n   e   t   m d o v
  a   u s n d t   c   m e i ,   t   f y   t h r     h p     e
  n   r       h t t   m d n   h s c r t w i e s     u l
  d   i     o e h s t o   e t u   a a h i a r   t   m e     t
  o   n     n   a   h r   d h m   r g : t l e h h   a t m r h
s n b g   w   f t   a t     e a   r m   h l d a i   n e y e e
u   o     a   i     t a       n   i e   o y i v s i - .   m
r t o   d s   n       l i w     s e n   u   t e   n g   l a
v h t t i   t a   a   i n a     i d t   t   a   s   u   i i
i e s h s   h l   g l t t s r   z     a     r   e   i   f n f
v   t e m a e   t a a y o   i e e       u   y   a m d   e . i
i   r   i l   B h i t       n n   t     n t     r a e   t   r
n   a   s m h a e n e       g c s h     d e r   c c d S i   e
g s p s s o a r   s r   l m - l h e s   e c e e h h   h m S .
  e   e e s n a   t     e e s a o   u r r h c a   i   o e e
  a   a d t d d       f g m e v u   r i s n o c   n   u . e
h r f l     - -     g o e o e e l   v n t i r h   e c l   k
u c r i     f d e   e r n r d s d g i g a c d     - o d
m h a n a   r û n   n   d y       r v , n a s m   r p     t —
a . g g s c a r e   e   ,     a   e e   d l . i t e i     h
n   m     e m   m u r n       n   a d   i .   s o a e     e
  T e     r e   y s a o c     d   t     n   S t   d s m S   D
m h n   u t         t b o w m     e   a g S e a   a . o h r r
i e t   n a o e     i i r i a   n s       e a k   b   r o i .
n r     s i f n     o l r t y r o t   t o a r e   l   d u n
d e f o t n   g     n i u h   e t   i o f r c n a e   o l g
    r f a l t a f i s t p o r o     n k   c h   u     r d -
  e o   b y h g i n   y t u e p       e   h     t   D     s S
  x m   l   e e r     . e t s e d   o n         o l e     e a
s i     e f   m s       d   t n e   r , i       n a s     e r
t s   t , a   e t o m       o   c d a   t   w p o n t     d u
i t t h   l   n   v i A     r   e e l   s a h r m g r   m . m
l s h e   s   t   e s f     e   i n   a   r e e o u o e o   a
l   e     e   . d r t t         v s   n   c r s u a y n r   n
          . S   e w o e r c   p e i       h e e s g   d d
  a f       A   p h o r e o   a   t a   o i   r   e   u o R
  n i   s   U   l e k   t m   t   y c   r v p v s     r r e
a   r i y   R   o l   t e p o h   . c   i e r a y     e   c
b   s n m T O   y m   h l r p w y   o h g s i t s b i ,   o
l   t n b h N I e i   e l e e a o   u e i , e i t e n   f v
e     e o e - t d n     i h r y u   n i n   s o e y t   a e
      r l   c     g c   n e a s .   t r .   t n m o e t l r
  e     i f o       o f g n t       s l   r s   s n r h l
  a r   c r n   t   o a s s i     I   o T u , f . d m i , t
  r e   , a t   h   r l , i o         o r i   o     e s   h
t l s     g r w e n d l   o n         m e n   r     d     e
o y i f   m o a   u i ,   n a l S       a s         i   l
    s i   e l s l m n     . l o o   d   t , s o     a   e
r   t r o n l   o b a   a     n m   i       o w D   r   t
e   a e r t e i n e t   n     g e h s   a   l n o n y w
a   n .     d n g r i a d   c     a t p l   d e   e   o   l
d   c           - s o l   I o   o v o a l s i r   c   r t o
  r e           l , n l   f n   f e r s   e e s   e n k h s
  i             i       m   t t     t s s a r h n s o   i t
  n e   c       f       a r i h     e e u l s i o s t m s
  g r   e w     e       c e n o     d d c e , p t i e u   b
  - a I r a w t         h c u u         h d   .   t s s   o
t s , n e s a h   m f t i o i g t r   f           y   t r o
h e     m   r a   o o r n v t h h e i r     a     .     e t
i e   e o     t e v r a e e y t e a n o     n           c s
s d   a n   m   l i   c   r       s t m r v d D   C     o t
  , b r i l a   v n   e n e       o o   e a   o d o w   r r
    e l a a c s e g     o d       n     p u     e m h   d a
    l i l s h a n     c i   a   o       o l     s m e c   p
    i e . t i m     g o s   c   l       r t     c i n o s .
r   e r     n e     r n e   r p d     h t s   n r t   n e
e a v       e     w a t .   o e e t   a s ,   o i     t r
c   e             i c i     s r s o   n       t b   t i v
o   d             t e n     s m t     d         e   r n e
r       T         h   u       a                     a u
d       h             i       n                 t   n e
:     r a             t       e                 h   s
      e t             y       n                 e   f
      p                       t   b   t             e
      o           s           l   e   o             r
      r           u           y   l
D     t           c               i
o     s           h               e
                                  v
                                  e

```

<!-- Team Submissions: Please pick one member to publish the submission and credit teammates by listing their DEV usernames directly in the body of the post. -->

<!-- Thanks for participating! -->
Thanks to the entire Mordor office team, and special thanks to the Nazgûl Manager, who guided me through this challenging process.
I invite you to discover mordor, the last peaceful haven of humanity.
