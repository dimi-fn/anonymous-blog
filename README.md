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
* When a user hits 'publish', the post is then stored in the database and displayed on the frontend. 
* The user can create another post by removing the hash extension from the url which defined the show route
* The user is able to access their post using the show route which is in the form of `/index.html#<id>`
* The user can view all other posts based on the post hash, as long as the id of the post exists in the database
    * in case the id is out of range and not included in the database, an alert message is displayed

---------

## Endpoints

| **Where** | **What** |
|---------------|---------------|
| `http://localhost:3000/posts` | retrieves all posts|
| `http://localhost:3000/posts/<id>`| retrieves post based on id| 

---------------

# Technologies

* Express
* HTML, CSS, JavaScript
* Docker container which installs the packages and dependencies, and postgreSQL for the database
