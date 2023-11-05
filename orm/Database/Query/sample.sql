use belajar_nodejs_database;

create table sample(
  id varchar(100) not null,
  name varchar(100) not null,
  primary key (id)
);

select * from sample;

DESC TABLE sample;

ALTER TABLE sample MODIFY id INT(10) AUTO_INCREMENT PRIMARY KEY;