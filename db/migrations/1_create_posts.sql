DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title varchar (100) NOT NULL,
    name varchar(50) NOT NULL,
    post varchar(300) NOT NULL
);
