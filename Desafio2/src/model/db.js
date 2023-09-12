// Primeiro, estamos importando uma biblioteca chamada "mongoose". Ela nos ajuda a trabalhar 
// com um banco de dados chamado MongoDB.
import mongoose from "mongoose"

// Aqui temos um endereço especial (URI) que nos conecta ao nosso banco de dados MongoDB na internet.
const URI = 'mongodb+srv://admin:sdwez6bp@cluster0.4csc6zd.mongodb.net/?retryWrites=true&w=majority'

// Estas são algumas configurações que o mongoose precisa para se conectar corretamente ao banco de dados.
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// Esta é uma função chamada "db". Ela verifica se já estamos conectados ao banco de dados. 
// Se não estivermos, ela nos conecta usando o endereço e as configurações que definimos acima.
const db = async () => {
    if (!global.mongoose) {
        mongoose.set('strictQuery', false)
        global.mongoose = await mongoose.connect(URI, mongooseOptions);
    }
}

// Por último, estamos tornando a função "db" disponível para outros códigos usarem. 
// Isso é como compartilhar um brinquedo com seus amigos!
export default db