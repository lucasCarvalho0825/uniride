import { Endereco } from 'src/app/modelo/endereco'
import { Carro } from './carro';



export interface Motorista {

    id?: any,
    nome:String,
    cpf:String,
    curso:String,
    telefone:String,

    endereco:Endereco,
    carro:Carro,
}