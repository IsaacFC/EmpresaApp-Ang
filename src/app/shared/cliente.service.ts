import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  formData: Cliente = new Cliente();
  readonly baseURL="http://localhost:20805/api/cliente"
  list: Cliente[];

  postCliente(){
    return this.http.post(this.baseURL, this.formData, {responseType: 'text'});
  }

  putCliente(){
    return this.http.put(`${this.baseURL}/${this.formData.clienteId}`, this.formData, {responseType: 'text'});
  }

  deleteCliente(id:number){
    return this.http.delete(`${this.baseURL}/${id}`, {responseType: 'text'});
  }

  refreshList(){
    return this.http.get(this.baseURL)
    .toPromise()
    .then(res => 
      this.list = res as Cliente[]);
  }
  
}
