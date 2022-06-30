import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from 'src/app/modelo/carro';
import { Endereco } from 'src/app/modelo/endereco';
import { Motorista } from 'src/app/modelo/motorista';
import { MotoristaService } from 'src/app/servicos/motorista.service';

@Component({
  selector: 'app-motorista-create',
  templateUrl: './motorista-create.component.html',
  styleUrls: ['./motorista-create.component.css']
})
export class MotoristaCreateComponent implements OnInit {

  endereco: Endereco = {
    rua: '',
    bairro: '',
    cidade: ''
  }

  carro: Carro = {
    marca: '',
    modelo: '',
    placa: '',
    cor: '',
    ano: '',
  }

  motorista: Motorista = {
    nome: '',
    curso: '',
    cpf: '',
    telefone: '',
    
    endereco: this.endereco,
    carro: this.carro
  }

  constructor(
    private service : MotoristaService,
    private router: Router) { }

  ngOnInit(): void {
  }

   // criando um novo usuario motorista
   criar():void{

    this.service.create(this.motorista).subscribe((resposta) =>{
    this.router.navigate(['motorista/ler'])
    this.service.message("Motorista criado com sucesso")
  })   
}

cancelar():void{
  this.motorista.nome = '',
  this.motorista.curso = '',
  this.motorista.cpf = '',
  this.motorista.telefone = '',
  
  this.endereco.rua ='',
  this.endereco.bairro = '',
  this.endereco.cidade = '',

  this.carro.marca = '',
  this.carro.placa = '',
  this.carro.modelo = '',
  this.carro.cor = '',
  this.carro.ano = '',

  this.router.navigate(['motorista/ler'])
}

}
