// Importa o módulo 'db' responsável pela conexão com o banco de dados.
import db from '../model/db';

// Importa o modelo 'Employee' que representa os funcionários no banco de dados.
import Employee from "../model/employee";

// Função assíncrona para listar todos os funcionários.
export const listEmployee = async () => {
    try {
        // Estabelece uma conexão com o banco de dados.
        await db();

        // Encontra todos os registros da coleção 'Employee' no banco de dados.
        const employee = await Employee.find();

        // Retorna a lista de funcionários encontrados.
        return employee;
    } catch (error) {
        // Em caso de erro, lança uma exceção.
        throw error;
    }
}

// Função assíncrona para criar um novo funcionário.
export const createEmployee = async (employee) => {
    await db(); // Estabelece uma conexão com o banco de dados.

    // Cria um novo funcionário no banco de dados com os dados fornecidos.
    const createdEmployee = await Employee.create(employee);

    // Retorna o funcionário recém-criado.
    return createdEmployee;
}

// Função assíncrona para atualizar as informações de um funcionário existente.
export const updateEmployee = async (id, newBody) => {
    await db(); // Estabelece uma conexão com o banco de dados.

    // Procura e atualiza o funcionário com o ID fornecido usando os novos dados.
    await Employee.findByIdAndUpdate(id, newBody);
}

// Função assíncrona para excluir um funcionário existente.
export const deleteEmployee = async (id) => {
    await db(); // Estabelece uma conexão com o banco de dados.

    // Procura e exclui o funcionário com o ID fornecido.
    await Employee.findByIdAndDelete(id);
}
