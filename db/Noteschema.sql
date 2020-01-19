DROP DATABASE IF EXISTS notetaker_db;
CREATE DATABASE notetaker_db;

USE notetaker_db;

CREATE TABLE notes (
  position INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  body VARCHAR(50) NOT NULL,
  PRIMARY KEY (position)
);


 INSERT INTO notes
  (title, body)
VALUES
  ("Make some notes,please", "Let me help organize your work"),
  ("Coding together", "Makes it easier");

SELECT * FROM notes;