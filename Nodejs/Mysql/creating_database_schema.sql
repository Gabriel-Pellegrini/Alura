create table livros 
(id  integer primary key auto_increment,
titulo varchar(100),
descricao text,
preco decimal(10,2));

---------------------To load some data to database ------------
insert into livros set titulo="Introdução a NodeJs",preco="25.90",descricao="Neste livro você terá uma introdução inicial com essa nova tecnologia.";
insert into livros set titulo="Introdução a ElasticSearch",preco="49.90",descricao="Neste livro você terá uma introdução inicial com essa nova tecnologia.";
insert into livros set titulo="Introdução a Jenkins",preco="35.50",descricao="Neste livro você terá uma introdução inicial com essa nova tecnologia.";
insert into livros set titulo="Introdução a Docker",preco="29.90",descricao="Neste livro você terá uma introdução inicial com essa nova tecnologia.";

-----------------Update --------------
update livros set titulo="Introdução a " where id=;