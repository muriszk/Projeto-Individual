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


CREATE TABLE acessoVolume (
    idAcesso INT PRIMARY KEY AUTO_INCREMENT,
    idVolume INT,
    idUsuario INT,
    momento DATETIME DEFAULT NOW(),
    FOREIGN KEY (idVolume) REFERENCES volume(idVolume),
    FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario)
);


SELECT * FROM usuario;

-- view para mostrar os volumes mais avaliados!!!!
CREATE VIEW volMainAvaliados AS
SELECT 
    v.idVolume,
    v.nomeVolume,
    v.numeroVolume,
    COUNT(a.idAvaliacao) AS totalAvaliacoes
FROM volume v
LEFT JOIN avaliacao a ON a.idVolume = v.idVolume
GROUP BY v.idVolume
ORDER BY totalAvaliacoes DESC;

-- mostrar
SELECT * FROM volMainAvaliados;


-- view para mostrar média de avaliações
CREATE VIEW mediaAvaliacoes AS
SELECT 
    v.idVolume,
    v.nomeVolume,
    v.numeroVolume,
    ROUND(AVG(a.notaAvaliacao), 2) AS mediaAvaliacao
FROM volume v
LEFT JOIN avaliacao a ON a.idVolume = v.idVolume
GROUP BY v.idVolume
ORDER BY mediaAvaliacao DESC;


-- mostra as média de avaliações 
SELECT * FROM mediaAvaliacoes;

-- view para mostrar Ranking geral (nota + quantidade)
CREATE VIEW rankingGeral AS 
SELECT 
    v.idVolume,
    v.nomeVolume,
    v.numeroVolume,
    COUNT(a.idAvaliacao) AS totalAvaliacoes,
    ROUND(AVG(a.notaAvaliacao), 2) AS mediaAvaliacao,
    (AVG(a.notaAvaliacao) * 0.7 + LOG(COUNT(a.idAvaliacao) + 1) * 0.3) AS rankingScore
FROM volume v
LEFT JOIN avaliacao a ON a.idVolume = v.idVolume
GROUP BY v.idVolume
ORDER BY rankingScore DESC;

SELECT * FROM rankingGeral;

-- mostra o engajamento dos usuários
CREATE VIEW engajamento AS
SELECT 
    u.nomeUsuario,
    COUNT(a.idAvaliacao) AS totalAvaliacoes
FROM usuario u
LEFT JOIN avaliacao a ON a.idUsuario = u.idUsuario
GROUP BY u.idUsuario
ORDER BY totalAvaliacoes DESC;

-- mostra engajamento 
-- SELECT * FROM engajamento;


ALTER TABLE avaliacao MODIFY textoAvaliacao VARCHAR(200);

