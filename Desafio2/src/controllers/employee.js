// Primeiro, estamos importando uma biblioteca chamada "express". Ela nos ajuda a criar um aplicativo web.
import Router from 'express'

// Estamos importando algumas funções que nos ajudam a trabalhar com funcionários.
import { listEmployee, createEmployee, deleteEmployee, updateEmployee } from '../services/employee'

// Aqui, estamos criando um novo roteador. Um roteador é como um mapa que nos diz 
// para onde ir quando alguém visita diferentes partes do nosso aplicativo.
const router = Router()

// Aqui, estamos dizendo ao roteador o que fazer quando alguém visita a página inicial ("/") do nosso aplicativo.
router.get('/', async (req, res) => {
    // Primeiro, obtemos uma lista de todos os funcionários.
    const employeeList = await listEmployee()

    // Em seguida, enviamos essa lista de volta para quem pediu.
    res.send(employeeList)
})

// Aqui, estamos dizendo ao roteador o que fazer quando alguém tenta criar um novo funcionário.
router.post('/', (req, res) => {
    try {
        // Tentamos criar um novo funcionário com as informações que nos foram dadas.
        const employee = createEmployee(req.body)

        // Se tudo correr bem, enviamos uma resposta dizendo que o funcionário foi criado com sucesso.
        res.status(201).send(employee)
    } catch (err) {
        // Se algo der errado, enviamos uma mensagem de erro.
        res.status(400).send(err)
    }
})

// Aqui, estamos dizendo ao roteador o que fazer quando alguém tenta atualizar as informações de um funcionário existente.
router.put('/:employeeId', async (req, res) => {
    // Atualizamos o funcionário com as novas informações que nos foram dadas.
    await updateEmployee(req.params.employeeId, req.body)

    // Em seguida, enviamos uma resposta para dizer que tudo correu bem.
    res.send()
})

// Por último, estamos dizendo ao roteador o que fazer quando alguém tenta excluir um funcionário existente.
router.delete('/:employeeId', async (req, res) => {
    // Excluímos o funcionário.
    await deleteEmployee(req.params.employeeId)

    // Em seguida, enviamos uma resposta para dizer que tudo correu bem.
    res.send()
})

// Por último, estamos tornando o roteador disponível para outros códigos usarem. Isso é como compartilhar um brinquedo com seus amigos!
export default router
