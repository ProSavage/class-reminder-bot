# ClassReminderBot
This bot does what the name says, reminds you when class is starting.
There is a `config.json` file that can be used for quick configuration changes.

### Development
Make sure to create a `.env` file first, follow the format provided in `.env.sample`.<br/>
This project uses typescript, and you can use the `ts-node` runtime to run it without compiling to javascript, and then running it.<br/>
Use `yarn dev` to start using `ts-node`, make sure to `yarn install` first.

### Deployment
Using `yarn && yarn start` will install dependencies, then compile typescript into javascript, and run the project. 

This project is easily ran using docker:
1. Use `yarn docker` first, to build the actual docker-image.
2. make a `prod.env` file, and put the discord bot's token in there, using the `.env.sample` file's format.
3. use the provided `docker-compose.yml` to run the docker-image, then run `docker-compose up` (or `docker-compose up -d` to run detached).
