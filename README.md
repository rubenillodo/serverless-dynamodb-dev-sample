# Sample usage of `serverless-dynamodb-dev`

## How do I run this?

1. Install [Docker](https://www.docker.com/) on your machine.
2. Clone this repository.
3. Build the Docker image running `docker-compose build` from the root of the project.
4. Install all the dependencies executing `docker-compose run --rm app yarn`.
5. Run the app with `docker-compose up` (you can use the `-d` option to run it in the background if you prefer).
6. Check `localhost:3000/dynamodb`. 🎉
7. Stop the app with `docker-compose down` if you started it with the `-d` option.

You can do `yarn clean` if you get weird errors when the app tries to start.

## Where is the magic?

The files you need to have a look at are:

* `serverless.yml`.
* `Dockerfile`.
* `docker-compose.yml`.
* The `seeds/` folder.
