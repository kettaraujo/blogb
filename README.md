# Projeto de Blog

Este é um projeto de blog desenvolvido utilizando as tecnologias:

    - HTML
    - CSS
    - JavaScript
    - Django
    - SQLite

O blog permite o cadastro de títulos e conteúdos de um post, armazena os dados em um banco de dados SQLite e permite a edição de posts existentes.

## Como Rodar o Projeto

# 1. Clonar o Repositório

Baixe o projeto em sua máquina. Se estiver no GitHub, clone o repositório usando: git clone https://github.com/kettaraujo/Blog

# 2. Abrir no VS Code

    Abra o Visual Studio Code.
    Clique em File, depois em Open Folder.
    Navegue até a pasta onde o projeto foi baixado e clique em Selecionar Pasta.
   
# 3. Configurar o Banco de Dados

No arquivo settings.py, a configuração padrão do Django já utiliza o SQLite como banco de dados automaticmente. Confirme se a seção DATABASES está assim:

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }
# 4. Rodar as Migrações

No terminal do VS Code, execute os seguintes comandos para criar as tabelas no banco de dados:

    python manage.py makemigrations
    python manage.py migrate

# 5. Rodar o Servidor de Desenvolvimento

Ainda no terminal, inicie o servidor do Django com o comando:

    python manage.py runserver

# 6. Acessar o Projeto no Navegador
    clique no endereço http que aparece no terminal e abra no navegador.


