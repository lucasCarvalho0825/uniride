import { Motorista } from "./motorista";
import { Passageiro } from "./passageiro";

export interface Corrida{

    id?:any,
    passageiro:Passageiro,
    motorista:Motorista,
    inicio:any,
    fim:any,
    preco:any,
    duracao:any,
    distancia:any,
    
}