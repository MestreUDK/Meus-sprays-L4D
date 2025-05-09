
async function searchSprays() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const sprays = document.getElementsByClassName('spray-item');

    for (let i = 0; i < sprays.length; i++) {
        const name = sprays[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
        sprays[i].style.display = name.includes(input) ? "" : "none";
    }
}

fetch("sprays.json")
    .then(res => res.json())
    .then(data => {
        const list = document.getElementById("sprayList");
        data.forEach(spray => {
            const item = document.createElement("div");
            item.className = "spray-item";
            item.innerHTML = `
                <h3>${spray.nome}</h3>
                <p>Data: ${spray.data}</p>
                <p>${spray.detalhes}</p>
                <div class="tags">Tags: ${spray.tags.join(', ')}</div>
                <img src="${spray.imagem}" alt="${spray.nome}">
                <div class="buttons">
                    <a href="${spray.link_vtf}" download>Baixar .vtf/.tga</a>
                    <a href="${spray.link_zip}" download>Baixar .zip</a>
                </div>
            `;
            list.appendChild(item);
        });
    });
