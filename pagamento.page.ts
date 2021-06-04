import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }
  abrirpagina2() {
    this.nav.navigateForward('aprova-ped');


}}
