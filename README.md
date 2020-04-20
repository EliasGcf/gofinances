<h1 align="center">
  <img src=".github/logo.svg" alt="GoFinances" width="250px">
</h1>

<h3 align="center">
  Serviço para controle de finanças
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/EliasGcf/gofinances">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/EliasGcf/gofinances">
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/EliasGcf/gofinances">
  
  <a href="https://github.com/EliasGcf/gofinances/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/EliasGcf/gofinances">
  </a>
  
  <a href="https://github.com/EliasGcf/gofinances/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/EliasGcf/gofinances">
  </a>
  
  <img alt="GitHub" src="https://img.shields.io/github/license/EliasGcf/gofinances">
</p>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação-execução-e-desenvolvimento">Instalação, execução e desenvolvimento</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<!-- <p id="insomniaButton" align="center">
  <a href="" target="_blank">
    <img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia">
  </a>
</p> -->

<img alt="Layout" src="https://res.cloudinary.com/eliasgcf/image/upload/v1587423410/gofinances/mockup_lqgnbt.png">

## 👨🏻‍💻 Projeto

O GoFinances é uma aplicação completa (API REST, Web e Mobile) voltada para você que deseja realizar o controle manual de seus gastos. Tendo suporte ao o envio de arquivos CSV (Comma-separated values), facilitando o envio em massa de dados.

## 🚀 Tecnologias

Esta aplicação foi desenolvida com as seguintes tecnologias:

- [Node.js](https://nodejs.org/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [PostgreSQL](https://www.postgresql.org/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest)
- [React Router DOM](https://reacttraining.com/react-router/)
- [React Navigation](https://reactnavigation.org/)
- [React Icons](https://react-icons.netlify.com/#/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Instalação, execução e desenvolvimento

<!-- Importe o arquivo `Insomnia.json` no Insomnia ou clique no botão [Run in Insomnia](#insomniaButton) -->

### Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/)

**Faça um clone desse repositório e acesse o diretório**

```bash
git clone https://github.com/EliasGcf/gofinances.git
```

### Backend

```bash
# A partir da raiz do projeto, entre na pasta do backend
$ cd server

# Instale as dependências
$ yarn

# Tenha um banco de dados PostgreSQL em execução, exemplo:
$ docker run --name gofinances-postgres -e POSTGRES_USER=docker -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=gofinances -p 5432:5432 -d postgres

# Execute as migrations
$ yarn typeorm migration:run

# Tudo pronto para iniciar o servidor
$ yarn dev:server
```

### Web

_ps: Antes de executar, lembre-se de iniciar o backend deste projeto_

```bash
# A partir da raiz do projeto, entre na pasta do frontend web
$ cd web

# Instale as dependências
$ yarn

# Tudo pronto para iniciar o client
$ yarn dev:server
```

### Mobile

<!-- _ps: Antes de executar, lembre-se de iniciar o backend deste projeto_ -->

<p align="center">
 Ainda em desenvolvimento!
 <br />
 <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loading">
</p>

## 🤔 Como contribuir

- **Faça um fork deste repositório**

```bash
# Fork via GitHub official command line
# Caso não tenha o GitHub CLI, realize o fork pelo site.

$ gh repo fork EliasGcf/gofinances
```

```bash
# Clone o seu fork
$ git clone url-do-seu-fork && cd gofinances

# Crie uma branch com sua feature
$ git checkout -b minha-feature

# Faça o commit das suas alterações
$ git commit -m 'feat: Minha nova feature'

# Faça o push para a sua branch
$ git push origin minha-feature
```

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com 💜 by [EliasGcf](https://www.linkedin.com/in/eliasgcf/)
