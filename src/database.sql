CREATE DATABASE Netw_tiempos_db;

use Netw_tiempos_db;

CREATE TABLE consultores(
id VARCHAR(30) NOT NULL PRIMARY KEY,
nombre VARCHAR (200),
email VARCHAR (200),
fecha_r TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
rol TINYINT DEFAULT 1,
estado BIT 
);


CREATE TABLE lineas_desarrollo(
id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR (100)
);

CREATE TABLE lineas_consultor(
id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
id_consultor VARCHAR(30),
id_linea INT(11),
 FOREIGN KEY(id_consultor) REFERENCES consultores (id), 
 FOREIGN KEY(id_linea) REFERENCES lineas_desarrollo (id)
);

CREATE TABLE clientes(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR (100),
    telefono VARCHAR (50),
    fecha_r TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE registros(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_consultor VARCHAR(30),
    id_cliente INT(11),
    fecha_actividad date,
    desc_act_sura text (500),
    actividades_sura VARCHAR (70),
    descripcion_act text (500),
    pais_sura VARCHAR (50),
    tiempo float,
    causa VARCHAR (70),
    funcional VARCHAR(100),
    objeto_ricef VARCHAR(100),
    req_pry_inc VARCHAR(50),
    ricef VARCHAR(10),
    tipo_actividad VARCHAR(50),
    tipo_construccion VARCHAR(50),
    Ubicacion_asignacion VARCHAR(50),
    fecha_r TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(id_consultor) REFERENCES consultores (id), 
    FOREIGN KEY(id_cliente) REFERENCES clientes (id), 

);




