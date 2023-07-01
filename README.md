# <h1 align = "center">PokeApi</h1>

 - [Descrição](#descrição)
 - [Imagens](#imagens)
 - [Tecnologias](#tecnologias)
 - [Hospedagem](#hospedagem)
 - [Clonagem](#clonagem)
 - [Depoimento](#depoimento)
 - [Desenvolvedora](#desenvolvedora)

 <br>

## Descrição

Projeto referente ao teste técnico da empresa Inicie.educação. 

Feito em Angular 15 (TypeScript), com HTML semântico, e todas as telas estão responsivas, podendo ser visualizado em telas como desktop, tablet e mobile. 

### Pontos de Avaliação:
- [x] Conclusão - serão solicitados no total 7 requisitos durante o teste e todos devem ser cumpridos conforme a ordem solicitada.
- [x] Eficiência - não basta que os requisitos sejam atendidos, mas a execução deve ocorrer como planejado nessa documentação.
- [x] Qualidade - o código escrito deve deixar claro qual a sua finalidade. Devem também ser usados nomes de variáveis e métodos que sejam facilmente compreensíveis.
- [x] Estrutura - o código deve ser estruturado de uma forma que seu entendimento seja simples.
- [x] Componentização - Angular é um framework baseado em componentes, a utilização dessa forma aumenta a reutilização de código e reduz a quantidade de bugs
- [x] Docker - todos nossos projetos rodam dentro da estrutura docker então precisamos que ele seja possível de executar dessa forma.
- [x] Documentação - O código deve estar bem documentado para que outras pessoas possam realizar a manutenção futuramente.
- [x] Features extras - adoramos ideias novas, então todo esforço extra (desde que os requisitos não sejam alterados) será visto com bons olhos.


Link de origem: "https://docs.google.com/document/d/1gd9TQAthqJIhybIZBv4--c8fo_94xtOY4hksmk_M98E/edit"

### Estrutura 

Para construção da aplicação, foi usado a API REST PokeApi (   “https://pokeapi.co/api/v2”   ), nela foi identificado os endpoints necessários para a consulta da lista de Pokémons, com seus respectivos Id’s, para que após essa identificação pudesse obter os detalhes de cada espécie. 
O layout foi feito inicialmente para a versão desktop (1360px), para que fosse respeitada toda a documentação do Figma e a parir desse layout, foi construído a responsividade para as demais telas. 

Aplicado funções extras como animação nos cards, botão up (para que o usuário não precise scrollar toda a página para retornar ao topo), hover nos botões de buscar e de rolagem de cards.

Codigo feito em Angular com TypeScript e CSS , dividido em componentes para execução de cada etapa do codigo, como:

- InputComponent – Informações de header e input para busca de Pokémons pelo nome.
- CardComponent -  Detalhes do card (individual).
- CardListComponent – Lista de cards, com os dados carregados com as informações da API.
- CardDetailsComponent – Card de detalhes extras dos Pokémons.

Feita a hospedagem do projeto na Vercel, link no item abaixo de hospedagem. 



## Imagens

<h3> :camera: Página Mobile e Página Desktop</h3>

<div align="center">
<img  src = "https://github.com/JennyLamego2022/pokedex_angular/assets/97410860/fd4d4c19-f7ab-4ee6-a4c6-bf021ad95c1e" width = "146.6px"/>
<img  src = "https://github.com/JennyLamego2022/pokedex_angular/assets/97410860/314bd731-713f-472f-bf99-aa5650082c3d" width = "146.6px"/>
<img  src = "https://github.com/JennyLamego2022/JennyLamego2022/assets/97410860/f19d4566-f52c-4a96-998e-845647d18a67" width = "300px"/>
<img  src = "https://github.com/JennyLamego2022/JennyLamego2022/assets/97410860/4125866a-1997-49d3-8906-b9ad5ef6ca3a" width = "300px"/>
</div>


 
## Tecnologias

![Angular](https://img.shields.io/badge/-Angular-05122A?style=flat&logo=angular)&nbsp;
![TypeScript](https://img.shields.io/badge/-TypeScript-05122A?style=flat&logo=typescript)&nbsp;
![HTML](https://img.shields.io/badge/-HTML-05122A?style=flat&logo=HTML5)&nbsp;
![CSS](https://img.shields.io/badge/-CSS-05122A?style=flat&logo=CSS3&logoColor=1572B6)&nbsp;
![Git](https://img.shields.io/badge/-Git-05122A?style=flat&logo=git)&nbsp;
![GitHub](https://img.shields.io/badge/-GitHub-05122A?style=flat&logo=github)&nbsp;
![Markdown](https://img.shields.io/badge/-Markdown-05122A?style=flat&logo=markdown)&nbsp;
![Visual Studio Code](https://img.shields.io/badge/-Visual%20Studio%20Code-05122A?style=flat&logo=visual-studio-code&logoColor=007ACC)&nbsp;


 
## Hospedagem:

Vercel: "https://pokedex-angular-peach.vercel.app/"


 ## Clonagem

 ### Pré-requisitos para rodar <a name="id05"></a>

<br />

- [x] Editor de código de sua preferência (recomendado VS code)
- [x] Git
- [x] Instalação do Angular CLI através do terminal, digitar: 
      OBS: O primeiro passo para utilizar o Angular CLI é realizar a sua instalação e, para tal, é necessário ter o Node.JS instalado. Caso ainda não o tenha, acesse o site do Node.js e baixe a última versão destinada ao seu sistema operacional.

      Com o Node.JS instaladotemos à disposição o comando npm, necessário para instalar o Angular CLI. Neste ponto, será preciso abrir o terminal do seu sistema operacional e digitar a instrução: 

      OBS: Para instruções completas, acesse o site: "https://angular.io/cli"
      
    - [x] npm install -g @angular/cli

- [x] Clonar o repositório do GitHub,no terminal digitar:
    - [x] git clone https://github.com/JennyLamego2022/pokedex_angular.git
    - [x] entrar na pasta do seu diretório e digitar no terminal:
    - [x] code .
    - [x] npm install

OBS: Após essas etapas o projeto já está pronto pra rodar. 

- [x] Para abrir na web, digitar no terminal: 
    - [x] ng serve --open


### Docker

(Em produção)

 
## Depoimento

Foi muito prazeroso fazer esse projeto, pois tive como explorar muitas funcionalidades no framework Angular e estilização em CSS. Já havia consumido algumas API´s em outros projetos, meu desafio foi aplicar meu conhecimento para entendimento da abordagem da API em questão. 
Tive alguns contratempos para para identificação de algumas imagens na API, porém foi solucionado. 

De qualquer forma, me empenhei bastante, explorando meu conhecimento e habilidades de pesquisa para poder entregar o que foi solicitado. 

Ainda tenho uns extras para concluir, que continuarei formatando e finalizando mesmo após a entrega do projeto.




## Desenvolvedora

<br><br>
<div align="center">
<img  src = "https://user-images.githubusercontent.com/97410860/212765655-361def29-f259-48d1-af01-36bd93380510.jpg" width = "150px"/>
<h3>Jennyfer Lamego</h3>
</div>
