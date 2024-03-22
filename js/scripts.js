function clique() {
    if (isenha.type == 'password') {
        isenha.type = 'text'
    } else {
        isenha.type = 'password'
    }
    if (isenha.type == 'password') {
        olho.src = "../imagens/visivel.png"
    } else {
        olho.src = "../imagens/olho.png"
    }
}

const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
  host     : 'seu_host',
  user     : 'seu_usuario',
  password : 'sua_senha',
  database : 'CadastroUsuarios'
});

connection.connect();

app.use(express.json()); // Para parsing de JSON no corpo das requisições

// Rota de API para registro de usuários
app.post('/register', (req, res) => {
  const { email, senha } = req.body;
  // Aqui você aplicaria a hash na senha antes de salvar
  const senhaHash = senha; // Substitua isso pela função de hash real

  const query = 'INSERT INTO Usuarios (Email, SenhaHash) VALUES (?, ?)';
  
  connection.query(query, [email, senhaHash], (error, results) => {
    if (error) throw error;
    res.send({ id: results.insertId, email });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

