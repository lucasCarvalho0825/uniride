import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/modelo/endereco';
import { Passageiro } from 'src/app/modelo/passageiro';
import { PassageiroService } from 'src/app/servicos/passageiro.service';

@Component({
  selector: 'app-passageiro-create',
  templateUrl: './passageiro-create.component.html',
  styleUrls: ['./passageiro-create.component.css']
})
export class PassageiroCreateComponent implements OnInit {

 
  endereco: Endereco = {
    rua: '',
    bairro: '',
    cidade: ''
  }

  passageiro: Passageiro = {
    nome: '',
    curso: '',
    cpf: '',
    telefone: '',
    
    endereco: this.endereco,
  }

  constructor(private service : PassageiroService, private router: Router){}

  ngOnInit(): void {
  }

  // criando um novo usuario
  criar():void{

      this.service.create(this.passageiro).subscribe((resposta) =>{
      this.router.navigate(['passageiro/ler'])
      this.service.message("criado com sucesso")
    })   
  }

  cancelar():void{
    this.passageiro.nome = '',
    this.passageiro.curso = '',
    this.passageiro.cpf = '',
    this.passageiro.telefone = '',
    

    this.endereco.rua ='',
    this.endereco.bairro = '',
    this.endereco.cidade = '',

    this.router.navigate(['passageiro/ler'])
  }

}
