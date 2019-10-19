import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'moon-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".btn-menu").click(function(){
      $(".menu").show();
    });
    $(".btn-close").click(function(){
      $(".menu").hide();
    });
  }

}
