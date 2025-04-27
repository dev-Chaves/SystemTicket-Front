# SystemTicket API - Frontend

Este projeto foi gerado utilizando o [Angular CLI](https://github.com/angular/angular-cli) versão 19.2.8.

## Objetivo

O objetivo deste projeto é desenvolver o layout da **SystemTicket API** utilizando as seguintes tecnologias e recursos:

- **Mocks** para simulação de dados.
- Código **Backend** em Java, disponível no repositório: [https://github.com/dev-Chaves/systemTicket](https://github.com/dev-Chaves/systemTicket).

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão compatível com Angular CLI 19.2.8)
- [Angular CLI](https://angular.dev/tools/cli) instalado globalmente:
  ```bash
  npm install -g @angular/cli@19.2.8
  ```

## Instalação

1. Clone este repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd system-ticket-frontend
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento local, execute:

```bash
ng serve
```

Acesse `http://localhost:4200/` no navegador. A aplicação será recarregada automaticamente ao alterar os arquivos fonte.

## Geração de Código

Para criar novos componentes, diretivas ou outros esquemas, use o Angular CLI. Exemplo para criar um componente:

```bash
ng generate component nome-do-componente
```

Para listar todos os esquemas disponíveis, execute:

```bash
ng generate --help
```

## Build

Para compilar o projeto para produção, execute:

```bash
ng build
```

Os artefatos de build serão gerados no diretório `dist/`, otimizados para desempenho.

## Testes Unitários

Execute os testes unitários com o [Karma](https://karma-runner.github.io):

```bash
ng test
```

## Testes End-to-End

Para testes end-to-end (e2e), execute:

```bash
ng e2e
```

**Nota**: O Angular CLI não inclui um framework de testes e2e por padrão. Configure um framework como [Cypress](https://www.cypress.io/) ou [Playwright](https://playwright.dev/) se necessário.

## Contribuição

1. Faça um fork do repositório.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. Commit suas alterações:
   ```bash
   git commit -m "Adiciona nova funcionalidade"
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin feature/nova-funcionalidade
   ```
5. Abra um Pull Request.

## Recursos Adicionais

- [Documentação do Angular CLI](https://angular.dev/tools/cli)
- [Documentação do Angular](https://angular.dev/)
- [Repositório do Backend](https://github.com/dev-Chaves/systemTicket)
