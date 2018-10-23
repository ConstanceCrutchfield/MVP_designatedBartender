
CREATE DATABASE IF NOT EXISTS test;

USE test;

CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
  cocktailName varchar(50) NOT NULL,
  instructions varchar(200) NOT NULL,
  thumbnail varchar(200),
  rating int(10) DEFAULT 5,
  PRIMARY KEY (ID)
  UNIQUE (cocktailName)
);

CREATE TABLE ingreds (
  ingredName varchar(100) NOT NULL,
  ingredId int NOT NULL AUTO_INCREMENT,
  amount varchar(50),
  PRIMARY KEY (ingredId),  
  UNIQUE (ingredName)
);

CREATE TABLE item_ingred (
  itemId int NOT NULL, 
  ingredId INT NOT NULL, 
  PRIMARY KEY (itemId,ingredId)
);

INSERT INTO items 
  (cocktailName, thumbnail, instructions)
VALUES 
  ("Irish Spring", "https://www.thecocktaildb.com/images/media/drink/sot8v41504884783.jpg" ,"Pour all ingredients (except orange slice and cherry) into a collins glass over ice cubes. Garnish with the slice of orange, add the cherry on top, and serve.")

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.
 *  Change drop database to create if not exists*/

