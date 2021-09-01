create table users(
 id serial primary key,
 name varchar(50) not null,
 email varchar(50) not null, 
 tokenID varchar(255) not null unique
)