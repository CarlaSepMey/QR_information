import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router, ActivatedRoute} from '@angular/router';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
//import { AccessProviders } from '../../providers/access-providers';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  comuna: any[] = [
    {id: 1, nombreComuna: "Santiago"},
    {id: 2, nombreComuna: "Conchalí"},
    {id: 3, nombreComuna: "EL Bosque"},
    {id: 4, nombreComuna: "La Cisterna"},
    {id: 5, nombreComuna: "Quilicura"},
    {id: 6, nombreComuna: "Recoleta"},
    {id: 7, nombreComuna: "Renca"},
    {id: 8, nombreComuna: "La Pintana"}
  ]

  rut: string;
  primerNombre: string;
  segundoNombre: string;
  apPaterno: string;
  apMaterno: string;
  fechaNacimiento: string;
  correo: string;
  calle: string;
  numeracion: string;
  contrasena: string;

  constructor(
    public apiService: ApiService,
    private router: Router,
    private toastController: ToastController,
    private alertCtrl:AlertController,
    private loadingCtrl:LoadingController ) {

  }

  ngOnInit() {
  }
  
  
  registrarUsuario(){
    let data = {
      rut: this.rut,
      primer_nombre: this.primerNombre,
      segundo_nombre: this.segundoNombre,
      apellido_paterno: this.apPaterno,
      apellido_materno: this.apMaterno,
      fecha_nacimiento: this.fechaNacimiento,
      correo: this.correo,
      comuna: this.comuna,
      calle: this.calle,
      numeracion: this.numeracion,
      contrasena: this.contrasena

    }
    
    this.apiService.registrarUsuario(data).subscribe((res:any)=>{
      console.log("SUCCESS ===",res);
      this.rut ='';
      this.primerNombre='';
      this.segundoNombre='';
      this.apPaterno='';
      this.apMaterno='';
      this.fechaNacimiento = '';
      this.correo='';
      //this.comuna='';
      this.calle='';
      this.numeracion='';
      this.contrasena='';

      alert('SUCCESS');
      // redireccione al login
    },(error: any) => {
      alert('Se ha guardado correctamente');
      console.log("guardado", error);
    })
  }

}
