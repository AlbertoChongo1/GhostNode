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


document.addEventListener("DOMContentLoaded", function () {

    const downloads = document.getElementById("downloads");
    const search = document.getElementById("search");
    const noResults = document.getElementById("noResults");
    const categories = document.querySelectorAll(".category");
    const themeButton = document.getElementById("themeButton");

    let selectedCategory = "Todos";


    /* ==========================
       VERIFICAR ELEMENTOS
    ========================== */

    if (!downloads) {
        console.error("Erro: elemento #downloads não encontrado.");
        return;
    }

    if (!search) {
        console.error("Erro: elemento #search não encontrado.");
        return;
    }


    /* ==========================
       MOSTRAR FICHEIROS
    ========================== */

    function displayFiles() {

        const searchText =
            search.value.toLowerCase().trim();


        const filteredFiles = files.filter(function (file) {

            const categoryMatch =
                selectedCategory === "Todos" ||
                file.category === selectedCategory;


            const searchMatch =
                file.name
                    .toLowerCase()
                    .includes(searchText);


            return categoryMatch && searchMatch;

        });


        downloads.innerHTML = "";


        filteredFiles.forEach(function (file) {

            const card =
                document.createElement("div");


            card.className = "card";


            /* ==========================
               CARTÃO
            ========================== */

            card.innerHTML = `
                <div
                    class="card-image"
                    style="background: ${file.color};"
                >
                    ${escapeHTML(file.icon)}
                </div>

                <div class="card-content">

                    <div class="card-title">
                        ${escapeHTML(file.name)}
                    </div>

                    <div class="file-info">

                        <span class="file-posted">
                            📅 Postado: ${escapeHTML(file.posted)}
                        </span>

                        <span class="file-validity">
                            ${
                                file.validity
                                    ? "⏳ Validade: " +
                                      escapeHTML(file.validity)
                                    : "♾️ Sem validade"
                            }
                        </span>

                    </div>

                    <div class="card-footer">

                        <span
                            class="badge"
                            style="background: ${file.color};"
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


            /* ==========================
               BOTÃO DOWNLOAD
            ========================== */

            const downloadButton =
                card.querySelector(".download-button");


            downloadButton.addEventListener(
                "click",
                function () {

                    downloadFile(file);

                }
            );


            downloads.appendChild(card);

        });


        /* ==========================
           SEM RESULTADOS
        ========================== */

        if (noResults) {

            if (filteredFiles.length === 0) {

                noResults.style.display = "block";

            } else {

                noResults.style.display = "none";

            }

        }

    }


    /* ==========================
       DOWNLOAD / LINK EXTERNO
    ========================== */

    function downloadFile(file) {

        if (file.type === "external") {

            window.open(
                file.file,
                "_blank",
                "noopener,noreferrer"
            );

            return;

        }


        const link =
            document.createElement("a");


        link.href = file.file;

        link.download = "";


        document.body.appendChild(link);

        link.click();

        link.remove();

    }


    /* ==========================
       PROTEÇÃO HTML
    ========================== */

    function escapeHTML(text) {

        return String(text).replace(
            /[&<>"']/g,
            function (character) {

                const entities = {

                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#039;"

                };

                return entities[character];

            }
        );

    }


    /* ==========================
       CATEGORIAS
    ========================== */

    categories.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                categories.forEach(
                    function (item) {

                        item.classList.remove("active");

                    }
                );


                button.classList.add("active");


                selectedCategory =
                    button.dataset.category;


                displayFiles();

            }
        );

    });


    /* ==========================
       PESQUISA
    ========================== */

    search.addEventListener(
        "input",
        displayFiles
    );


    /* ==========================
       TEMA
    ========================== */

    if (themeButton) {

        themeButton.addEventListener(
            "click",
            function () {

                document.body.classList.toggle("light");


                const theme =
                    document.body.classList.contains("light")
                        ? "light"
                        : "dark";


                localStorage.setItem(
                    "ghostnode-theme",
                    theme
                );

            }
        );

    }


    /* ==========================
       CARREGAR TEMA
    ========================== */

    if (
        localStorage.getItem(
            "ghostnode-theme"
        ) === "light"
    ) {

        document.body.classList.add("light");

    }


    /* ==========================
       INICIAR
    ========================== */

    displayFiles();

});
```
