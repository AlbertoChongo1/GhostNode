* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --background: #0d0d16;
    --header: #121a2d;
    --card: #182440;
    --border: #26365b;

    --text: #ffffff;
    --secondary: #aeb9d4;

    --purple: #b649ff;
}

body {
    background: var(--background);
    color: var(--text);

    font-family: Arial, Helvetica, sans-serif;

    min-height: 100vh;
}


/* HEADER */

.header {

    height: 55px;

    display: flex;
    align-items: center;

    gap: 20px;

    padding: 0 25px;

    background: var(--header);

    border-bottom: 1px solid #1e2944;
}


.logo {

    font-size: 20px;

    font-weight: bold;

    min-width: 160px;
}


.search {

    width: 100%;

    max-width: 1000px;

    margin: auto;

    height: 36px;

    border: none;

    outline: none;

    border-radius: 20px;

    padding: 0 20px;

    background: #27334e;

    color: white;

    font-size: 14px;
}


.search::placeholder {

    color: #b9c2d6;
}


.theme-button {

    width: 36px;

    height: 36px;

    border: none;

    border-radius: 50%;

    background: #26334f;

    color: white;

    cursor: pointer;

    font-size: 16px;
}


/* CATEGORIAS */

.categories {

    display: flex;

    justify-content: center;

    align-items: center;

    gap: 8px;

    padding: 10px;

    background: #141b30;

    flex-wrap: wrap;
}


.category {

    border: none;

    padding: 8px 16px;

    border-radius: 20px;

    background: #192742;

    color: #dce3f7;

    cursor: pointer;

    font-size: 13px;

    transition: 0.2s;
}


.category:hover {

    background: #7030a8;
}


.category.active {

    background: var(--purple);

    color: white;
}


/* CONTEÚDO */

main {

    width: min(1120px, calc(100% - 30px));

    margin: 18px auto 70px;
}


.downloads {

    display: grid;

    grid-template-columns: repeat(5, 1fr);

    gap: 12px;
}


/* CARD */

.card {

    background: var(--card);

    border: 1px solid var(--border);

    border-radius: 12px;

    overflow: hidden;

    transition: 0.2s;
}


.card:hover {

    transform: translateY(-3px);

    border-color: #4c659c;
}


/* IMAGEM DO CARD */

.card-image {

    height: 125px;

    display: flex;

    align-items: center;

    justify-content: center;

    text-align: center;

    font-size: 19px;

    font-weight: bold;

    color: white;

    padding: 10px;
}


/* CORES */

.apps {

    background: #1736b4;
}


.arquivos {

    background: #159dbd;
}


.codigos {

    background: #7134d5;
}


.videos {

    background: #c72828;
}


.outros {

    background: #28a79d;
}


/* INFORMAÇÃO */

.card-content {

    padding: 10px;
}


.card-title {

    font-size: 13px;

    min-height: 36px;

    line-height: 18px;
}


.card-footer {

    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-top: 10px;
}


.badge {

    font-size: 9px;

    padding: 4px 7px;

    border-radius: 10px;

    background: #a75bff;

    color: white;

    text-transform: uppercase;
}


.download-button {

    border: none;

    background: transparent;

    color: #aebbd8;

    cursor: pointer;

    font-size: 12px;
}


.download-button:hover {

    color: white;
}


/* SEM RESULTADOS */

.no-results {

    text-align: center;

    color: var(--secondary);

    padding: 60px;

    display: none;
}


/* FOOTER */

footer {

    position: fixed;

    bottom: 0;

    left: 0;

    width: 100%;

    height: 35px;

    display: flex;

    justify-content: center;

    align-items: center;

    background: var(--background);

    border-top: 1px solid #1d2742;

    color: #687593;

    font-size: 11px;
}


/* RESPONSIVO */

@media (max-width: 1000px) {

    .downloads {

        grid-template-columns: repeat(3, 1fr);

    }

}


@media (max-width: 650px) {

    .header {

        height: auto;

        padding: 12px;

        flex-wrap: wrap;

    }

    .logo {

        min-width: auto;

    }

    .search {

        order: 3;

        flex-basis: 100%;

    }

    .downloads {

        grid-template-columns: repeat(2, 1fr);

    }

}


@media (max-width: 420px) {

    .downloads {

        grid-template-columns: 1fr;

    }

}


/* TEMA CLARO */

body.light {

    --background: #f1f3f8;

    --header: #ffffff;

    --card: #ffffff;

    --border: #d8deea;

    --text: #172039;

    --secondary: #66738e;

}


body.light .categories {

    background: #ffffff;

}


body.light .search {

    background: #eef1f6;

    color: #172039;

}


body.light .category {

    background: #edf0f6;

    color: #39445d;

}


body.light .download-button {

    color: #66738e;

}
