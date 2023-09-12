// Primeiro, estamos importando uma biblioteca chamada "mongoose". Ela nos ajuda a trabalhar com um banco de dados chamado MongoDB.
import mongoose from 'mongoose'

// Aqui, estamos criando um novo "esquema" para nossos funcionários. Um esquema é como um modelo ou um 
// plano para como queremos que nossos dados se pareçam.
const EmployeeSchema = new mongoose.Schema({
  // Cada funcionário terá um "id" que é um número. Isso é obrigatório, o que significa que cada funcionário deve ter um.
  id: { type: Number, required: true },

  // Cada funcionário também terá um "nome", que é uma string (um tipo de dado que contém texto). Isso também é obrigatório.
  name: { type: String, required: true },

  // Por último, cada funcionário terá um "cargo", que também é uma string. Isso também é obrigatório.
  role: { type: String, required: true },
})

// Aqui, estamos dizendo ao mongoose para criar um novo modelo chamado "Employee" 
// usando o esquema que acabamos de criar. Se já existir um modelo chamado "Employee", usaremos esse modelo existente.
export default mongoose.models.Employee || mongoose.model('Employee', EmployeeSchema)
