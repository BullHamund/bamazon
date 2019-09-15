CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT(20) NOT NULL,
    PRIMARY KEY (item_id)
    );
    
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('Heart Attack and Vine', 'Vinyl', 24.99, 10),
		('Hi, How Are You', 'Cassettes', 399.25, 2),
		('Millers Crossing', 'DVD', 12.99, 150),
		('Atom Heart Mother', 'CD', 9.99, 400),
		('Time Bandits', 'Laser Disk', 109.00, 25),
		('Pet Sounds', 'Vinyl', 22.86, 500),
		('Avengers: End Game', 'DVD', 19.49, 3000),
		('The White Album', 'Vinyl', 41.50, 20),
		('Friday', 'DVD', 11.75, 420),
		('Friday the 13th', 'VHS', 6.66, 666);


select * from products;
 
