import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Passageiro } from 'src/app/modelo/passageiro';
import { PassageiroService } from 'src/app/servicos/passageiro.service';

@Component({
  selector: 'app-passageiro-read',
  templateUrl: './passageiro-read.component.html',
  styleUrls: ['./passageiro-read.component.css']
})
export class PassageiroReadComponent implements AfterViewInit {
  passageiros: Passageiro[] = [];

  displayedColumns: string[] = ['id', 'nome', 'curso', 'cpf', 'telefone', 'ações'];
  dataSoucer = new MatTableDataSource<Passageiro>(this.passageiros);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(private service: PassageiroService, private router: Router) {}

  ngAfterViewInit() { this.findAll();}

  findAll():void{
    this.service.findAll().subscribe((resposta)=>{
      this.passageiros = resposta;
      this.dataSoucer = new MatTableDataSource<Passageiro>(this.passageiros);
      this.dataSoucer.paginator = this.paginator;
    })
  }

  criar():void{
  this.router.navigate(['passageiro/criar']);
  }

}
