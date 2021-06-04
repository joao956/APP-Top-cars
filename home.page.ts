import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public nav: NavController) {}

  abrirpagina() {
    this.nav.navigateForward('cadastro');
  }
    abrirpagina2() {
      this.nav.navigateForward('selecionarveiculo');

    }

}
