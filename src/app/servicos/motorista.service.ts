import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Motorista } from '../modelo/motorista';

@Injectable({
  providedIn: 'root'
})
export class MotoristaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  
  findAll():Observable<Motorista[]>{
    const url = this.baseUrl + "aluno_motorista/"
    return this.http.get<Motorista[]>(url);
  }

  findById(id: any):Observable<Motorista>{
    const url = this.baseUrl +"aluno_motorista/" + `${id}`;
    return this.http.get<Motorista>(url);
  }

  create(corrida: Motorista):Observable<Motorista>{
    const url = this.baseUrl + 'aluno_motorista/'
    return this.http.post<Motorista>(url, corrida)
  }

  update(corrida: Motorista):Observable<Motorista> {
    const url = `${this.baseUrl}aluno_motorista/${corrida.id}`;
    return this.http.put<Motorista>(url, corrida);
  }

  delete(id : any):Observable<void> {
    const url = `${this.baseUrl}aluno_motorista/${id}`;
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
