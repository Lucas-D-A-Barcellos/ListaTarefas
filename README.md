# Sistema de Gerenciamento de Tarefas

Este é um sistema simples de gerenciamento de tarefas desenvolvido em PHP, utilizando a biblioteca PDO para interação com um banco de dados MySQL. O sistema permite adicionar novas tarefas, editar tarefas existentes, marcar tarefas como realizadas e excluir tarefas.

## Funcionalidades

- **Adicionar Tarefa:** Permite a criação de novas tarefas.
- **Editar Tarefa:** Permite a edição da descrição de tarefas existentes.
- **Excluir Tarefa:** Permite a remoção de tarefas do sistema.
- **Marcar como Realizada:** Permite marcar tarefas como concluídas.

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos principais:

- `index.php`: Página inicial que lista as tarefas pendentes.
- `nova_tarefa.php`: Página para adicionar uma nova tarefa.
- `todas_tarefas.php`: Página que lista todas as tarefas.
- `tarefa_controler.php`: Controlador que gerencia as ações do CRUD (Create, Read, Update, Delete) das tarefas.
- `tarefas_model.php`: Modelo da tarefa, representando a estrutura dos dados da tarefa.
- `tarefa_service.php`: Serviço responsável pela lógica de negócios relacionada às tarefas.
- `conexao.php`: Script de conexão com o banco de dados MySQL.
- `script.js`: Arquivo JavaScript com funções para editar, excluir e marcar tarefas como realizadas.
- `banco_de_dados.sql`: Arquivo que contém estrutura do banco de dados.

## Requisitos

- PHP 7.0 ou superior
- MySQL 5.6 ou superior
- Servidor Web (ex: Apache, Nginx)

## Configuração

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Lucas-D-A-Barcellos/ListaTarefas.git

1. **Configure o banco de dados:**

- Crie um banco de dados MySQL.
- Importe o script SQL fornecido (banco_de_dados.sql) para criar as tabelas necessárias.
- Atualize as credenciais de conexão:
<br>
No arquivo conexao.php, atualize as credenciais para conectar ao seu banco de dados MySQL.



```php


class conexao{

    private $host = 'localhost';
    private $dbname = 'listatarefas';
    private $user = 'root';
    private $pass = '';

    public function conectar(){
        try {

            $conexao = new PDO(

                "mysql:host=$this->host;dbname=$this->dbname",
                "$this->user",
                "$this->pass"

            );

            return $conexao;
            
        } catch (PDOException $e) {
            echo '<p>'.$e->getMEssage().'</p>';
        }
        
    }

}

```

## Uso
- Navegue até a página inicial (index.php) para ver a lista de tarefas pendentes.
- Utilize o menu para adicionar novas tarefas, ver todas as tarefas ou gerenciar as tarefas pendentes.
- Clique nos ícones de editar, excluir ou marcar como realizado para gerenciar as tarefas diretamente na lista.

## Arquitetura
- MVC (Model-View-Controller): O projeto segue parcialmente o padrão MVC, separando a lógica de negócios (Serviço), a representação dos dados (Modelo) e a apresentação (Visão).
- PDO (PHP Data Objects): Utilizado para a interação segura com o banco de dados MySQL, prevenindo SQL Injection.
