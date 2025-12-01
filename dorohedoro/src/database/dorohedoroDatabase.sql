CREATE DATABASE dorohedoro;
USE dorohedoro;



CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
emailUsuario VARCHAR(45),
senhaUsuario VARCHAR(45),
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
ORDER BY totalAvaliacoes DESC
LIMIT 10;

DROP VIEW volMainAvaliados;

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

-- view para mostrar Ranking geral (nota mais a quantidade)
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
ORDER BY rankingScore DESC 
LIMIT 10
;

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

INSERT INTO volume (idVolume, nomeVolume, numeroVolume, idUsuario) VALUES
(1, 'Dorohedoro Vol. 1', '1', NULL),
(2, 'Dorohedoro Vol. 2', '2', NULL),
(3, 'Dorohedoro Vol. 3', '3', NULL),
(4, 'Dorohedoro Vol. 4', '4', NULL),
(5, 'Dorohedoro Vol. 5', '5', NULL),
(6, 'Dorohedoro Vol. 6', '6', NULL),
(7, 'Dorohedoro Vol. 7', '7', NULL),
(8, 'Dorohedoro Vol. 8', '8', NULL),
(9, 'Dorohedoro Vol. 9', '9', NULL),
(10, 'Dorohedoro Vol. 10', '10', NULL),
(11, 'Dorohedoro Vol. 11', '11', NULL),
(12, 'Dorohedoro Vol. 12', '12', NULL),
(13, 'Dorohedoro Vol. 13', '13', NULL),
(14, 'Dorohedoro Vol. 14', '14', NULL),
(15, 'Dorohedoro Vol. 15', '15', NULL),
(16, 'Dorohedoro Vol. 16', '16', NULL),
(17, 'Dorohedoro Vol. 17', '17', NULL),
(18, 'Dorohedoro Vol. 18', '18', NULL),
(19, 'Dorohedoro Vol. 19', '19', NULL),
(20, 'Dorohedoro Vol. 20', '20', NULL),
(21, 'Dorohedoro Vol. 21', '21', NULL),
(22, 'Dorohedoro Vol. 22', '22', NULL),
(23, 'Dorohedoro Vol. 23', '23', NULL);

