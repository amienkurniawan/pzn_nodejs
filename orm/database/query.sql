use belajar_nodejs_database;

create table sample(
  id varchar(100) not null,
  name varchar(100) not null,
  primary key (id)
);

create table customers(
  id varchar(100) not null,
  name varchar(100) not null,
  email varchar(100) not null,
  phone varchar(100) not null,

  primary key (id),
  constraint customers_email_unique unique (email),
  constraint customers_phone_unique unique (phone)
)

SELECT * FROM sample;

SELECT * FROM customers;

DESC TABLE customers;

ALTER TABLE sample MODIFY id INT(10) AUTO_INCREMENT PRIMARY KEY;