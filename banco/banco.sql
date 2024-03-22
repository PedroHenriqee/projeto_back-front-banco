CREATE DATABASE IF NOT EXISTS CadastroUsuarios;

USE CadastroUsuarios;

CREATE TABLE Usuarios (
    UsuarioID INT PRIMARY KEY AUTO_INCREMENT,
    Email VARCHAR(255) NOT NULL UNIQUE,
    SenhaHash VARCHAR(255) NOT NULL
);

INSERT INTO Usuarios (Email, SenhaHash) VALUES ('usuario@example.com', 'hash-da-senha-aqui');