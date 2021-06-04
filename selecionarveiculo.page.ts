import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-selecionarveiculo',
  templateUrl: './selecionarveiculo.page.html',
  styleUrls: ['./selecionarveiculo.page.scss'],
})
export class SelecionarveiculoPage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  abrirPagina() {
    this.nav.navigateForward('unidades-disp');

  }

}





