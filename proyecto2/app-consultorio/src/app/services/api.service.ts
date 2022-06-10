import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders;

  constructor(
    public http: HttpClient,
    
  ) {
    this.headers = new HttpHeaders();
    this.headers.append("Accept", 'aplication/json');
    this.headers.append('Content-Type', 'aplication/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
   }

  registrarUsuario(data){
    return this.http.post('http://localhost/portafolio/proyecto2/backend/create.php',data);
  }

  // ingresarLogin(rut, contrasena){
  
  //   return this.http.get('http://localhost/portafolio/proyecto2/backend/getSingleUsuario.php?rut=' + rut + '&contrasena=' + contrasena);
  // }
  ingresarLogin(rut){
  
    return this.http.get('http://localhost/portafolio/proyecto2/backend/getSingleUsuario.php?rut=' + rut);
    }
  
}
