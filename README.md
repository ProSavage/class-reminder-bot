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
*Still under construction*