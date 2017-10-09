### Schema

CREATE IF NOT EXISTS DATABASE songs_db;
USE songs_db;

CREATE TABLE songs
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	listened BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
