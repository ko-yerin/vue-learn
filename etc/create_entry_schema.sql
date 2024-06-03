CREATE database BattlePractice;

use BattlePractice;

CREATE TABLE new_session(
  idx INT auto_increment NOT NULL PRIMARY KEY,
  banner VARCHAR(500) NOT NULL,
  title VARCHAR(30) NOT NULL,
  topic VARCHAR(30) NOT NULL,
  period DATE NOT NULL
);

CREATE TABLE wallet(
  idx INT auto_increment NOT NULL PRIMARY KEY,
  wallet_address VARCHAR(42) NOT NULL
);

CREATE TABLE entry(
  idx INT auto_increment NOT NULL PRIMARY KEY,
  new_session_id INT NOT NULL,
  wallet_address_id INT NOT NULL,
  entry_like INT NOT NULL,
  cardName VARCHAR(20) NOT NULL,
  entryImg VARCHAR(500) NOT NULL,
  description VARCHAR(500) NOT NULL,
  FOREIGN KEY (new_session_id)  REFERENCES new_session(idx),
  FOREIGN KEY (wallet_address_id) REFERENCES wallet(idx)
);


