import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Endereco } from 'src/app/modelo/endereco';
import { Passageiro } from 'src/app/modelo/passageiro';
import { PassageiroService } from 'src/app/servicos/passageiro.service';

@Component({
  selector: 'app-passageiro-update',
  templateUrl: './passageiro-update.component.html',
  styleUrls: ['./passageiro-update.component.css']
})
export class PassageiroUpdateComponent implements OnInit {

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

  atualizar(): void {
    this.service.update(this.passageiro).subscribe((resposta) => {
      this.router.navigate(['passageiro/ler']);
      this.service.message('Motorista atualizado com sucesso!');
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
