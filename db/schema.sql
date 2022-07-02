DROP DATABASE IF EXISTS food_solutions;
CREATE DATABASE food_solutions;

\c food_solutions;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  user_id INTEGER PRIMARY KEY,
  name VARCHAR(55) NOT NULL,
  business_type VARCHAR(50) NOT NULL,
  address VARCHAR(150) NOT NULL,
  phone CHAR(12),
  profile VARCHAR CHECK(LENGTH(profile) <= 500),
  email varchar(255) UNIQUE NOT NULL,
  password varchar(255) NOT NULL,
  created_on DATE DEFAULT CURRENT_DATE
);

DROP TABLE IF EXISTS merchandises;

CREATE TABLE merchandises (
  merchan_id INTEGER PRIMARY KEY,
  category VARCHAR(55) NOT NULL,
  address REAL NOT NULL,
  image VARCHAR(255) NOT NULL,
  manager INTEGER NOT NULL,
  FOREIGN KEY (manager) REFERENCES users(user_id)
);

DROP TABLE IF EXISTS shipment;

CREATE TABLE shipment (
  shipment_id INTEGER PRIMARY KEY,
  date DATE,
  manager INTEGER NOT NULL,
  merchandise INTEGER NOT NULL,
  FOREIGN KEY (manager) REFERENCES users(user_id),
  FOREIGN KEY (merchandise) REFERENCES Merchandises(merchan_id)
);

