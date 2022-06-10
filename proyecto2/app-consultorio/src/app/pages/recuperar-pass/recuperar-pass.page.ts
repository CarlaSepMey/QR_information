import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recuperar-pass',
  templateUrl: './recuperar-pass.page.html',
  styleUrls: ['./recuperar-pass.page.scss'],
})
export class RecuperarPassPage implements OnInit {
  

  constructor(private router : Router) { }

  ngOnInit() {
  }
  

  //otra manera de navegar entre paginas
  volverInicio(){
    this.router.navigate(['/login'])
  }

}
