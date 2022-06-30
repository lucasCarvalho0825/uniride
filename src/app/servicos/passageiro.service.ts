import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Passageiro } from '../modelo/passageiro';

@Injectable({
  providedIn: 'root'
})
export class PassageiroService {

  baseUrl: String = environment.baseUrl;
  constructor(private http: HttpClient, private snack: MatSnackBar) { }

    findAll():Observable<Passageiro[]>{
      const url = this.baseUrl + "aluno_passageiro/"
      return this.http.get<Passageiro[]>(url);
    }
  
    findById(id: any):Observable<Passageiro>{
      const url = this.baseUrl +"aluno_passageiro/" + `${id}`;
      return this.http.get<Passageiro>(url);
    }
  
    create(corrida: Passageiro):Observable<Passageiro>{
      const url = this.baseUrl + 'aluno_passageiro/'
      return this.http.post<Passageiro>(url, corrida)
    }
  
    update(corrida: Passageiro):Observable<Passageiro> {
      const url = `${this.baseUrl}aluno_passageiro/${corrida.id}`;
      return this.http.put<Passageiro>(url, corrida);
    }
  
    delete(id : any):Observable<void> {
      const url = `${this.baseUrl}aluno_passageiro/${id}`;
      return this.http.delete<void>(url);
    }
  
    message(msg: String): void {
      this.snack.open(`${msg}`, 'OK', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 4000
      })
    }
  }
  
