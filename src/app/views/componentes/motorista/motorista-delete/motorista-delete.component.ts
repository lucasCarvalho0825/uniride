import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carro } from 'src/app/modelo/carro';
import { Endereco } from 'src/app/modelo/endereco';
import { Motorista } from 'src/app/modelo/motorista';
import { MotoristaService } from 'src/app/servicos/motorista.service';

@Component({
  selector: 'app-motorista-delete',
  templateUrl: './motorista-delete.component.html',
  styleUrls: ['./motorista-delete.component.css']
})
export class MotoristaDeleteComponent implements OnInit {

  motorista_id = ''

  endereco: Endereco = {
    id:'',
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
    id:'',
    nome: '',
    curso: '',
    cpf: '',
    telefone: '',
    
    endereco: this.endereco,
    carro: this.carro
  }

  constructor(
    private service: MotoristaService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.motorista_id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  
  }

  deletar(): void {
    this.service.delete(this.motorista_id).subscribe(resposta => {
      this.router.navigate(['motorista/ler'])
      this.service.message('Motorista deletado com sucesso!')
    })
  }

  findById(): void {
    this.service.findById(this.motorista_id).subscribe(resposta => {
      this.motorista = resposta;
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
