const files = [

    {
        name: "WhatsApp GhostNode",
        category: "Apps",
        badge: "APP",
        icon: "WHATSAPP",
        file: "downloads/whatsapp.apk"
    },

    {
        name: "Pacote de Ferramentas",
        category: "Arquivos",
        badge: "ARQUIVO",
        icon: "ZIP",
        file: "downloads/ferramentas.zip"
    },

    {
        name: "Configuração MikroTik",
        category: "Códigos",
        badge: "CÓDIGO",
        icon: "MIKROTIK",
        file: "downloads/mikrotik.txt"
    },

    {
        name: "Vídeo Tutorial",
        category: "Vídeos",
        badge: "VÍDEO",
        icon: "VIDEO",
        file: "downloads/tutorial.mp4"
    },

    {
        name: "Documento PDF",
        category: "Outros",
        badge: "PDF",
        icon: "PDF",
        file: "downloads/documento.pdf"
    }

];


const downloads = document.getElementById("downloads");

const search = document.getElementById("search");

const noResults = document.getElementById("noResults");

const categories = document.querySelectorAll(".category");

const themeButton = document.getElementById("themeButton");


let selectedCategory = "Todos";


/* MOSTRAR FICHEIROS */

function displayFiles() {

    const searchText = search.value
        .toLowerCase()
        .trim();


    const filteredFiles = files.filter(file => {

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


    filteredFiles.forEach(file => {

        const card = document.createElement("div");

        card.className = "card";


        const categoryClass =
            file.category
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");


        card.innerHTML = `

            <div class="card-image ${categoryClass}">

                ${file.icon}

            </div>


            <div class="card-content">

                <div class="card-title">

                    ${file.name}

                </div>


                <div class="card-footer">

                    <span class="badge">

                        ${file.badge}

                    </span>


                    <button
                        class="download-button"
                        onclick="downloadFile('${file.file}')">

                        ⇩ Download

                    </button>

                </div>

            </div>

        `;


        downloads.appendChild(card);

    });


    if (filteredFiles.length === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}


/* DOWNLOAD */

function downloadFile(file) {

    const link = document.createElement("a");

    link.href = file;

    link.download = "";

    document.body.appendChild(link);

    link.click();

    link.remove();

}


/* CATEGORIAS */

categories.forEach(button => {

    button.addEventListener("click", () => {

        categories.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        selectedCategory =
            button.dataset.category;


        displayFiles();

    });

});


/* PESQUISA */

search.addEventListener("input", displayFiles);


/* TEMA */

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light");


    if (
        document.body.classList.contains("light")
    ) {

        localStorage.setItem(
            "ghostnode-theme",
            "light"
        );

    } else {

        localStorage.setItem(
            "ghostnode-theme",
            "dark"
        );

    }

});


/* CARREGAR TEMA */

if (
    localStorage.getItem("ghostnode-theme") === "light"
) {

    document.body.classList.add("light");

}


/* INICIAR */

displayFiles();
