DROP DATABASE IF EXISTS curriculum_db;
CREATE DATABASE curriculum_db;
USE curriculum_db;

CREATE TABLE users(
  userid VARCHAR(50) NOT NULL,
  name VARCHAR(50),
  password VARCHAR(10),
  PRIMARY KEY (userid)
);

CREATE TABLE cource(
  courceid INTEGER(11) AUTO_INCREMENT NOT NULL,
  name VARCHAR(50),
  description VARCHAR(150),
  PRIMARY KEY (courceid)
);


CREATE TABLE users_to_cource(
  signups INTEGER(11) AUTO_INCREMENT NOT NULL,
  userid VARCHAR(50),
  courceid INTEGER(11),
  inprogress BOOLEAN DEFAULT false,
  PRIMARY KEY (signups),
  CONSTRAINT fk_cource FOREIGN KEY (courceid) REFERENCES cource(courceid),
  CONSTRAINT fk_users FOREIGN KEY (userid) REFERENCES users(userid)
);



CREATE TABLE steps(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  name VARCHAR(50),
  courceid INTEGER(11),
  PRIMARY KEY (id),
CONSTRAINT fk_id_cource FOREIGN KEY (courceid) REFERENCES cource(courceid)
);

