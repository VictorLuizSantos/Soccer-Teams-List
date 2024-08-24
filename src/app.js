const express = require('express');
const app = express();

const port = 3001
const selecoes = {

}

app.get('/', (req, res) => {
    res.send('Pegando dados das selecoes.')
})

app. listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})

app.listen(port);