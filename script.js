```javascript
const files = [

    {
        name: "7-Zip 26.00 x64",
        category: "Apps",
        badge: "EXE",
        icon: "7-ZIP",
        file: "downloads/7z2600-x64.exe",
        type: "download",

        color: "#2563eb",

        posted: "01/09/2026",

        validity: null
    },

    {
        name: "WyreVPN Lite",
        category: "Apps",
        badge: "APK",
        icon: "Wyre Lite",
        file: "https://play.google.com/store/apps/details?id=com.wyrhub.lite",
        type: "external",

        color: "#16a34a",

        posted: "01/09/2026",

        validity: null
    }

];


const downloads =
    document.getElementById("downloads");

const search =
    document.getElementById("search");

const noResults =
    document.getElementById("noResults");

const categories =
    document.querySelectorAll(".category");

const themeButton =
    document.getElementById("themeButton");


let selectedCategory = "Todos";


/* ================================
   MOSTRAR FICHEIROS
================================ */

function displayFiles() {

    const searchText =
        search.value
            .toLowerCase()
            .trim();


    const filteredFiles =
        files.filter(file => {

            const categoryMatch =
                selectedCategory === "Todos" ||
                file.category === selectedCategory;


            const searchMatch =
                file.name
                    .toLowerCase()
                    .includes(searchText);


            return categoryMatch &&
                   searchMatch;

        });


    downloads.innerHTML = "";


    filteredFiles.forEach(file => {

        const card =
            document.createElement("div");


        card.className = "card";


        /* COR DO FICHEIRO */

        const fileColor =
            file.color || "#2563eb";


        /* CLASSE DA CATEGORIA */

        const categoryClass =
            file.category
                .toLowerCase()
                .normalize("NFD")
                .replace(
                    /[\u0300-\u036f]/g,
                    ""
                );


        /* VALIDADE */

        const validityHTML =
            file.validity
                ? `
                    <span class="file-validity">
                        ⏳ Validade: ${escapeHTML(file.validity)}
                    </span>
                  `
                : `
                    <span class="file-validity">
                        ♾️ Sem validade
                    </span>
                  `;


        /* CARTÃO */

        card.innerHTML = `

            <div
                class="card-image ${categoryClass}"
                style="
                    background: ${fileColor};
                    border-color: ${fileColor};
                "
            >

                ${escapeHTML(file.icon)}

            </div>


            <div class="card-content">

                <div class="card-title">

                    ${escapeHTML(file.name)}

                </div>


                <div class="file-info">

                    <span class="file-posted">

                        📅 Postado:
                        ${escapeHTML(file.posted)}

                    </span>


                    ${validityHTML}

                </div>


                <div class="card-footer">

                    <span
                        class="badge"
                        style="
                            background: ${fileColor};
                        "
                    >

                        ${escapeHTML(file.badge)}

                    </span>


                    <button
                        class="download-button"
                        type="button"
                    >

                        ⇩ Download

                    </button>

                </div>

            </div>

        `;


        /* BOTÃO */

        const downloadButton =
            card.querySelector(
                ".download-button"
            );


        downloadButton.addEventListener(
            "click",
            () => {

                downloadFile(file);

            }
        );


        downloads.appendChild(card);

    });


    /* SEM RESULTADOS */

    if (filteredFiles.length === 0) {

        noResults.style.display =
            "block";

    } else {

        noResults.style.display =
            "none";

    }

}


/* ================================
   DOWNLOAD / LINK EXTERNO
================================ */

function downloadFile(file) {


    /* LINK EXTERNO */

    if (file.type === "external") {

        window.open(
            file.file,
            "_blank",
            "noopener,noreferrer"
        );

        return;

    }


    /* DOWNLOAD LOCAL */

    const link =
        document.createElement("a");


    link.href =
        file.file;


    link.setAttribute(
        "download",
        ""
    );


    document.body.appendChild(link);


    link.click();


    link.remove();

}


/* ================================
   PROTEÇÃO CONTRA HTML
================================ */

function escapeHTML(text) {

    return String(text).replace(
        /[&<>"']/g,
        character => ({

            "&": "&amp;",

            "<": "&lt;",

            ">": "&gt;",

            '"': "&quot;",

            "'": "&#039;"

        }[character])
    );

}


/* ================================
   CATEGORIAS
================================ */

categories.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            categories.forEach(
                item => {

                    item.classList.remove(
                        "active"
                    );

                }
            );


            button.classList.add(
                "active"
            );


            selectedCategory =
                button.dataset.category;


            displayFiles();

        }
    );

});


/* ================================
   PESQUISA
================================ */

search.addEventListener(
    "input",
    displayFiles
);


/* ================================
   TEMA
================================ */

themeButton.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light"
        );


        const theme =
            document.body.classList.contains(
                "light"
            )
            ? "light"
            : "dark";


        localStorage.setItem(
            "ghostnode-theme",
            theme
        );

    }
);


/* ================================
   CARREGAR TEMA
================================ */

if (
    localStorage.getItem(
        "ghostnode-theme"
    ) === "light"
) {

    document.body.classList.add(
        "light"
    );

}


/* ================================
   INICIAR
================================ */

displayFiles();
```
