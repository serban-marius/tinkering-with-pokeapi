# tinkering-with-pokeapi
NestJS API build as a random showcase of acquired knowledge.

## Run ⚡️

In order to be able to launch the application you should have 
[Docker-Desktop](https://www.docker.com/products/docker-desktop) installed.

Once that is done you will have to execute the following command:
```bash
docker-compose build --no-cache prod
docker-compose up prod
``` 
This will execute the project on [localhost:3000](localhost:3000).

 ## Developing 🧑🏽‍💻
If you need to perform **Developing Tasks** on the project you will require `homebrew` or similar package browser.
Then you should execute the following command: 
```bash
brew install node@12
```
The next step will be to get the node_modules packages locally in order to be able to develop with the IDEs guidance & 
to avoid all the missing modules messages. Just execute 
* If new dependencies added to package.json:
```bash
npm install 
```
* If `package-lock.json` has all the dependencies we need, is okay to use as the project will use the `node_modules` from 
  the docker container to run:
```bash
npm ci 
```
During this last steps please take care of the content generated in the `package-lock.json`, **newer versions of NodeJs
can change the `lockfileVersion`**.

Once that is done you will have to execute the following command:
```bash
docker-compose build --no-cache dev
docker-compose up dev
``` 
This will execute: 
- the project on [localhost:3000](http://localhost:3000).
- the debugger on [localhost:9229](http://localhost:9229).
- the swagger on [localhost:3000/api-docs](http://localhost:3000/api-docs).
