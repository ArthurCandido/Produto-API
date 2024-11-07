# Produto API

Esta é uma API simples para gerenciar produtos. A API permite criar, ler, atualizar e deletar produtos em um banco de dados PostgreSQL.

## Requisitos

- Node.js
- PostgreSQL

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/ArthurCandido/Produto-API.git
    cd produto-api
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure o banco de dados PostgreSQL:

    Execute o seguinte comando para acessar o psql, substituindo <seu_usuario> pelo nome do seu usuário PostgreSQL:

     ```bash
    psql -U <seu_usuario>
    ```

    No console do psql, execute o comando abaixo para criar um novo banco de dados chamado produto_db:

    ```sql
    CREATE DATABASE produto_db;
    ```

    Para usar o banco de dados produto_db, conecte-se a ele com o comando:

    ```sql
    \c produto_db
    ```
     
    Crie uma tabela `produtos` com o seguinte comando SQL:

    ```sql
    CREATE TABLE produtos (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        estoque INTEGER NOT NULL DEFAULT 0,
        preco NUMERIC(5,2) NOT NULL DEFAULT 0.00,
        data DATE NOT NULL
    );
    ```

4. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

    ```plaintext
    DB_USER=seu_usuario
    DB_HOST=localhost
    DB_NAME=seu_banco_de_dados
    DB_PASSWORD=sua_senha
    DB_PORT=5432
    ```

## Uso

1. Inicie o servidor:

    ```bash
    node server.js
    ```

2. A API estará disponível em `http://localhost:3000`.

## Endpoints

### Criar Produto

- **URL:** `/produtos`
- **Método:** `POST`
- **Corpo da Requisição:**

    ```json
    {
        "descricao": "Produto Exemplo",
        "estoque": 10,
        "preco": 99.99,
        "data": "2023-01-01"
    }
    ```

- **Resposta de Sucesso:**

    ```json
    {
        "id": 1,
        "descricao": "Produto Exemplo",
        "estoque": 10,
        "preco": 99.99,
        "data": "2023-01-01"
    }
    ```

### Listar Produtos

- **URL:** `/produtos`
- **Método:** `GET`
- **Resposta de Sucesso:**

    ```json
    [
        {
            "id": 1,
            "descricao": "Produto Exemplo",
            "estoque": 10,
            "preco": 99.99,
            "data": "2023-01-01"
        }
    ]
    ```

### Atualizar Produto

- **URL:** `/produtos/:id`
- **Método:** `PUT`
- **Corpo da Requisição:**

    ```json
    {
        "descricao": "Produto Atualizado",
        "estoque": 20,
        "preco": 149.99,
        "data": "2023-02-01"
    }
    ```

- **Resposta de Sucesso:**

    ```json
    {
        "id": 1,
        "descricao": "Produto Atualizado",
        "estoque": 20,
        "preco": 149.99,
        "data": "2023-02-01"
    }
    ```

### Deletar Produto

- **URL:** `/produtos/:id`
- **Método:** `DELETE`
- **Resposta de Sucesso:** `204 No Content`
