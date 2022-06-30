import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Endereco } from 'src/app/modelo/endereco';
import { Passageiro } from 'src/app/modelo/passageiro';
import { PassageiroService } from 'src/app/servicos/passageiro.service';

@Component({
  selector: 'app-passageiro-delete',
  templateUrl: './passageiro-delete.component.html',
  styleUrls: ['./passageiro-delete.component.css']
})
export class PassageiroDeleteComponent implements OnInit {

  passageiro_id = ''

  endereco: Endereco = {
    id:'',
    rua: '',
    bairro: '',
    cidade: ''
  }

  passageiro: Passageiro = {
    id:'',
    nome: '',
    curso: '',
    cpf: '',
    telefone: '',
    
    endereco: this.endereco
  }

  constructor(
    private service: PassageiroService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.passageiro_id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  
  }

  deletar(): void {
    this.service.delete(this.passageiro_id).subscribe(resposta => {
      this.router.navigate(['passageiro/ler'])
      this.service.message('Passageiro deletado com sucesso!')
    })
  }

  findById(): void {
    this.service.findById(this.passageiro_id).subscribe(resposta => {
      this.passageiro = resposta;
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
