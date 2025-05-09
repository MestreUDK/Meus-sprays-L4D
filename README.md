
# 🎨 Meus Sprays para Left 4 Dead

Bem-vindo à minha galeria pessoal de sprays customizados para **Left 4 Dead (L4D1 e L4D2)**!  
Aqui você encontra diversos sprays organizados por tags, com visualização, detalhes e downloads em formatos compatíveis com o jogo.

---

## ⚙️ Funcionalidades do Site

- Visualização contínua de todos os sprays
- Barra de busca com filtro em tempo real
- Exibição de:
  - Nome, data de criação, detalhes e tags
  - Imagem de amostra
  - Botões de download em `.vtf/.tga` e `.zip`
- Sistema de organização por pastas (um diretório por spray)
- JSON dinâmico como banco de dados

---

## 🗂️ Estrutura de Pastas

```
/
├── index.html              # Página principal
├── style.css               # Estilo visual
├── script.js               # Lógica da busca e exibição
├── sprays.json             # Lista de sprays
├── imagens/
│   └── spray_nome/
│       └── capa.png
├── downloads/
│   └── spray_nome/
│       ├── spray.vtf
│       └── spray.zip
```

---

## ✍️ Como Adicionar um Spray

1. Crie uma pasta em `imagens/` com o nome do spray e adicione a imagem de amostra.
2. Crie uma pasta correspondente em `downloads/` com o arquivo `.vtf/.tga` e `.zip`.
3. No arquivo `sprays.json`, adicione o novo spray assim:

```json
{
  "nome": "Spray Exemplo",
  "data": "2025-05-09",
  "detalhes": "Descrição breve do spray.",
  "tags": ["funny", "zumbi"],
  "imagem": "imagens/spray_exemplo/capa.png",
  "link_vtf": "downloads/spray_exemplo/spray.vtf",
  "link_zip": "downloads/spray_exemplo/spray.zip"
}
```

---

## 🔧 Ferramentas de Apoio

- [**Formulário de Cadastro de Sprays**](utils/formulario_sprays.html): Gera JSONs prontos para colar.
- [**Gerenciador Visual de Sprays**](utils/gerenciador_sprays.html): Edita, exclui e exporta o JSON atualizado direto pelo navegador.

---

## 🌐 Demonstração Online

Você pode acessar o site em:  
[https://meus-sprays-l4d.onrender.com](https://meus-sprays-l4d.onrender.com)

---

## ©️ Créditos

Criado com carinho por **Vinícius (MestreUDK)**  
Para a comunidade de jogadores e criadores de conteúdo do **Left 4 Dead**.
