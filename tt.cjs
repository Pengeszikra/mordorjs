global.require=require;
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
,
,
i
,
,
j
,
,
l
,
,
m
,
,
n
,
,
o
,
,
p
,
,
r
,
,
s
,
,
t
,
,
u
,
,
a
,
,
d
,
,
g
,
,
S
,
,
C
,
,
X
,
,
Y
,
,
Z
,
,
D
]
=
`
c
e
f
h
i
j
l
m
n
o
p
r
s
t
u
a
d
g
S
C
(
)
 
.
`
;
A
=
9
+
1
;
O
=
s
+
o
+
r
+
t
;
K
=
c
+
o
+
n
+
s
+
t
+
r
+
u
+
c
+
t
+
o
+
r
;
P
=
s
+
p
+
l
+
i
+
t
;
J
=
j
+
o
+
i
+
n
;
F
=
[
]
[
O
]
[
K
]
;
R
=
r
+
e
+
t
+
u
+
r
+
n
+
Z
+
S
+
t
+
r
+
i
+
n
+
g
+
D
+
f
+
r
+
o
+
m
+
C
+
h
+
a
+
r
+
C
+
o
+
d
+
e
+
X
;
E
=
[
]
+
[
]
;
N
=
`
`
;
w
=
F
(
R
+
(
A
*
3
-
1
)
+
Y
)
(
)
;
B
=
F
(
R
+
A
*
3
+
Y
)
(
)
;
Q
=
F
(
R
+
(
A
*
3
+
1
)
+
Y
)
(
)
;
T
=
`
/
*
*

 
*
 
M
o
r
d
o
r
J
S
 
-
 
t
h
e
 
w
o
r
l
d
 
f
i
r
s
t
 
r
e
a
l
 
1
D
 
p
r
o
g
r
a
m
m
i
n
g
 
l
a
n
g
u
a
g
e

 
*

 
*
 
t
h
i
s
 
p
r
o
g
r
a
m
 
c
a
n
 
g
e
n
e
r
a
t
e
 
m
o
r
d
o
r
j
s
 
c
o
d
e
 
a
s
 
.
c
j
s
 
f
i
l
e

 
*
 
t
h
i
s
 
p
r
o
g
r
a
m
 
c
a
n
 
g
e
n
e
r
a
t
e
 
m
o
r
d
o
r
-
c
o
d
e

 
*
 
t
h
i
s
 
p
r
o
g
r
a
m
 
c
a
n
 
g
e
n
e
r
a
t
e
 
m
o
r
d
o
r
-
p
o
r
j
e
c
t

 
*
/


c
o
n
s
t
 
f
s
 
=
 
r
e
q
u
i
r
e
(
'
f
s
'
)
;

c
o
n
s
t
 
{
 
s
p
a
w
n
S
y
n
c
 
}
 
=
 
r
e
q
u
i
r
e
(
'
c
h
i
l
d
_
p
r
o
c
e
s
s
'
)
;


c
o
n
s
t
 
[
A
L
I
A
S
_
B
A
C
K
S
L
A
S
H
,
 
A
L
I
A
S
_
B
A
C
K
T
I
C
K
,
 
A
L
I
A
S
_
N
E
W
L
I
N
E
]
 
=
 


x
1
d

x
1
e

x
1
f

;


/
*
*

 
*
 
C
o
p
i
e
s
 
t
e
x
t
 
t
o
 
t
h
e
 
s
y
s
t
e
m
 
c
l
i
p
b
o
a
r
d
 
b
a
s
e
d
 
o
n
 
t
h
e
 
p
l
a
t
f
o
r
m
.

 
*
/

f
u
n
c
t
i
o
n
 
c
o
p
y
T
o
C
l
i
p
b
o
a
r
d
(
t
e
x
t
)
 
{

 
 
 
 
t
r
y
 
{

 
 
 
 
 
 
 
 
i
f
 
(
p
r
o
c
e
s
s
.
p
l
a
t
f
o
r
m
 
=
=
=
 
'
d
a
r
w
i
n
'
)
 
{

 
 
 
 
 
 
 
 
 
 
 
 
s
p
a
w
n
S
y
n
c
(
'
p
b
c
o
p
y
'
,
 
{
 
i
n
p
u
t
:
 
t
e
x
t
 
}
)
;

 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
p
r
o
c
e
s
s
.
p
l
a
t
f
o
r
m
 
=
=
=
 
'
w
i
n
3
2
'
)
 
{

 
 
 
 
 
 
 
 
 
 
 
 
s
p
a
w
n
S
y
n
c
(
'
c
l
i
p
'
,
 
{
 
i
n
p
u
t
:
 
t
e
x
t
 
}
)
;

 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
{

 
 
 
 
 
 
 
 
 
 
 
 
/
/
 
D
e
f
a
u
l
t
 
t
o
 
x
c
l
i
p
 
f
o
r
 
L
i
n
u
x
/
U
n
i
x

 
 
 
 
 
 
 
 
 
 
 
 
s
p
a
w
n
S
y
n
c
(
'
x
c
l
i
p
'
,
 
[
'
-
s
e
l
e
c
t
i
o
n
'
,
 
'
c
l
i
p
b
o
a
r
d
'
]
,
 
{
 
i
n
p
u
t
:
 
t
e
x
t
 
}
)
;

 
 
 
 
 
 
 
 
}

 
 
 
 
}
 
c
a
t
c
h
 
(
e
r
r
)
 
{

 
 
 
 
 
 
 
 
c
o
n
s
o
l
e
.
e
r
r
o
r
(

W
a
r
n
i
n
g
:
 
F
a
i
l
e
d
 
t
o
 
c
o
p
y
 
t
o
 
c
l
i
p
b
o
a
r
d
:
 
$
{
e
r
r
.
m
e
s
s
a
g
e
}

)
;

 
 
 
 
}

}


/
*
*

 
*
 
S
p
l
i
t
s
 
a
 
c
o
n
t
i
n
u
o
u
s
 
s
t
r
i
n
g
 
i
n
t
o
 
"
v
i
r
t
u
a
l
 
w
o
r
d
s
"
 
o
f
 
r
a
n
d
o
m
 
l
e
n
g
t
h
s
.

 
*
/

f
u
n
c
t
i
o
n
 
v
i
r
t
u
a
l
i
z
e
W
o
r
d
s
(
s
t
r
)
 
{

 
 
 
 
l
e
t
 
w
o
r
d
s
 
=
 
[
]
;

 
 
 
 
l
e
t
 
i
 
=
 
0
;

 
 
 
 
w
h
i
l
e
 
(
i
 
<
 
s
t
r
.
l
e
n
g
t
h
)
 
{

 
 
 
 
 
 
 
 
/
/
 
V
i
r
t
u
a
l
 
w
o
r
d
 
l
e
n
g
t
h
 
b
e
t
w
e
e
n
 
2
 
a
n
d
 
7
 
a
s
 
r
e
q
u
e
s
t
e
d

 
 
 
 
 
 
 
 
c
o
n
s
t
 
l
e
n
 
=
 
M
a
t
h
.
f
l
o
o
r
(
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
6
)
 
+
 
2
;

 
 
 
 
 
 
 
 
w
o
r
d
s
.
p
u
s
h
(
s
t
r
.
s
u
b
s
t
r
i
n
g
(
i
,
 
i
 
+
 
l
e
n
)
)
;

 
 
 
 
 
 
 
 
i
 
+
=
 
l
e
n
;

 
 
 
 
}

 
 
 
 
r
e
t
u
r
n
 
w
o
r
d
s
.
j
o
i
n
(
'
 
'
)
;

}


/
*
*

 
*
 
D
i
s
t
r
i
b
u
t
e
s
 
w
o
r
d
s
 
i
n
t
o
 
a
 
t
a
r
g
e
t
 
n
u
m
b
e
r
 
o
f
 
s
t
r
i
p
s
 
u
s
i
n
g
 
a
 
m
o
r
e
 
b
a
l
a
n
c
e
d
 
a
p
p
r
o
a
c
h
.

 
*
/

f
u
n
c
t
i
o
n
 
w
r
a
p
T
o
S
t
r
i
p
s
(
t
e
x
t
,
 
t
a
r
g
e
t
S
t
r
i
p
C
o
u
n
t
)
 
{

 
 
 
 
/
/
 
C
l
e
a
n
 
t
a
b
s
 
t
o
 
d
o
u
b
l
e
 
s
p
a
c
e
s
 
a
n
d
 
s
p
l
i
t
 
i
n
t
o
 
w
o
r
d
s

 
 
 
 
c
o
n
s
t
 
w
o
r
d
s
 
=
 
t
e
x
t
.
r
e
p
l
a
c
e
(
/

t
/
g
,
 
'
 
 
'
)
.
s
p
l
i
t
(
/

s
+
/
)
.
f
i
l
t
e
r
(
w
 
=
>
 
w
.
l
e
n
g
t
h
 
>
 
0
)
;


 
 
 
 
i
f
 
(
w
o
r
d
s
.
l
e
n
g
t
h
 
=
=
=
 
0
)
 
r
e
t
u
r
n
 
A
r
r
a
y
(
t
a
r
g
e
t
S
t
r
i
p
C
o
u
n
t
)
.
f
i
l
l
(
'
'
)
;

 
 
 
 
i
f
 
(
t
a
r
g
e
t
S
t
r
i
p
C
o
u
n
t
 
<
=
 
1
)
 
r
e
t
u
r
n
 
[
w
o
r
d
s
.
j
o
i
n
(
'
 
'
)
]
;


 
 
 
 
c
o
n
s
t
 
t
o
t
a
l
C
o
n
t
e
n
t
L
e
n
g
t
h
 
=
 
w
o
r
d
s
.
r
e
d
u
c
e
(
(
a
c
c
,
 
w
)
 
=
>
 
a
c
c
 
+
 
w
.
l
e
n
g
t
h
,
 
0
)
 
+
 
w
o
r
d
s
.
l
e
n
g
t
h
 
-
 
1
;


 
 
 
 
c
o
n
s
t
 
s
t
r
i
p
s
 
=
 
[
]
;

 
 
 
 
l
e
t
 
w
o
r
d
I
n
d
e
x
 
=
 
0
;

 
 
 
 
l
e
t
 
r
e
m
a
i
n
i
n
g
C
o
n
t
e
n
t
L
e
n
g
t
h
 
=
 
t
o
t
a
l
C
o
n
t
e
n
t
L
e
n
g
t
h
;


 
 
 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
 
t
a
r
g
e
t
S
t
r
i
p
C
o
u
n
t
;
 
i
+
+
)
 
{

 
 
 
 
 
 
 
 
c
o
n
s
t
 
r
e
m
a
i
n
i
n
g
S
t
r
i
p
s
 
=
 
t
a
r
g
e
t
S
t
r
i
p
C
o
u
n
t
 
-
 
i
;

 
 
 
 
 
 
 
 
c
o
n
s
t
 
t
a
r
g
e
t
F
o
r
T
h
i
s
S
t
r
i
p
 
=
 
r
e
m
a
i
n
i
n
g
C
o
n
t
e
n
t
L
e
n
g
t
h
 
/
 
r
e
m
a
i
n
i
n
g
S
t
r
i
p
s
;


 
 
 
 
 
 
 
 
l
e
t
 
c
u
r
r
e
n
t
S
t
r
i
p
W
o
r
d
s
 
=
 
[
]
;

 
 
 
 
 
 
 
 
l
e
t
 
c
u
r
r
e
n
t
S
t
r
i
p
L
e
n
g
t
h
 
=
 
0
;


 
 
 
 
 
 
 
 
w
h
i
l
e
 
(
w
o
r
d
I
n
d
e
x
 
<
 
w
o
r
d
s
.
l
e
n
g
t
h
)
 
{

 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
w
o
r
d
 
=
 
w
o
r
d
s
[
w
o
r
d
I
n
d
e
x
]
;

 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
w
o
r
d
L
e
n
W
i
t
h
S
p
a
c
e
 
=
 
(
c
u
r
r
e
n
t
S
t
r
i
p
W
o
r
d
s
.
l
e
n
g
t
h
 
>
 
0
 
?
 
1
 
:
 
0
)
 
+
 
w
o
r
d
.
l
e
n
g
t
h
;


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
r
e
m
a
i
n
i
n
g
S
t
r
i
p
s
 
=
=
=
 
1
 
|
|

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
r
e
n
t
S
t
r
i
p
L
e
n
g
t
h
 
=
=
=
 
0
 
|
|

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
M
a
t
h
.
a
b
s
(
c
u
r
r
e
n
t
S
t
r
i
p
L
e
n
g
t
h
 
+
 
w
o
r
d
L
e
n
W
i
t
h
S
p
a
c
e
 
-
 
t
a
r
g
e
t
F
o
r
T
h
i
s
S
t
r
i
p
)
 
<
 
M
a
t
h
.
a
b
s
(
c
u
r
r
e
n
t
S
t
r
i
p
L
e
n
g
t
h
 
-
 
t
a
r
g
e
t
F
o
r
T
h
i
s
S
t
r
i
p
)
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
r
e
n
t
S
t
r
i
p
W
o
r
d
s
.
p
u
s
h
(
w
o
r
d
)
;

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
r
e
n
t
S
t
r
i
p
L
e
n
g
t
h
 
+
=
 
w
o
r
d
L
e
n
W
i
t
h
S
p
a
c
e
;

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
o
r
d
I
n
d
e
x
+
+
;

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
m
a
i
n
i
n
g
C
o
n
t
e
n
t
L
e
n
g
t
h
 
-
=
 
w
o
r
d
L
e
n
W
i
t
h
S
p
a
c
e
;

 
 
 
 
 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
{

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
r
e
a
k
;

 
 
 
 
 
 
 
 
 
 
 
 
}

 
 
 
 
 
 
 
 
}

 
 
 
 
 
 
 
 
s
t
r
i
p
s
.
p
u
s
h
(
c
u
r
r
e
n
t
S
t
r
i
p
W
o
r
d
s
.
j
o
i
n
(
'
 
'
)
)
;

 
 
 
 
}


 
 
 
 
r
e
t
u
r
n
 
s
t
r
i
p
s
;

}


/
*
*

 
*
 
A
d
d
s
 
r
a
n
d
o
m
 
s
p
a
c
i
n
g
 
b
e
t
w
e
e
n
 
w
o
r
d
s
 
a
n
d
 
a
t
 
t
h
e
 
s
t
a
r
t
.

 
*
/

f
u
n
c
t
i
o
n
 
a
p
p
l
y
R
a
n
d
o
m
S
p
a
c
i
n
g
(
s
t
r
i
p
,
 
r
a
n
d
o
m
M
a
x
)
 
{

 
 
 
 
c
o
n
s
t
 
w
o
r
d
s
 
=
 
s
t
r
i
p
.
s
p
l
i
t
(
'
 
'
)
.
f
i
l
t
e
r
(
w
 
=
>
 
w
.
l
e
n
g
t
h
 
>
 
0
)
;

 
 
 
 
i
f
 
(
w
o
r
d
s
.
l
e
n
g
t
h
 
=
=
=
 
0
)
 
r
e
t
u
r
n
 
s
t
r
i
p
;


 
 
 
 
l
e
t
 
r
e
s
u
l
t
 
=
 
'
'
;

 
 
 
 
c
o
n
s
t
 
s
t
a
r
t
O
f
f
s
e
t
 
=
 
M
a
t
h
.
f
l
o
o
r
(
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
(
r
a
n
d
o
m
M
a
x
 
+
 
1
)
)
;

 
 
 
 
r
e
s
u
l
t
 
+
=
 
'
 
'
.
r
e
p
e
a
t
(
s
t
a
r
t
O
f
f
s
e
t
)
;


 
 
 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
 
w
o
r
d
s
.
l
e
n
g
t
h
;
 
i
+
+
)
 
{

 
 
 
 
 
 
 
 
r
e
s
u
l
t
 
+
=
 
w
o
r
d
s
[
i
]
;

 
 
 
 
 
 
 
 
i
f
 
(
i
 
<
 
w
o
r
d
s
.
l
e
n
g
t
h
 
-
 
1
)
 
{

 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
m
i
d
O
f
f
s
e
t
 
=
 
1
 
+
 
M
a
t
h
.
f
l
o
o
r
(
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
(
r
a
n
d
o
m
M
a
x
 
+
 
1
)
)
;

 
 
 
 
 
 
 
 
 
 
 
 
r
e
s
u
l
t
 
+
=
 
'
 
'
.
r
e
p
e
a
t
(
m
i
d
O
f
f
s
e
t
)
;

 
 
 
 
 
 
 
 
}

 
 
 
 
}

 
 
 
 
r
e
t
u
r
n
 
r
e
s
u
l
t
;

}


f
u
n
c
t
i
o
n
 
v
e
r
t
i
c
a
l
i
z
e
(
t
e
x
t
,
 
s
t
r
i
p
C
o
u
n
t
=
n
u
l
l
,
 
a
d
d
S
e
p
a
r
a
t
o
r
=
n
u
l
l
,
 
r
a
n
d
o
m
M
a
x
=
n
u
l
l
,
 
i
s
B
a
s
e
6
4
=
n
u
l
l
)
 
{

 
 
 
 
/
/
 
C
l
e
a
n
 
t
a
b
s
 
t
o
 
d
o
u
b
l
e
 
s
p
a
c
e
s

 
 
 
 
c
o
n
s
t
 
c
l
e
a
n
T
e
x
t
 
=
 
t
e
x
t
.
r
e
p
l
a
c
e
(
/

t
/
g
,
 
'
 
 
'
)
;


 
 
 
 
l
e
t
 
p
r
o
c
e
s
s
e
d
T
e
x
t
 
=
 
c
l
e
a
n
T
e
x
t
;


 
 
 
 
i
f
 
(
i
s
B
a
s
e
6
4
)
 
{

 
 
 
 
 
 
 
 
p
r
o
c
e
s
s
e
d
T
e
x
t
 
=
 
B
u
f
f
e
r
.
f
r
o
m
(
c
l
e
a
n
T
e
x
t
)
.
t
o
S
t
r
i
n
g
(
'
b
a
s
e
6
4
'
)
;

 
 
 
 
 
 
 
 
p
r
o
c
e
s
s
e
d
T
e
x
t
 
=
 
v
i
r
t
u
a
l
i
z
e
W
o
r
d
s
(
p
r
o
c
e
s
s
e
d
T
e
x
t
)
;

 
 
 
 
}


 
 
 
 
l
e
t
 
s
t
r
i
p
s
;

 
 
 
 
i
f
 
(
s
t
r
i
p
C
o
u
n
t
)
 
{

 
 
 
 
 
 
 
 
s
t
r
i
p
s
 
=
 
w
r
a
p
T
o
S
t
r
i
p
s
(
p
r
o
c
e
s
s
e
d
T
e
x
t
,
 
s
t
r
i
p
C
o
u
n
t
)
;

 
 
 
 
}
 
e
l
s
e
 
{

 
 
 
 
 
 
 
 
s
t
r
i
p
s
 
=
 
p
r
o
c
e
s
s
e
d
T
e
x
t
.
s
p
l
i
t
(
'

n
'
)
;

 
 
 
 
}


 
 
 
 
i
f
 
(
r
a
n
d
o
m
M
a
x
 
!
=
=
 
n
u
l
l
)
 
{

 
 
 
 
 
 
 
 
s
t
r
i
p
s
 
=
 
s
t
r
i
p
s
.
m
a
p
(
s
t
r
i
p
 
=
>
 
a
p
p
l
y
R
a
n
d
o
m
S
p
a
c
i
n
g
(
s
t
r
i
p
,
 
r
a
n
d
o
m
M
a
x
)
)
;

 
 
 
 
}


 
 
 
 
c
o
n
s
t
 
m
a
x
L
e
n
g
t
h
 
=
 
M
a
t
h
.
m
a
x
(
.
.
.
s
t
r
i
p
s
.
m
a
p
(
s
 
=
>
 
s
.
l
e
n
g
t
h
)
)
;

 
 
 
 
l
e
t
 
o
u
t
p
u
t
 
=
 
'
'
;


 
 
 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
 
m
a
x
L
e
n
g
t
h
;
 
i
+
+
)
 
{

 
 
 
 
 
 
 
 
l
e
t
 
r
o
w
 
=
 
'
'
;

 
 
 
 
 
 
 
 
f
o
r
 
(
l
e
t
 
j
 
=
 
0
;
 
j
 
<
 
s
t
r
i
p
s
.
l
e
n
g
t
h
;
 
j
+
+
)
 
{

 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
t
r
i
p
 
=
 
s
t
r
i
p
s
[
j
]
;

 
 
 
 
 
 
 
 
 
 
 
 
r
o
w
 
+
=
 
(
s
t
r
i
p
[
i
]
 
|
|
 
'
 
'
)
;


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
a
d
d
S
e
p
a
r
a
t
o
r
 
&
&
 
j
 
<
 
s
t
r
i
p
s
.
l
e
n
g
t
h
 
-
 
1
)
 
{

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
o
w
 
+
=
 
'
 
'
;

 
 
 
 
 
 
 
 
 
 
 
 
}

 
 
 
 
 
 
 
 
}

 
 
 
 
 
 
 
 
o
u
t
p
u
t
 
+
=
 
r
o
w
.
t
r
i
m
E
n
d
(
)
 
+
 
'

n
'
;

 
 
 
 
}


 
 
 
 
r
e
t
u
r
n
 
o
u
t
p
u
t
;

}


/
*
*

 
*
 
C
r
e
a
t
e
s
 
a
 
r
u
n
n
a
b
l
e
 
v
e
r
t
i
c
a
l
 
J
S
 
"
M
o
r
d
o
r
"
 
f
i
l
e
 
u
s
i
n
g
 
s
t
a
r
t
 
a
n
d
 
e
n
d
 
t
e
m
p
l
a
t
e
s
.

 
*
/

f
u
n
c
t
i
o
n
 
g
e
n
e
r
a
t
e
M
o
r
d
o
r
J
S
(
j
s
C
o
d
e
)
 
{

 
 
 
 
c
o
n
s
t
 
s
t
a
r
t
P
a
t
h
 
=
 
'
c
o
d
e
-
b
e
g
i
n
.
j
s
'
;

 
 
 
 
c
o
n
s
t
 
e
n
d
P
a
t
h
 
=
 
'
c
o
d
e
-
e
n
d
.
j
s
'
;


 
 
 
 
i
f
 
(
!
f
s
.
e
x
i
s
t
s
S
y
n
c
(
s
t
a
r
t
P
a
t
h
)
 
|
|
 
!
f
s
.
e
x
i
s
t
s
S
y
n
c
(
e
n
d
P
a
t
h
)
)
 
{

 
 
 
 
 
 
 
 
t
h
r
o
w
 
n
e
w
 
E
r
r
o
r
(

R
e
q
u
i
r
e
d
 
t
e
m
p
l
a
t
e
 
f
i
l
e
s
 
$
{
s
t
a
r
t
P
a
t
h
}
 
o
r
 
$
{
e
n
d
P
a
t
h
}
 
n
o
t
 
f
o
u
n
d
.

)
;

 
 
 
 
}


 
 
 
 
c
o
n
s
t
 
s
t
a
r
t
T
e
m
p
l
a
t
e
 
=
 
f
s
.
r
e
a
d
F
i
l
e
S
y
n
c
(
s
t
a
r
t
P
a
t
h
,
 
'
u
t
f
8
'
)
;

 
 
 
 
c
o
n
s
t
 
e
n
d
T
e
m
p
l
a
t
e
 
=
 
f
s
.
r
e
a
d
F
i
l
e
S
y
n
c
(
e
n
d
P
a
t
h
,
 
'
u
t
f
8
'
)
;


 
 
 
 
/
/
 
E
n
c
o
d
e
 
s
p
e
c
i
a
l
 
c
h
a
r
s
 
b
e
f
o
r
e
 
v
e
r
t
i
c
a
l
i
z
i
n
g
:

 
 
 
 
/
/
 
b
a
c
k
s
l
a
s
h
 
→
 

x
1
d
 
(
m
u
s
t
 
b
e
 
F
I
R
S
T
 
t
o
 
a
v
o
i
d
 
d
o
u
b
l
e
-
e
n
c
o
d
i
n
g
)

 
 
 
 
/
/
 
n
e
w
l
i
n
e
 
 
 
→
 

x
1
e
 
(
s
t
r
u
c
t
u
r
a
l
 

n
 
f
r
o
m
 
v
e
r
t
i
c
a
l
i
z
e
 
w
o
n
'
t
 
b
e
 
c
o
n
f
u
s
e
d
 
w
i
t
h
 
o
r
i
g
i
n
a
l
)

 
 
 
 
/
/
 
b
a
c
k
t
i
c
k
 
 
→
 

x
1
f
 
(
a
v
o
i
d
 
b
r
e
a
k
i
n
g
 
t
e
m
p
l
a
t
e
 
l
i
t
e
r
a
l
 
T
)

 
 
 
 
c
o
n
s
t
 
e
s
c
a
p
e
d
C
o
d
e
 
=
 
j
s
C
o
d
e

 
 
 
 
 
 
.
r
e
p
l
a
c
e
(
/
^
#
!
.
*

n
/
,
 
'
'
)
 
 
 
/
/
 
s
t
r
i
p
 
s
h
e
b
a
n
g
 
(
n
e
w
 
F
u
n
c
t
i
o
n
(
)
 
d
o
e
s
n
'
t
 
h
a
n
d
l
e
 
i
t
)

 
 
 
 
 
 
.
r
e
p
l
a
c
e
(
/

r
/
g
,
 
'
'
)
 
 
 
 
 
 
 
 
/
/
 
n
o
r
m
a
l
i
z
e
 
l
i
n
e
 
e
n
d
i
n
g
s

 
 
 
 
 
 
.
r
e
p
l
a
c
e
(
/


/
g
,
 
'

x
1
d
'
)
 
 
 
/
/
 
e
n
c
o
d
e
 
b
a
c
k
s
l
a
s
h
 
(
M
U
S
T
 
b
e
 
f
i
r
s
t
!
)

 
 
 
 
 
 
.
r
e
p
l
a
c
e
(
/

n
/
g
,
 
'

x
1
e
'
)
 
 
 
/
/
 
e
n
c
o
d
e
 
n
e
w
l
i
n
e

 
 
 
 
 
 
.
r
e
p
l
a
c
e
(
/

/
g
,
 
'

x
1
f
'
)
 
 
 
 
/
/
 
e
n
c
o
d
e
 
b
a
c
k
t
i
c
k

 
 
 
 
;


 
 
 
 
/
/
 
V
e
r
t
i
c
a
l
i
z
e
 
t
h
e
 
e
s
c
a
p
e
d
 
c
o
d
e

 
 
 
 
c
o
n
s
t
 
v
e
r
t
i
c
a
l
i
z
e
d
C
o
d
e
 
=
 
v
e
r
t
i
c
a
l
i
z
e
R
a
w
(
e
s
c
a
p
e
d
C
o
d
e
)
;

 
 
 
 
c
o
n
s
t
 
s
t
a
r
t
V
e
r
t
 
=
 
v
e
r
t
i
c
a
l
i
z
e
R
a
w
(
s
t
a
r
t
T
e
m
p
l
a
t
e
)
;

 
 
 
 
c
o
n
s
t
 
e
n
d
V
e
r
t
 
=
 
v
e
r
t
i
c
a
l
i
z
e
R
a
w
(
e
n
d
T
e
m
p
l
a
t
e
)
;


 
 
 
 
/
/
 
r
e
t
u
r
n
 
v
e
r
t
i
c
a
l
i
z
e
d
C
o
d
e
;

 
 
 
 
/
/
 
P
r
e
f
i
x
:
 
r
u
n
s
 
i
n
 
m
m
.
j
s
'
s
 
C
J
S
 
m
o
d
u
l
e
 
s
c
o
p
e
 
(
w
h
e
r
e
 
r
e
q
u
i
r
e
 
I
S
 
a
v
a
i
l
a
b
l
e
)
,

 
 
 
 
/
/
 
s
e
t
s
 
i
t
 
o
n
 
g
l
o
b
a
l
 
s
o
 
t
h
a
t
 
F
(
M
)
(
)
 
c
a
n
 
a
c
c
e
s
s
 
i
t
 
i
n
 
g
l
o
b
a
l
 
s
c
o
p
e
.

 
 
 
 
c
o
n
s
t
 
p
r
e
f
i
x
 
=
 
'
g
l
o
b
a
l
.
r
e
q
u
i
r
e
=
r
e
q
u
i
r
e
;

n
'
;

 
 
 
 
r
e
t
u
r
n
 
p
r
e
f
i
x
 
+
 
s
t
a
r
t
V
e
r
t
 
+
 
v
e
r
t
i
c
a
l
i
z
e
d
C
o
d
e
 
+
 
e
n
d
V
e
r
t
;

}


f
u
n
c
t
i
o
n
 
m
a
i
n
(
)
 
{

 
 
 
 
c
o
n
s
t
 
a
r
g
s
 
=
 
p
r
o
c
e
s
s
.
a
r
g
v
.
s
l
i
c
e
(
2
)
;

 
 
 
 
l
e
t
 
s
t
r
i
p
C
o
u
n
t
 
=
 
n
u
l
l
;

 
 
 
 
l
e
t
 
a
d
d
S
e
p
a
r
a
t
o
r
 
=
 
f
a
l
s
e
;

 
 
 
 
l
e
t
 
s
h
o
u
l
d
C
o
p
y
 
=
 
f
a
l
s
e
;

 
 
 
 
l
e
t
 
r
a
n
d
o
m
M
a
x
 
=
 
n
u
l
l
;

 
 
 
 
l
e
t
 
i
s
B
a
s
e
6
4
 
=
 
f
a
l
s
e
;

 
 
 
 
l
e
t
 
i
s
M
o
r
d
o
r
J
S
 
=
 
f
a
l
s
e
;

 
 
 
 
l
e
t
 
f
i
l
e
P
a
t
h
 
=
 
n
u
l
l
;


 
 
 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
 
a
r
g
s
.
l
e
n
g
t
h
;
 
i
+
+
)
 
{

 
 
 
 
 
 
 
 
i
f
 
(
a
r
g
s
[
i
]
 
=
=
=
 
'
-
w
'
 
|
|
 
a
r
g
s
[
i
]
 
=
=
=
 
'
-
-
w
i
d
e
'
)
 
{

 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
i
p
C
o
u
n
t
 
=
 
p
a
r
s
e
I
n
t
(
a
r
g
s
[
i
 
+
 
1
]
,
 
1
0
)
;

 
 
 
 
 
 
 
 
 
 
 
 
i
+
+
;

 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
a
r
g
s
[
i
]
 
=
=
=
 
'
-
s
'
)
 
{

 
 
 
 
 
 
 
 
 
 
 
 
a
d
d
S
e
p
a
r
a
t
o
r
 
=
 
t
r
u
e
;

 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
a
r
g
s
[
i
]
 
=
=
=
 
'
-
c
'
 
|
|
 
a
r
g
s
[
i
]
 
=
=
=
 
'
-
-
c
o
p
y
'
)
 
{

 
 
 
 
 
 
 
 
 
 
 
 
s
h
o
u
l
d
C
o
p
y
 
=
 
t
r
u
e
;

 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
a
r
g
s
[
i
]
 
=
=
=
 
'
-
b
6
4
'
 
|
|
 
a
r
g
s
[
i
]
 
=
=
=
 
'
-
-
b
a
s
e
6
4
'
)
 
{

 
 
 
 
 
 
 
 
 
 
 
 
i
s
B
a
s
e
6
4
 
=
 
t
r
u
e
;

 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
a
r
g
s
[
i
]
 
=
=
=
 
'
-
m
j
s
'
 
|
|
 
a
r
g
s
[
i
]
 
=
=
=
 
'
-
-
m
o
r
d
o
r
j
s
'
)
 
{

 
 
 
 
 
 
 
 
 
 
 
 
i
s
M
o
r
d
o
r
J
S
 
=
 
t
r
u
e
;

 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
a
r
g
s
[
i
]
 
=
=
=
 
'
-
r
'
 
|
|
 
a
r
g
s
[
i
]
 
=
=
=
 
'
-
-
r
a
n
d
o
m
'
)
 
{

 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
e
x
t
A
r
g
 
=
 
a
r
g
s
[
i
 
+
 
1
]
;

 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
n
e
x
t
A
r
g
 
&
&
 
!
i
s
N
a
N
(
p
a
r
s
e
I
n
t
(
n
e
x
t
A
r
g
,
 
1
0
)
)
 
&
&
 
!
n
e
x
t
A
r
g
.
s
t
a
r
t
s
W
i
t
h
(
'
-
'
)
)
 
{

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
a
n
d
o
m
M
a
x
 
=
 
p
a
r
s
e
I
n
t
(
n
e
x
t
A
r
g
,
 
1
0
)
;

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
+
+
;

 
 
 
 
 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
{

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
a
n
d
o
m
M
a
x
 
=
 
3
;

 
 
 
 
 
 
 
 
 
 
 
 
}

 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
!
f
i
l
e
P
a
t
h
 
&
&
 
!
a
r
g
s
[
i
]
.
s
t
a
r
t
s
W
i
t
h
(
'
-
'
)
)
 
{

 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
e
P
a
t
h
 
=
 
a
r
g
s
[
i
]
;

 
 
 
 
 
 
 
 
}

 
 
 
 
}


 
 
 
 
c
o
n
s
t
 
p
r
o
c
e
s
s
R
e
s
u
l
t
 
=
 
(
t
e
x
t
)
 
=
>
 
{

 
 
 
 
 
 
 
 
l
e
t
 
r
e
s
u
l
t
;

 
 
 
 
 
 
 
 
i
f
 
(
i
s
M
o
r
d
o
r
J
S
)
 
{

 
 
 
 
 
 
 
 
 
 
 
 
r
e
s
u
l
t
 
=
 
g
e
n
e
r
a
t
e
M
o
r
d
o
r
J
S
(
t
e
x
t
)
;

 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
{

 
 
 
 
 
 
 
 
 
 
 
 
r
e
s
u
l
t
 
=
 
v
e
r
t
i
c
a
l
i
z
e
(
t
e
x
t
,
 
s
t
r
i
p
C
o
u
n
t
,
 
a
d
d
S
e
p
a
r
a
t
o
r
,
 
r
a
n
d
o
m
M
a
x
,
 
i
s
B
a
s
e
6
4
)
;

 
 
 
 
 
 
 
 
}

 
 
 
 
 
 
 
 
p
r
o
c
e
s
s
.
s
t
d
o
u
t
.
w
r
i
t
e
(
r
e
s
u
l
t
)
;

 
 
 
 
 
 
 
 
i
f
 
(
s
h
o
u
l
d
C
o
p
y
)
 
{

 
 
 
 
 
 
 
 
 
 
 
 
c
o
p
y
T
o
C
l
i
p
b
o
a
r
d
(
r
e
s
u
l
t
)
;

 
 
 
 
 
 
 
 
}

 
 
 
 
}
;


 
 
 
 
i
f
 
(
f
i
l
e
P
a
t
h
)
 
{

 
 
 
 
 
 
 
 
t
r
y
 
{

 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
a
t
a
 
=
 
f
s
.
r
e
a
d
F
i
l
e
S
y
n
c
(
f
i
l
e
P
a
t
h
,
 
'
u
t
f
8
'
)
;

 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
c
e
s
s
R
e
s
u
l
t
(
d
a
t
a
)
;

 
 
 
 
 
 
 
 
}
 
c
a
t
c
h
 
(
e
r
r
)
 
{

 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
o
l
e
.
e
r
r
o
r
(

E
r
r
o
r
 
r
e
a
d
i
n
g
 
f
i
l
e
:
 
$
{
e
r
r
.
m
e
s
s
a
g
e
}

)
;

 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
c
e
s
s
.
e
x
i
t
(
1
)
;

 
 
 
 
 
 
 
 
}

 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
!
p
r
o
c
e
s
s
.
s
t
d
i
n
.
i
s
T
T
Y
)
 
{

 
 
 
 
 
 
 
 
l
e
t
 
d
a
t
a
 
=
 
'
'
;

 
 
 
 
 
 
 
 
p
r
o
c
e
s
s
.
s
t
d
i
n
.
o
n
(
'
d
a
t
a
'
,
 
c
h
u
n
k
 
=
>
 
{

 
 
 
 
 
 
 
 
 
 
 
 
d
a
t
a
 
+
=
 
c
h
u
n
k
;

 
 
 
 
 
 
 
 
}
)
;

 
 
 
 
 
 
 
 
p
r
o
c
e
s
s
.
s
t
d
i
n
.
o
n
(
'
e
n
d
'
,
 
(
)
 
=
>
 
{

 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
c
e
s
s
R
e
s
u
l
t
(
d
a
t
a
)
;

 
 
 
 
 
 
 
 
}
)
;

 
 
 
 
}
 
e
l
s
e
 
{

 
 
 
 
 
 
 
 
c
o
n
s
o
l
e
.
e
r
r
o
r
(
"
W
a
r
n
i
n
g
:
 
n
o
 
i
n
p
u
t
 
p
r
o
v
i
d
e
d
.
 
P
a
s
s
 
a
 
f
i
l
e
 
o
r
 
p
i
p
e
 
t
e
x
t
 
v
i
a
 
s
t
d
i
n
.
"
)
;

 
 
 
 
 
 
 
 
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
"
U
s
a
g
e
:
 
n
o
d
e
 
m
o
r
d
o
r
.
j
s
 
[
-
w
|
-
-
w
i
d
e
 
n
u
m
b
e
r
]
 
[
-
s
]
 
[
-
c
|
-
-
c
o
p
y
]
 
[
-
r
|
-
-
r
a
n
d
o
m
 
[
n
u
m
b
e
r
]
]
 
[
-
b
6
4
|
-
-
b
a
s
e
6
4
]
 
[
-
m
j
s
]
 
[
f
i
l
e
]
"
)
;

 
 
 
 
 
 
 
 
p
r
o
c
e
s
s
.
e
x
i
t
(
1
)
;

 
 
 
 
}

}


f
u
n
c
t
i
o
n
 
v
e
r
t
i
c
a
l
i
z
e
R
a
w
(
t
e
x
t
)
 
{

 
 
r
e
t
u
r
n
 
t
e
x
t

 
 
 
 
.
r
e
p
l
a
c
e
(
/

t
/
g
,
 
'
 
 
'
)

 
 
 
 
.
r
e
p
l
a
c
e
(
/

r
/
g
,
 
'
'
)

 
 
 
 
.
r
e
p
l
a
c
e
(
/

n
/
g
,
 
'
'
)

 
 
 
 
.
s
p
l
i
t
(
'
'
)

 
 
 
 
.
j
o
i
n
(
'

n
'
)
 
+
 
'

n
'
;

}


m
a
i
n
(
)
;

`
;
G
=
F
(
R
+
A
+
Y
)
(
)
;
M
=
T
[
P
]
(
G
)
[
J
]
(
E
)
;
V
=
F
(
R
+
(
A
*
9
+
6
)
+
Y
)
(
)
;
W
=
F
(
R
+
(
A
*
9
+
2
)
+
Y
)
(
)
;
M
=
M
[
P
]
(
Q
)
[
J
]
(
V
)
[
P
]
(
w
)
[
J
]
(
W
)
[
P
]
(
B
)
[
J
]
(
G
)
;
F
(
M
)
(
)
;
