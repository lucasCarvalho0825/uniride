import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Corrida } from 'src/app/modelo/corrida';
import { CorridaService } from 'src/app/servicos/corrida.service';

@Component({
  selector: 'app-corrida-read',
  templateUrl: './corrida-read.component.html',
  styleUrls: ['./corrida-read.component.css']
})
export class CorridaReadComponent implements AfterViewInit {

  corridas: Corrida[] = [];
  
  displayedColumns: string[] = ['passageiro', 'motorista', 'inicio', 'fim', 'preco', 'duracao', 'distancia'];
  dataSoucer = new MatTableDataSource<Corrida>(this.corridas);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: CorridaService, private router: Router) { }

  ngAfterViewInit(): void {this.findAll();}

  findAll():void{
    this.service.findAll().subscribe((resposta)=>{
      this.corridas = resposta;
      this.dataSoucer = new MatTableDataSource<Corrida>(this.corridas);
      this.dataSoucer.paginator = this.paginator;
    })
}

  criar():void{
    this.router.navigate(['corrida/criar']);
  }

}
