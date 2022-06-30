import { Endereco } from 'src/app/modelo/endereco'

export interface Passageiro {

    id?: any,
    nome:String,
    cpf:String,
    curso:String,
    telefone:String,

    endereco:Endereco,
}