import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Proveedor1Provider} from '../../providers/proveedor1/proveedor1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public proveedor:Proveedor1Provider) {

  }

  usuarios:any;

  ionViewDidLoad(){

    this.proveedor.ObtenerDatos().subscribe(
      (data)=>{this.usuarios=data;},
      (error)=>{console.log(error);}
    )
  }

}
