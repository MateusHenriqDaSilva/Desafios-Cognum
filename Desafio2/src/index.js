// Primeiro, estamos importando uma biblioteca chamada "express". Ela nos ajuda a criar um aplicativo web.
const express = require('express');

// Aqui, estamos criando um novo aplicativo web usando o "express".
const app = express()

// Estamos importando algo chamado "employeeController" de um arquivo chamado "employee" 
// em uma pasta chamada "controllers".
import employeeController from './controllers/employee'

// Aqui, estamos dizendo ao nosso aplicativo para usar o "employeeController" sempre que alguém acessar o endereço
// "/employee" no nosso aplicativo.
app.use('/employee', employeeController)

// Aqui, estamos dizendo ao nosso aplicativo para começar a escutar por pessoas tentando se 
// conectar a ele na internet. Estamos usando a porta 3000, que é como um número de casa na internet.
app.listen(3000, () => {
    // Quando o aplicativo começa a escutar, ele nos diz que está funcionando corretamente imprimindo esta mensagem.
    console.log(`aplicação rodando em http://localhost:${3000}`)
})
