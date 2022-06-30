import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Corrida } from '../modelo/corrida';


@Injectable({
  providedIn: 'root'
})
export class CorridaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAll():Observable<Corrida[]>{
    const url = this.baseUrl + "corrida/"
    return this.http.get<Corrida[]>(url);
  }

  findById(id: any):Observable<Corrida>{
    const url = this.baseUrl +"corrida/" + `${id}`;
    return this.http.get<Corrida>(url);
  }

  create(corrida: Corrida):Observable<Corrida>{
    const url = this.baseUrl + 'corrida/'
    return this.http.post<Corrida>(url, corrida)
  }

  update(corrida: Corrida):Observable<Corrida> {
    const url = `${this.baseUrl}corrida/${corrida.id}`;
    return this.http.put<Corrida>(url, corrida);
  }

  delete(id : any):Observable<void> {
    const url = `${this.baseUrl}corrida/${id}`;
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
