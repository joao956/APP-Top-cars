import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-aprova-ped',
  templateUrl: './aprova-ped.page.html',
  styleUrls: ['./aprova-ped.page.scss'],
})
export class AprovaPedPage implements OnInit {

 

  constructor(public nav: NavController) { }

  ngOnInit() {
  }
  abrirpagina2() {
    this.nav.navigateForward('selecionarveiculo');


}}
