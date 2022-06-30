import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-corrida-create',
  templateUrl: './corrida-create.component.html',
  styleUrls: ['./corrida-create.component.css']
})
export class CorridaCreateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


}
