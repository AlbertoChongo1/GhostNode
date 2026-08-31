* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

body {
font-family: Arial, sans-serif;
background: #f5f6f8;
color: #20242a;
}

/* CABEÇALHO */

header {
background: #111827;
color: white;
text-align: center;
padding: 45px 20px;
}

header h1 {
font-size: 38px;
}

header p {
margin-top: 8px;
color: #aeb6c2;
}

/* CONTEÚDO */

main {
width: 90%;
max-width: 900px;
margin: 50px auto;
}

main h2 {
margin-bottom: 20px;
font-size: 25px;
}

/* FICHEIROS */

.files {
display: flex;
flex-direction: column;
gap: 12px;
}

.file {
background: white;

```
border: 1px solid #e1e4e8;

border-radius: 8px;

padding: 20px;

display: flex;

align-items: center;

justify-content: space-between;

gap: 20px;
```

}

.file h3 {
font-size: 17px;
}

.file p {
margin-top: 5px;
color: #737b86;
font-size: 14px;
}

.file a {
background: #2563eb;

```
color: white;

padding: 10px 16px;

border-radius: 6px;

text-decoration: none;

font-size: 14px;

white-space: nowrap;
```

}

.file a:hover {
background: #1d4ed8;
}

/* RODAPÉ */

footer {
text-align: center;

```
padding: 30px;

color: #7a828c;

font-size: 13px;
```

}

/* TELEMÓVEL */

@media (max-width: 600px) {

```
.file {
    align-items: flex-start;

    flex-direction: column;
}

.file a {
    width: 100%;

    text-align: center;
}
```

}
