let spraysGlobal = [];

async function searchSprays() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const tagFiltro = document.querySelector('.tag-button.selected')?.dataset.tag;
    const anoFiltro = document.querySelector('.ano-button.selected')?.dataset.ano;
    const sprays = document.getElementsByClassName('spray-item');

    for (let i = 0; i < sprays.length; i++) {
        const el = sprays[i];
        const nome = el.dataset.nome;
        const tags = el.dataset.tags.split(',');
        const ano = el.dataset.ano;

        const correspondeBusca = nome.includes(input);
        const correspondeTag = !tagFiltro || tags.includes(tagFiltro);
        const correspondeAno = !anoFiltro || ano === anoFiltro;

        el.style.display = (correspondeBusca && correspondeTag && correspondeAno) ? "" : "none";
    }
}

function aplicarFiltro(tipo, valor) {
    document.querySelectorAll(`.${tipo}-button`).forEach(btn => {
        btn.classList.toggle('selected', btn.dataset[tipo] === valor);
    });
    searchSprays();
}

function gerarBotoes(filtros, tipo, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = `<button class="${tipo}-button selected" data-${tipo}="" onclick="aplicarFiltro('${tipo}', '')">Todos</button>`;
    filtros.forEach(f => {
        const btn = document.createElement('button');
        btn.className = `${tipo}-button`;
        btn.dataset[tipo] = f;
        btn.innerText = f;
        btn.onclick = () => aplicarFiltro(tipo, f);
        container.appendChild(btn);
    });
}

fetch("sprays.json")
    .then(res => res.json())
    .then(data => {
        // Ordena por data (mais recente primeiro) e por nome (alfabético)
        data.sort((a, b) => {
            if (a.data > b.data) return -1;
            if (a.data < b.data) return 1;
            return a.nome.localeCompare(b.nome);
        });

        spraysGlobal = data;
        const list = document.getElementById("sprayList");
        const todasTags = new Set();
        const todosAnos = new Set();

        data.forEach(spray => {
            spray.tags.forEach(t => todasTags.add(t));
            todosAnos.add(spray.data.slice(0, 4));

            const item = document.createElement("div");
            item.className = "spray-item";
            item.dataset.nome = spray.nome.toLowerCase();
            item.dataset.tags = spray.tags.join(',');
            item.dataset.ano = spray.data.slice(0, 4);

            let botoesHTML = "";
            if (spray.link_vtf) {
                botoesHTML += `<a class="btn-vtf" href="${spray.link_vtf}" download>Baixar .vtf/.tga</a>`;
            }
            if (spray.link_zip) {
                botoesHTML += `<a class="btn-zip" href="${spray.link_zip}" download>Baixar .zip</a>`;
            }
            if (spray.link_psd) {
                botoesHTML += `<a class="btn-psd" href="${spray.link_psd}" download>Baixar .psd</a>`;
            }

            item.innerHTML = `
                <h3>${spray.nome}</h3>
                <p>Data: ${spray.data}</p>
                <p>${spray.detalhes}</p>
                <div class="tags">Tags: ${spray.tags.join(', ')}</div>
                <img src="${spray.imagem}" alt="${spray.nome}">
                <div class="buttons">${botoesHTML}</div>
            `;
            list.appendChild(item);
        });

        gerarBotoes([...todasTags].sort(), "tag", "tagFiltro");
        gerarBotoes([...todosAnos].sort().reverse(), "ano", "anoFiltro");
    });
