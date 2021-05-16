# tinkering-with-pokeapi
NestJS API build as a random showcase of acquired knowledge. <br>
The chosen project structure is a Domain-Driven Design based Hexagonal Architecture inspired by 
[this](https://vaadin.com/learn/tutorials/ddd/ddd_and_hexagonal) article.
* Adapter --> Connection with the outside world (Users, DB & external APIs for example).
* Application --> Here we will occur the magic 🧙🏽‍. 
* Domain --> Soo called "business logic" resides here.

---
The first step we need to perform is to create an `.env` in the root of the project with the same content that cand be 
found in `.env.dist`. If we perform changes on the environment values, this documentation may lose accuracy.

 ## Run ⚡️

In order to be able to launch the application you should have 
[Docker-Desktop](https://www.docker.com/products/docker-desktop) installed.

Once that is done you will have to execute the following command:
```bash
docker-compose build --no-cache prod
docker-compose up prod
#or (if want to keep using the terminal)
docker-compose up -d prod
``` 
This will execute the project on [localhost:3000](http://localhost:3000).

---

 ## Developing 🧑🏽‍💻
If you need to perform **Developing Tasks** on the project you will require `homebrew` or similar package browser.
Then you should execute the following command: 
```bash
brew install node
brew install npm
```


Once that is done you will have to execute the following command:
```bash
docker-compose build --no-cache dev
docker-compose up dev
#or (if want to keep using the terminal)
docker-compose up -d dev
``` 
This will execute: 
- the project on [localhost:3000](http://localhost:3000).
- the debugger on [localhost:9229](http://localhost:9229).
- the swagger on [localhost:3000/api-docs](http://localhost:3000/api-docs).

The next step will be to get the node_modules packages locally in order to be able to develop with the IDEs guidance &
to avoid all the missing modules messages. Just execute
* If new dependencies added to `package.json` access Docker container as explained
  [here](https://github.com/serban-marius/tinkering-with-pokeapi#docker-)  and run:
```bash
npm install {dependency-name-goes-here}
#example --> npm install cqrs
```
* If `package-lock.json` has all the dependencies we need, is okay to use from outside:
```bash
npm ci 
```
As the project will use the `node_modules`from the docker container to run.

During this last steps please take care of the content generated in the `package-lock.json`, **diferent versions of 
NPM can generate undesired changes in the`package-lock.json`** if we execute `npm install` from our machine 
instead of the docker container.

---

 ## Docker 📦
If want to access application bash console from docker:
* Make sure the container is up as explained in [run](https://github.com/serban-marius/tinkering-with-pokeapi#run-%EF%B8%8F) or 
the first steps of [developing](https://github.com/serban-marius/tinkering-with-pokeapi#developing-). Then run:
```bash
docker exec -it tinkering_with_pokeapi-dev bash
#or (depending on the environment you launched)
docker exec -it tinkering_with_pokeapi-prod bash
```

---

## Swagger 🕵🏽
The swagger can be found [here](http://localhost:3000/api-docs). (If the project is running) <br>
It will ask for user & password:
```
USER --> test
PASS --> pass
```
We can **change or look out for them** in the `.env` file.