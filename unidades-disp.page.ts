import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-unidades-disp',
  templateUrl: './unidades-disp.page.html',
  styleUrls: ['./unidades-disp.page.scss'],
})
export class UnidadesDispPage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  abrirPagina2(){
    this.nav.navigateForward('reserva');

}
}