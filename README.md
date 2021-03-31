# Api de agendamentos do curso da Rocktseat

## Guia para execução desse projeto
1. É necessario instalar o [Node, Npm](https://nodejs.org/en/), [Git](https://git-scm.com/),[Docker](https://docs.docker.com/engine/install/) e [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable), para rodar o projeto.

2. Clone esse projeto em sua maquina rodando o seguinte comando: **git clone https://github.com/vanessa-dev/appointment-api.git**

3. Entre dentro da pasta do projeto e rode  o seguinte comando: **yarn install** para instalar todas as depedencias do projeto.

4. Criando um container postgres, troque nome_bd pelo nome do banco de dados que voce usara na aplicacao e senha pela senha que deseja usar no seu banco de dados: **docker run --name nome_bd -e POSTGRES_PASSWORD=senha -p 5432:5432**

5. Se ainda voce  não tiver criado o banco de dados, escolha um gerenciador de banco de dados da sua preferencia [DBeaver](https://dbeaver.io/).


