<p align="center">
  <img src="src/assets/logo.png" width="120" alt="Tecnodata Logo" />
</p>

<h1 align="center">Tecno Consulta</h1>

<p align="center">
  <strong>Consulta Receita Federal</strong>
</p>

<p align="center">
  Aplicação web para consultar dados de empresas brasileiras a partir do CNPJ, utilizando a API da Receita Federal.
</p>

<p align="center">
  <a href="https://renanarantes.github.io/tecno-consulta">🌐 Acessar aplicação</a>
</p>

---

## ✨ Funcionalidades

- **Consulta por CNPJ** — Digite um CNPJ e visualize dados completos da empresa
- **Histórico de consultas** — Últimas 10 consultas salvas localmente
- **Acesso rápido** — Clique em uma consulta anterior para visualizar sem nova requisição
- **Limpeza de histórico** — Remova itens individuais ou todo o histórico
- **Impressão** — Suporte para impressão dos dados consultados

---

## 🚀 Como executar

### Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/renanarantes/tecno-consulta.git
cd tecno-consulta

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
npm start
```

A aplicação estará disponível em [http://localhost:3000/tecno-consulta](http://localhost:3000/tecno-consulta).

### Build para produção

```bash
npm run build
```

### Deploy (GitHub Pages)

```bash
npm run deploy
```

---

## 🛠 Tecnologias

| Tecnologia            | Uso                                               |
| --------------------- | ------------------------------------------------- |
| **React**             | Interface e componentes                           |
| **React Router**      | Navegação entre páginas                           |
| **Styled Components** | Estilização                                       |
| **Axios**             | Requisições HTTP (JSONP para API Receita Federal) |
| **LocalStorage**      | Persistência do histórico de consultas            |
| **React Icons**       | Ícones da interface                               |
| **React Input Mask**  | Máscara de entrada para CNPJ                      |
