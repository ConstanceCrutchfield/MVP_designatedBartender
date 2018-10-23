DROP DATABASE IF EXISTS test;

CREATE DATABASE test;

USE test;

CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
  cocktailName varchar(50) NOT NULL,
  instructions varchar(200) NOT NULL,
  ingredients varchar(100) NOT NULL,
  thumbnail varchar(100) DEFAULT 'add imageurl for missing image',
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
