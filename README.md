# Musslle Perfil Frontend

Projeto MVP para gerenciamento de treinos em academia ou em casa. Permite ao usuário criar sua própria ficha de treino ou solicitar que um treinador (admin) crie a ficha. Desenvolvido para fins de estudo, aplicando tecnologias e estruturas de aplicações reais, com foco em escalabilidade.

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Conexão com Backend](#conexão-com-backend)
- [Funcionalidades](#funcionalidades)
- [Roadmap](#roadmap)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

## Sobre o Projeto

Este projeto tem como objetivo facilitar o gerenciamento de treinos, permitindo flexibilidade para usuários e treinadores. O backend foi desenvolvido em Java, utilizando MySQL como banco de dados.

## Tecnologias Utilizadas

- **Node.js**: 22.14.0
- **Next.js**: 15.4.1
- **React**: 19.1.0
- **TypeScript**
- **Sass**
- **Java (Backend)**
- **JWT (Backend)**
- **MySQL (Banco de Dados)**

## Pré-requisitos

- Node.js >= 22.14.0
- npm ou yarn
- Backend rodando (Java + MySQL)

## Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/musslle-perfil-front.git
cd musslle-perfil-front

# Instale as dependências
npm install

# Inicie o projeto em modo desenvolvimento
npm run dev
```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento Next.js
- `npm run build`: Gera a build de produção
- `npm start`: Inicia o servidor em produção
- `npm run lint`: Executa o linter

## Estrutura do Projeto

```
musslle-perfil-front/
├── public/
│   ├── icons/
│   └── images/
├── src/
│   ├── components/
│   ├── pages/
│   │   └── app/
│   │       ├── exercises/
│   │       ├── home/
│   │       └── login/
│   ├── services/
│   └── utils/
├── package.json
└── README.md
```

## Conexão com Backend

A comunicação com o backend Java será feita via API REST. Certifique-se de que o backend está rodando e acessível.

- **URL do backend:** _[Adicionar URL aqui]_
- **Endpoints principais:** _[Adicionar endpoints aqui]_

## Funcionalidades

- [x] Cadastro de usuário
- [x] Login
- [x] Criação de ficha de treino
- [ ] Acesso de treinador/admin
- [ ] Edição de ficha
- [ ] Histórico de treinos
- [ ] Integração com backend

## Roadmap

- [ ] Implementar autenticação JWT
- [ ] Criar dashboard do usuário
- [ ] Permitir anexar imagens aos treinos
- [ ] Melhorar responsividade
- [ ] Testes automatizados

## Contribuição

Sinta-se à vontade para abrir issues e pull requests. Veja o arquivo [CONTRIBUTING.md](CONTRIBUTING.md) para mais detalhes.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

- Email: _[Seu email aqui]_
- LinkedIn: _[Seu LinkedIn aqui]_

---

> _Este projeto é apenas para fins de estudo, mas segue boas práticas e estrutura para fácil escalabilidade._
