import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  home():void{
    this.router.navigate(['']);
  }

  passageiro():void{
    this.router.navigate(['passageiro/ler']);
  }

  motorista():void{
    this.router.navigate(['motorista/ler']);
  }

  corrida():void{
    this.router.navigate(['corrida/ler']);
  }
}
