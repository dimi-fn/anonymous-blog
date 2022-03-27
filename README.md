# Anonymous Blog

Made by [ImmanuelEgboche](https://github.com/ImmanuelEgboche) and [dimi-fn](https://github.com/dimi-fn)

# Project Decription

This project is about building a platform where users can submit a post anonymously (similar to platforms like [telegra](https://telegra.ph/))
* When a user hits 'publish', the post is then stored in the database and displayed on the frontend. 
* The user can create another post by removing the hash extension from the url which defined the show route
* The user is able to access their post using the show route which is in the form of `/index.html#<id>`
* The user can view all other posts based on the post hash, as long as the id of the post exists in the database
    * in case the id is out of range and not included in the database, an alert message is displayed

# Installation & Usage

## Server

### Endpoints

| **Where** | **What** |
|---------------|---------------|
| `http://localhost:3000/posts` | retrieves all posts|
| `http://localhost:3000/posts/<id>`| retrieves post based on id| 

### Run the Server
* Use the project files by cloning (with `git clone`) or by downloading the repo files
* Open a terminal, navigate to the root project directory and run `bash _scripts/startDevContainer.sh` to:
    * run the docker container which will install all npm packages and dependencies, will seed the database, and will run the server using nodemon
    * start the api and database services that will run and seed the postgreSQL database
    * serve the server on port 3000 (http://localhost:3000)

### Stop the server

* In order to just stop the server:
    * In the same terminal type `ctrl+c`, or
    * Open another terminal, navigate to the root project directory and run `bash _scripts/stopContainer.sh`

* In order to both stop the server and teardown by removing all running services in containers as well as by removing volumes, run `bash _scripts/tearDown.sh`

## Database

To enter the postgreSQL database:
* first have the docker running based on the commands of the 'server' section
* open another terminal, navigate to the root project, and run:
    
        docker exec -it anonymous_blog_dev_db psql -U dimi_imman anonymous

* You can execute any sql query based on postgreSQL    

## Client

* Once server is running, open index.html file on browser by:
    * Navigating to http://localhost:8080 through the browser search bar, or
    * Using live server with VS Code: right click anywhere on the index.html and click on '*Open with Live Server*' (you might need to have installed the respective live server VS Code extention)    

---------------

# Technologies

* GitHub
* Express
* HTML, CSS, JavaScript
* Docker container
* PostgreSQL

# License

* [License](https://github.com/dimi-fn/anonymous-blog/blob/main/LICENSE)
