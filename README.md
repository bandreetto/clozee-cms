# Clozee CMS

The clozee's Content Management System.

## Setup

Install node modules using yarn

```sh
yarn
```

Copy the sample env file example to a file named `.env`. Ask your tech lead for the AWS Keys.

```sh
cp .sample.env .env
```

If you are not connecting to a remote server, setup you local postgres database. You can create one using the docker-compose file present in the project root:

```sh
docker-compose -p clozee-cms -f docker-compose.yml up -d
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
yarn dev
```

Create a strapi build:

```sh
yarn build
```

Run an existing build (won't refresh on changes):

```sh
yarn start
```
