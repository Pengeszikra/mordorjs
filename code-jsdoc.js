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
