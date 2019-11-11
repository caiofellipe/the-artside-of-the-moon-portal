import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var require: any
require('paroller.js');

@Component({
  selector: 'moon-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.my-paroller-rocket').paroller();

    $(".my-rocket").paroller({ factor: 0.5, factorXs: 0.2, factorSm: 0.3, type: 'foreground', direction: 'horizontal' });
  }

}
