# Trabalho Prático 05 - Semanas 7 e 8

**Páginas de detalhes dinâmicas**

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Leia o enunciado completo no Canvas. 

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

**IMPORTANTE:** Você deve trabalhar e alterar apenas arquivos dentro da pasta **`public`,** mantendo os arquivos **`index.html`**, **`styles.css`** e **`app.js`** com estes nomes, conforme enunciado. Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**

## Informações Gerais

- Nome:Pedro Henrique Amaral Morais
- Matricula:904352
- Proposta de projeto escolhida:1. Pessoas e Produções
- Breve descrição sobre seu projeto:Resolvi homenagear um amigo meu que adora a arte mas não sabe como divulgar seu trabalho. POR FIM TRANSFORMEI ESSE SITE EM UMA GALERIA

## Print da Home-Page



## Print da página de detalhes do item



## Cole aqui abaixo a estrutura JSON utilizada no app.js

```javascript
const dados = [
 const artistas = [
  {
    nome: "bucaslelo",
    artes: [
      { titulo: "Quarteto Fantástico", imagem: "fantastico.jpg", descricao: "Uma ilustração vibrante da primeira família da Marvel, capturando o dinamismo do Senhor Fantástico. Desenho feito inteiramente à mão livre." },
      { titulo: "Homem-Aranha", imagem: "homemaranha.jpg", descricao: "Traços fluidos e cheios de energia mostrando o Amigão da Vizinhança balançando entre os prédios de Nova York. Foco na perspectiva e na cor." },
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
