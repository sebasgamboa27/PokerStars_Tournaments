import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output() status = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    $(".menu-opener").click(function(){
      $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
    });
  }   
  
  changeStatus(){
    this.status.emit(true);
  }

}
