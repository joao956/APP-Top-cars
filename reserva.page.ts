import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
})
export class ReservaPage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }
  abrirPagina2(){
    this.nav.navigateForward('pagamento');

}}
