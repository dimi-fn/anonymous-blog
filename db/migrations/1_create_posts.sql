DROP TABLE IF EXISTS posts;

CREATE TABLE posts(
    id serial PRIMARY KEY,
    title VARCHAR (200) NOT NULL,
    name VARCHAR (50) NOT NULL,
    post VARCHAR (1000) NOT NULL
);
