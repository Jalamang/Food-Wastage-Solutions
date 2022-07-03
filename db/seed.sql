\c food_solutions;

INSERT INTO vendors(vendor_id, name, business_type, address, phone, profile, email, password, created_on )
VALUES
(01, 'Jalamang Janka', 'Vegetable Gardener', 'Pasaal Island', '646-600-0104','Assisted owner and lead gardeners in the maintenance of over 25', 'jalamangjanka@gmail.com', '123456', NOW());
INSERT INTO vendors(vendor_id, name, business_type, address, phone, profile, email, password, created_on )
VALUES
(02, 'Bakoto Fatty', 'Vegetable Gardener', 'Pasaal Island', '646-600-0104','Assisted owner and lead gardeners in the maintenance of over 25', 'bakotofatty@gmail.com', '123456', NOW());
INSERT INTO vendors(vendor_id, name, business_type, address, phone, profile, email, password, created_on )
VALUES
(03, 'Jabou Janka', 'Vegetable Gardener', 'Pasaal Island', '646-600-0104','Assisted owner and lead gardeners in the maintenance of over 25', 'jaboujanka@gmail.com', '123456', NOW());
INSERT INTO vendors(vendor_id, name, business_type, address, phone, profile, email, password, created_on )
VALUES
(04, 'Ba-Musa Janka', 'Vegetable Gardener', 'Pasaal Island', '646-600-0104','Assisted owner and lead gardeners in the maintenance of over 25', 'ba-musajanka@gmail.com', '123456', NOW());
INSERT INTO vendors(vendor_id, name, business_type, address, phone, profile, email, password, created_on )
VALUES
(05, 'Saibou Camara', 'Vegetable Gardener', 'Pasaal Island', '646-600-0104','Assisted owner and lead gardeners in the maintenance of over 25', 'saiboucamara@gmail.com', '123456', NOW());


INSERT INTO merchandises(merchan_id, category, address, image, owner_id)
VALUES
(01, 'vegetables', 'Pasaal Island', 'https://images.pexels.com/photos/4207910/pexels-photo-4207910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 01);
INSERT INTO merchandises(merchan_id, category, address, image, owner_id)
VALUES
(02, 'fish', 'Pasaal Island', 'https://images.pexels.com/photos/2949140/pexels-photo-2949140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 03);
INSERT INTO merchandises(merchan_id, category, address, image, owner_id)
VALUES
(03, 'meat', 'Pasaal Island', 'https://images.pexels.com/photos/9680221/pexels-photo-9680221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 02);
INSERT INTO merchandises(merchan_id, category, address, image, owner_id)
VALUES
(04, 'vegetables', 'Pasaal Island', 'https://images.pexels.com/photos/4207910/pexels-photo-4207910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 02);
INSERT INTO merchandises(merchan_id, category, address, image, owner_id)
VALUES
(05, 'vegetables', 'Pasaal Island', 'https://images.pexels.com/photos/5945572/pexels-photo-5945572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 04);