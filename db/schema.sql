DROP DATABASE IF EXISTS food_solutions;
CREATE DATABASE food_solutions;

\c food_solutions;

DROP TABLE IF EXISTS vendors;
-- CREATE SEQUENCE serial START 101;
CREATE TABLE vendors (
  vendor_id SERIAL PRIMARY KEY,
  name VARCHAR(55) NOT NULL,
  business_type VARCHAR(50) NOT NULL,
  address VARCHAR(150) NOT NULL,
  phone CHAR(12),
  photo VARCHAR(255),
  profile VARCHAR CHECK(LENGTH(profile) <= 500),
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_on DATE DEFAULT CURRENT_DATE

);
ALTER SEQUENCE vendors_vendor_id_seq RESTART WITH 90100;


DROP TABLE IF EXISTS merchandises;

CREATE TABLE merchandises (
  merchan_id SERIAL PRIMARY KEY,
  category VARCHAR(55) NOT NULL,
  address VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  owner_id INTEGER NOT NULL,  
  FOREIGN KEY (owner_id) REFERENCES vendors(vendor_id)
);

ALTER SEQUENCE merchandises_merchan_id_seq RESTART WITH 70100;
concat("VEN", merchandises_merchan_id_seq)

CREATE TABLE REVIEWS (
  review_id SERIAL PRIMARY key,
  user_review INT NOT NULL,
  merchan_id INT NOT NULL,
  owner_id INT NOT NULL,
  FOREIGN KEY (merchan_id) REFERENCES merchandises(merchan_id),
  FOREIGN KEY (owner_id) REFERENCES vendors(vendor_id)
)


DROP TABLE IF EXISTS shipment;

CREATE TABLE shipment (
  shipment_id SERIAL PRIMARY KEY,
  date DATE,
  owner_id INTEGER NOT NULL,
  merchandise INTEGER NOT NULL,
  FOREIGN KEY (owner_id) REFERENCES vendors(vendor_id),
  FOREIGN KEY (merchandise) REFERENCES Merchandises(merchan_id)
);

