const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');

const { Schema } = mongoose;

const UserSchema = new Schema ({
    _id: {
        type: String, default: uuidv4()
    },
    nome: string,
    dataNasc: Date,
    docTipo: String,
    docNumero: String,
    email: String,
    status: Number,
    senha: String, 
    endereco: {
        rua: String,
        complemento: String,
        pais: String,
        estado: String,
        cidade: String,
        cep: String,
        numero: String,
    }
    
}, {timestamps: {} });

module.exports = new mongoose.model('User', UserSchema);