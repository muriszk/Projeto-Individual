CREATE DATABASE dorohedoro;
USE dorohedoro;

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nomeUsuario VARCHAR(45),
emailUsuario VARCHAR(45),
senhaUsuario VARCHAR(45),
recuperarSenhaUsuario VARCHAR(45)
);

CREATE TABLE volume (
idVolume INT PRIMARY KEY AUTO_INCREMENT,
nomeVolume VARCHAR(45),
numeroVolume VARCHAR(45),
idUsuario INT,
FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE avaliacao (
idAvaliacao INT PRIMARY KEY AUTO_INCREMENT,
idVolume INT,
idUsuario INT,
notaAvaliacao INT,
textoAvaliacao VARCHAR(45),
FOREIGN KEY (idVolume) REFERENCES volume(idVolume),
FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario)
);

SELECT * FROM usuario;