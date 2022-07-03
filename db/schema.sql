DROP DATABASE IF EXISTS food_solutions;
CREATE DATABASE food_solutions;

\c food_solutions;

DROP TABLE IF EXISTS vendors;
CREATE TABLE vendors (
  vendor_id INTEGER PRIMARY KEY,
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
  address VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  owner_id INTEGER NOT NULL,
  FOREIGN KEY (owner_id) REFERENCES vendors(vendor_id)
);

DROP TABLE IF EXISTS shipment;

CREATE TABLE shipment (
  shipment_id INTEGER PRIMARY KEY,
  date DATE,
  owner_id INTEGER NOT NULL,
  merchandise INTEGER NOT NULL,
  FOREIGN KEY (owner_id) REFERENCES vendors(vendor_id),
  FOREIGN KEY (merchandise) REFERENCES Merchandises(merchan_id)
);

