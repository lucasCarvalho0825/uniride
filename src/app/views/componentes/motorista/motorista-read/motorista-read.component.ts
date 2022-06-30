import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Motorista } from 'src/app/modelo/motorista'
import { MotoristaService } from 'src/app/servicos/motorista.service';

@Component({
  selector: 'app-motorista-read',
  templateUrl: './motorista-read.component.html',
  styleUrls: ['./motorista-read.component.css']
})

export class MotoristaReadComponent implements AfterViewInit {
  motoristas: Motorista[] = [];

  displayedColumns: string[] = ['id', 'nome', 'curso', 'cpf', 'telefone', 'ações'];
  dataSoucer = new MatTableDataSource<Motorista>(this.motoristas);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(private service: MotoristaService, private router: Router) {}

  ngAfterViewInit() { this.findAll();}

  findAll():void{
      this.service.findAll().subscribe((resposta)=>{
        this.motoristas = resposta;
        this.dataSoucer = new MatTableDataSource<Motorista>(this.motoristas);
        this.dataSoucer.paginator = this.paginator;
      })
  }

criar():void{
 this.router.navigate(['motorista/criar']);
}

atualizar():void{
  this.router.navigate(['']);
 }

}
