import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( private storage: Storage,
    private navctrl:NavController,
    private router: Router,
    private navCtrl : NavController) 
    {
      //this.initializeApp();
    }
    initializeApp() {
    this.storage.get('storage_session'). then((res)=> {
      if(res ==null){
        this.navCtrl.navigateRoot('/login');
      }else{
        this.navCtrl.navigateRoot('/inicio');
      }
    });
  }
}
