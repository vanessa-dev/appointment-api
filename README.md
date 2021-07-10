# Api de agendamentos do curso da Rocktseat

## Guia para execução desse projeto
1. É necessario instalar o [Node, Npm](https://nodejs.org/en/), [Git](https://git-scm.com/),[Docker](https://docs.docker.com/engine/install/) e [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable), para rodar o projeto.

2. Clone esse projeto em sua maquina rodando o seguinte comando: **git clone https://github.com/vanessa-dev/appointment-api.git**

3. Entre dentro da pasta do projeto e rode  o seguinte comando: **yarn install** para instalar todas as depedencias do projeto.

4. Criando um container postgres, troque nome_bd pelo nome do banco de dados que voce usara na aplicacao e senha pela senha que deseja usar no seu banco de dados: **docker run --name nome_bd -e POSTGRES_PASSWORD=senha -p 5432:5432**

5. Crie seu banco de dados, usando um gerenciador de banco de dados para Postgres da sua preferencia [DBeaver](https://dbeaver.io/).

6. Renomeie o arquivo ormconfig.example.json para ormconfig.json, substitua as configurações do banco de dados.

7. Renomeie o arquivo src/auth.example.ts para auth.ts, substitua  as configuracoes da secret key.

8. Rode o comando **yarn dev:server**

> OBS Antes de executar o passo 8 sempre verificar se o seu container postgres esta startado.

Repósitorio do front-end da aplicação: https://github.com/vanessa-dev/gobarber-web

