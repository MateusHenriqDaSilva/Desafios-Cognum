const express = require('express');
const app = express();

// Endpoint GET /hello
app.get('/hello', (request, response) => {
    // Use res.send para enviar uma resposta ao cliente
    response.send({ message: 'Hello, Cognum!' });
});

// Inicie o servidor na porta especificada
app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:${3000}`);
});
