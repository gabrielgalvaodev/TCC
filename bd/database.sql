-- Cria Banco de Dados
DROP DATABASE IF EXISTS tcc;
CREATE DATABASE IF NOT EXISTS tcc;



-- Defina o banco de dados utilizados
 USE tcc;
 
CREATE TABLE usuarios (
id INT primary KEY auto_increment,
email varchar(128) NOT NULL unique,
senha char(64) NOT NULL,
nome varchar(64) NOT NULL
);

select * from usuarios;

CREATE TABLE barragens (
id INT primary key auto_increment,
nome varchar(64) NOT NULL,
localizacao VARCHAR(64) NOT NULL

);

CREATE TABLE sistemas (
id INT primary KEY ,

nome varchar(64) NOT NULL
);

CREATE TABLE subsistemas (
id_sistema int not null,
id_subsistema INT not null,
nome varchar(64) NOT NULL,
constraint primary key (id_sistema, id_subsistema),
constraint foreign key (id_sistema) references sistemas (id)
);

CREATE TABLE parametros (
id_parametros INT not null,
id_sistema int not null,
id_subsistema INT not null,
falha varchar(64) NOT NULL,
efeito_final varchar(256) NOT NULL,
causa varchar(256) NOT NULL,
controle varchar(256) NOT NULL,
tipo_controle varchar(256) NOT NULL,
constraint primary key (id_sistema, id_subsistema, id_parametros),
constraint foreign key (id_sistema,id_subsistema) references subsistemas (id_sistema, id_subsistema) 
);

CREATE TABLE avaliacoes (
id_avaliacao int not null,
id_barragem int not null,
id_parametros INT not null,
id_sistema int not null,
id_subsistema INT not null,
data_hora TIMESTAMP NOT NULL,
si int not null,
oi int not null,
di int not null,
rpni int not null,
constraint primary key (id_barragem, id_sistema, id_subsistema, id_parametros, id_avaliacao),
constraint foreign key (id_barragem) references barragens (id),
constraint foreign key (id_sistema,id_subsistema, id_parametros) references parametros (id_sistema, id_subsistema, id_parametros) 
);



INSERT INTO sistemas (id, nome) VALUES
(1, 'corpo'),
(2, 'drenagem interna'),
(3, 'drenagem superficial'),
(4, 'fundacao'),
(5, 'reservatorio');
	
insert into subsistemas (id_sistema, id_subsistema, nome) values
(1, 1, 'corpo diquie'),
(1, 2, 'crista'),
(1, 3, 'nucleo'),
(1, 4, 'talude de montante'),
(2, 1, 'sistema de drenagem interna'),
(2, 2, 'filtro septo vertical/inclinado'),
(2, 3, 'tapete drenante'),
(2, 4, 'saida do dreno de fundo'),
(3, 1, 'sistema de drenagem superficial'),
(3, 2, 'vertedouro'),
(4, 1, 'fundacao'),
(5, 1, 'Reservatorio');
select * from parametros;
select * from sistemas;
select * from subsistemas;
INSERT INTO parametros (id_parametros, id_sistema, id_subsistema, falha, efeito_final, causa, controle, tipo_controle) VALUES
(1, 1, 1, 'capacidade insuficiente', 'instabilidade global', 'projeto/construcao inadequado', 'adequação do projeto', 'prevencao'),
(2, 1, 1, 'capacidade insuficiente', 'instabilidade global', 'projeto/construcao inadequado', 'inspecao visual instrumentacao', 'deteccao'),
(3, 1, 2, 'liquefacao', 'rompimento da crista', 'projeto/construcao inadequado', 'adequacao do projeto', 'prevencao'),
(4, 1, 2, 'liquefacao', 'rompimento da crista', 'projeto/construcao inadequado', 'inspecao visual', 'deteccao'),
(5, 1, 2, 'galgamento', 'rompimento da crista', 'pluviometria atipica', 'adequação do projeto', 'prevencao'),
(6, 1, 2, 'galgamento', 'rompimento da crista', 'projeto/construcao inadequada', 'inspecao visual', 'deteccao'),
(7, 1, 2, 'inacessibilidade', 'nao realizacao de inspecoes', 'projeto/construcao inadequada', 'adequacao do projeto', 'prevencao'),
(8, 1, 2, 'inacessibilidade', 'nao realizacao de inspecoes', 'projeto/construcao inadequada', 'inspecao visual', 'deteccao'),
(9, 1, 3, 'piping', 'liquefacao', 'saturacao do solo', 'adequacao do projeto', 'prevencao'),
(10, 1, 3, 'piping', 'liquefacao', 'saturacao do solo', 'inspecao visual instrumentacao', 'deteccao'),
(11, 1, 4, 'deformacao excessiva', 'erosao superficial reducao do fator de seguranca', 'deficiencia nas camadas de compactacao', 'adequacao do projeto', 'prevencao'),
(12, 1, 4, 'deformacao excessiva', 'erosao superficial reducao do fator de seguranca', 'deficiencia nas camadas de compactacao', 'inspecao visual instrumentacao', 'deteccao'),
(13, 2, 1, 'aumento das poropressoes no macico', 'instabilidade local', 'projeto/contrucao inadequada', 'ajuste de projeto/contrucao', 'prevencao'),
(14, 2, 1, 'aumento das poropressoes no macico', 'instabilidade local', 'projeto/contrucao inadequada', 'ajuste de projeto/contrucao', 'deteccao'),
(15, 2, 1, 'aumento das poropressoes no macico', 'instabilidade global', 'projeto/contrucao inadequada', 'inspecao visual', 'prevencao'),
(16, 2, 1, 'aumento das poropressoes no macico', 'instabilidade global', 'projeto/contrucao inadequada', 'instrumentacao', 'deteccao'),
(17, 2, 1, 'erosao interna piping', 'instabilidade local', 'projeto/contrucao inadequada', 'ajuste de projeto/contrucao', 'prevencao'),
(18, 2, 1, 'erosao interna piping', 'instabilidade local', 'projeto/contrucao inadequada', 'ajuste de projeto/contrucao', 'deteccao'),
(19, 2, 1, 'erosao interna piping', 'instabilidade global', 'projeto/contrucao inadequada', 'inspecao visual', 'prevencao'),
(20, 2, 1, 'erosao interna piping', 'instabilidade global', 'projeto/contrucao inadequada', 'instrumentacao', 'deteccao'),
(21, 2, 2, 'aumento das poropressoes no macico', 'instabilidade local', 'projeto/contrucao inadequada', 'ajuste de projeto/contrucao', 'prevencao'),
(22, 2, 2, 'aumento das poropressoes no macico', 'instabilidade local', 'projeto/contrucao inadequada', 'ajuste de projeto/contrucao', 'deteccao'),
(23, 2, 2, 'aumento das poropressoes no macico', 'instabilidade global', 'projeto/contrucao inadequada', 'inspecao visual', 'prevencao'),
(24, 2, 2, 'aumento das poropressoes no macico', 'instabilidade global', 'projeto/contrucao inadequada', 'instrumentacao', 'deteccao'),
(25, 2, 2, 'erosao interna piping', 'instabilidade local', 'projeto/contrucao inadequada', 'ajuste de projeto/contrucao', 'prevencao'),
(26, 2, 2, 'erosao interna piping', 'instabilidade local', 'projeto/contrucao inadequada', 'ajuste de projeto/contrucao', 'deteccao'),
(27, 2, 2, 'erosao interna piping', 'instabilidade global', 'projeto/contrucao inadequada', 'inspecao visual', 'prevencao'),
(28, 2, 2, 'erosao interna piping', 'instabilidade global', 'projeto/contrucao inadequada', 'instrumentacao', 'deteccao'),
(29, 2, 3, 'aumento das poropressoes no macico', 'instabilidade local', 'projeto/contrucao inadequada', 'ajuste de projeto/contrucao', 'prevencao'),
(30, 2, 3, 'aumento das poropressoes no macico', 'instabilidade local', 'projeto/contrucao inadequada', 'ajuste de projeto/contrucao', 'deteccao'),
(31, 2, 3, 'aumento das poropressoes no macico', 'instabilidade global', 'projeto/contrucao inadequada', 'inspecao visual', 'prevencao'),
(32, 2, 3, 'aumento das poropressoes no macico', 'instabilidade global', 'projeto/contrucao inadequada', 'instrumentacao', 'deteccao'),
(33, 2, 3, 'erosao interna piping', 'instabilidade local', 'projeto/contrucao inadequada', 'ajuste de projeto/contrucao', 'prevencao'),
(34, 2, 3, 'erosao interna piping', 'instabilidade local', 'projeto/contrucao inadequada', 'ajuste de projeto/contrucao', 'deteccao'),
(35, 2, 3, 'erosao interna piping', 'instabilidade global', 'projeto/contrucao inadequada', 'inspecao visual', 'prevencao'),
(36, 2, 3, 'erosao interna piping', 'instabilidade global', 'projeto/contrucao inadequada', 'instrumentacao', 'deteccao'),
(37, 2, 4, 'erosao interna piping', 'instabilidade local', 'projeto/contrucao inadequada', 'ajuste de projeto/contrucao', 'prevencao'),
(38, 2, 4, 'erosao interna piping', 'instabilidade local', 'projeto/contrucao inadequada', 'ajuste de projeto/contrucao', 'deteccao'),
(39, 3, 1, 'subdimensionamento ou obstrucao do sistema de vazao', 'erosao interna e externa', 'projeto/contrucao inadequado', 'adequacao do projeto', 'prevencao'),
(40, 3, 1, 'subdimensionamento ou obstrucao do sistema de vazao', 'erosao interna e externa', 'projeto/contrucao inadequado', 'inspecao visual intrumentacao', 'deteccao'),
(41, 3, 2, 'subdimensionamento ou obstrucao', 'instabilidade global', 'projeto/contrucao inadequada', 'adequacao do projeto', 'prevencao'),
(42, 3, 2, 'subdimensionamento ou obstrucao', 'instabilidade global', 'projeto/contrucao inadequada', 'inspecao visual intrumentacao', 'deteccao'),
(43, 4, 1, 'perda de estabilidade mecanica', 'instabilidade global', 'projeto/contrucao inadequada', 'adequacao do projeto', 'prevencao'),
(44, 4, 1, 'subpressoes elevadas', 'instabilidade global', 'projeto/contrucao inadequada', 'inspecao visual instrumentacao', 'deteccao'),
(45, 4, 1, 'subpressoes elevadas na fundacao', 'instabilidade global', 'projeto/contrucao inadequada', 'adequacao do projeto', 'prevencao'),
(46, 4, 1, 'subpressoes elevadas na fundacao', 'instabilidade global', 'projeto/contrucao inadequada', 'inspecao visual instrumentacao', 'deteccao'),
(47, 5, 1, 'capacidade insuficiente', 'instabilidade global', 'projeto/construcao inadequado', 'adequacao do projeto', 'prevencao'),
(48, 5, 1, 'nao amortecer a cheia', 'instabilidade global', 'projeto/construcao inadequado', 'inspecao visual instrumentacao', 'deteccao');



select * from  parametros, sistemas, subsistemas where sistemas.id = subsistemas.id_subsistema;

SELECT sistemas.nome, subsistemas.nome, parametros.*
FROM parametros, sistemas, subsistemas
WHERE parametros.id_sistema = sistemas.id AND parametros.id_subsistema = subsistemas.id_subsistema;
select * from barragens;

