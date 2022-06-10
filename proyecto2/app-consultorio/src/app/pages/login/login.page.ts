import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController} from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  rut: string = '';
  contrasena: string ='';
  

  constructor(
    public apiService: ApiService,
    //private authService: AuthService,
    private router: Router,
    private navCtrl: NavController
    
  ) { }


  // ingresar(){
  //   let data = {
  //     rut: this.rut,
  //     contrasena: this.contrasena
  // }
  // if (this.rut != '' &&  this.contrasena != ''){
  //   this.apiService.ingresarLogin(this.rut, this.contrasena).subscribe((res:any)=>{
  //     console.log("SUCCESS ===",res);
  //     this.rut = res;
  //     this.contrasena= res;
  //     debugger;
  //     alert('SUCCESS');
  //     //redireccione al inicio
  //     if ( this.rut= res[0].rut) { 
  //       this.router.navigate(['inicio']);        
  //       return true;
  //     }
  //   },(error: any) => {
      
  //     alert('error');
  //     console.log("error", error);
  //   })
  // }else{
  //   console.log("vacio")
  // }
  // //console.log("rut", this.rut, "contrasena", this.contrasena);

  ingresar(){
    let data = {
      rut: this.rut,
      contrasena: this.contrasena
  }
  if (this.rut != '' &&  this.contrasena != ''){
    this.apiService.ingresarLogin(this.rut).subscribe((res:any)=>{
      console.log("SUCCESS ===",res);
      this.rut = res;
      debugger;
      alert('SUCCESS');
      //redireccione al inicio
      if ( this.rut= res[0].rut) { 
        this.router.navigate(['inicio']);        
        return true;
      }
    },(error: any) => {
      
      alert('error');
      console.log("error", error);
    })
  }else{
    console.log("vacio")
  }
  //console.log("rut", this.rut, "contrasena", this.contrasena);

}

  
  


  

}