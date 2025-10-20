const artistas = [
  {
    nome: "bucaslelo",
    artes: [
      { titulo: "Quarteto Fantástico", imagem: "fantastico.jpg", descricao: "Uma ilustração vibrante da primeira família da Marvel, capturando o dinamismo do Senhor Fantástico. Desenho feito inteiramente à mão livre no celular." },
      { titulo: "Homem-Aranha", imagem: "homemaranha.jpg", descricao: "Traços fluidos e cheios de energia mostrando o Amigão da Vizinhança com sua estética anos 80/90. Foco na perspectiva e na cor." },
      { titulo: "Batman", imagem: "batazul.jpg", descricao: "O Cavaleiro das Trevas em uma pose imponente, utilizando a clássica capa azul e cinza. A luz e a sombra foram trabalhadas para dar profundidade." }
    ],
    bio: "Bucaslelo é um artista talentoso do coração de ouro e muito guerreiro. Em seu tempo livre, desenhar é sua maior paixão. Tem 20 anos de muita luta e cada desenho busca mostrar mais e mais evolução a cada apredendizado e erro buscando crescer"
  },
  {
    nome: "artistadeiagenerico",
    artes: [
      { titulo: "Quarteto Fantástico", imagem: "iafantastica.png", descricao: "Imagem gerada com prompts genéricos, destacando o Senhor Fantástico em um fundo abstrato, evidenciando a falta de alma e originalidade." },
      { titulo: "Homem-Aranha", imagem: "iaranha.png", descricao: "Uma colagem de elementos clichês do Homem-Aranha, gerada rapidamente por algoritmos, sem atenção aos detalhes da anatomia ou composição." },
      { titulo: "Batman", imagem: "iabatman.png", descricao: "Uma representação robótica e sem vida do Batman. O uso exagerado de filtros digitais mostra a pressa e a falta de esforço criativo." }
    ],
    bio: "Artistadeiagenerico é conhecido por ser um pouco preguiçoso e criar suas artes roubando dos outros. Sem criativade e sem esforço somente copiar e colar, esta fadado ao fracasso"
  },
  {
    nome: "ronaldo",
    artes: [
      { titulo: "Quarteto Fantástico", imagem: "ronaldofantastico.png", descricao: "Desenho a lápis do Senhor Fantástico, com foco na precisão das linhas e na musculatura do personagem, uma homenagem ao físico de atleta do Fenômeno." },
      { titulo: "Homem-Aranha", imagem: "ronaldoaranha.png", descricao: "Peter Parker em ação, executado com a técnica de hachura a lápis, conferindo textura e profundidade ao traje. A pose reflete sua agilidade no campo." },
      { titulo: "Batman", imagem: "ronaldobatman.png", descricao: "Uma poderosa ilustração do Batman em um estilo de rascunho. O uso de grafite em diferentes tons realça a capa e a máscara icônicas." }
    ],
    bio: "Ronaldo é um artista versátil, com paixão por super-heróis e desenhos detalhados que mostram seu talento extraordinário. Ex-jogador de futebol, agora apaixonado por desenhar a lápis, criando ilustrações detalhadas com disciplina."
  }
];

function montarGaleria(artistaFiltro = null) {
  const container = document.getElementById("cards-galeria");
  container.innerHTML = "";

  artistas.forEach((artista, artistIndex) => {
    if (artistaFiltro && artista.nome !== artistaFiltro) return;

    artista.artes.forEach((arte, artIndex) => {
      const col = document.createElement("div");
      col.className = "col-sm-6 col-md-4";

      const link = document.createElement("a");
      link.href = `detalhes.html?artista=${artistIndex}&arte=${artIndex}`;
      link.className = "text-decoration-none text-dark d-block h-100";

      const card = document.createElement("div");
      card.className = "card h-100 border-light shadow-sm";

      const img = document.createElement("img");
      img.src = arte.imagem;
      img.className = "card-img-top";
      img.alt = arte.titulo;

      const cardBody = document.createElement("div");
      cardBody.className = "card-body text-center";

      const cardTitle = document.createElement("h3");
      cardTitle.className = "card-title";
      cardTitle.textContent = arte.titulo;

      const artistName = document.createElement("p");
      artistName.className = "card-text text-muted mb-0";
      artistName.textContent = `por ${artista.nome}`;
      
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(artistName); 
      
      card.appendChild(img);
      card.appendChild(cardBody);
      
      link.appendChild(card);
      col.appendChild(link);
      container.appendChild(col);
    });
  });
}

function montarBiografias() {
  const bioContainer = document.getElementById("biografias-artistas");
  bioContainer.innerHTML = "";

  artistas.forEach(artista => {
    const div = document.createElement("div");
    div.className = "artista-biografia";

    const nome = document.createElement("h4");
    nome.textContent = artista.nome;

    const bio = document.createElement("p");
    bio.textContent = artista.bio;

    div.appendChild(nome);
    div.appendChild(bio);
    bioContainer.appendChild(div);
  });
}

function carregarDetalhes() {
    const params = new URLSearchParams(window.location.search);
    const artistIndex = parseInt(params.get('artista'));
    const artIndex = parseInt(params.get('arte'));

    if (isNaN(artistIndex) || isNaN(artIndex) || 
        artistIndex < 0 || artistIndex >= artistas.length ||
        artIndex < 0 || artIndex >= artistas[artistIndex].artes.length) {
        
        alert("Item não encontrado! Redirecionando para a galeria.");
        window.location.href = "index.html";
        return;
    }

    const artista = artistas[artistIndex];
    const arte = artista.artes[artIndex];

    document.getElementById('titulo-arte').textContent = arte.titulo;
    document.getElementById('imagem-arte').src = arte.imagem;
    document.getElementById('imagem-arte').alt = arte.titulo;

    document.getElementById('nome-artista').textContent = artista.nome;
    document.getElementById('bio-artista').textContent = artista.bio;
    // NOVO: Adiciona a descrição da obra
    document.getElementById('descricao-obra').textContent = arte.descricao; 
}


document.addEventListener("DOMContentLoaded", () => {
    if (document.title === "Apostila - Coleção de Desenhos") {
      montarGaleria();
      montarBiografias();
    } else if (document.title === "Detalhes do Desenho") {
      carregarDetalhes();
    }
});