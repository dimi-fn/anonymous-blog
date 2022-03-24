# Anonymous Blog

Made by [ImmanuelEgboche](https://github.com/ImmanuelEgboche) and [dimi-fn](https://github.com/dimi-fn)

# Installation & Usage

* Clone or download the repo
* Navigate to the root project directory and run `bash startContainer.sh` to run the docker which will install all packages and dependencies
    * alternatively run: `docker-compose up`
* To shut down the container: `bash stopContainer.sh` or `docker-compose down`
* To shut down container and also remove all potential new data insterted on the front-end run: `bash teardownContainer.sh`
    * alteratively run: `docker compose down --volumes --remove-orphans` and `docker volume prune --force`
* To enter the postgreSQL database:
    * first have the docker running based on the commands above
    * open another terminal and run `docker exec -it anonymous-blog_db_1 psql -U dimi_imman anonymous`

-------

# Description

This project is about constructing a platform where users can submit a post anonymously
* When a user hits 'publish', the post is then stored in the database
(* The user is able to access their post using the ....)


---------

## Endpoints

| **Where** | **What** |
|---------------|---------------|
| `http://localhost:3000/posts` | retrieves all posts|
| `http://localhost:3000/posts/<id>`| retrieves post based on id| 
