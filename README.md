# Clozee CMS

The clozee's Content Management System.

## Setup

Install node modules using yarn

```sh
yarn
```

Copy the exmaple env file example to a file named `.env`

```sh
cp .env.example .env
```

If you are not connecting to a remote server, setup you local postgres database. You can create one using docker:

```sh
docker run -p 5432:5432 -e POSTGRES_PASSWORD=password postgres
```

Create the `clozee` database on the postgres:

```
> psql -h localhost -U postgres

Password for user postgres: password

postgres=# CREATE DATABASE clozee;
CREATE DATABASE
postgres=#
```

## Running Strapi

Build and run strapi with a watcher for development:

```sh
yarn develop
```

Create a strapi build:

```sh
yarn build
```

Run an existing build (won't refresh on changes):

```sh
yarn start
```
