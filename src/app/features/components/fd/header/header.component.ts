import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerOpt1: boolean = true ;
  headerOpt2: boolean = false ;

  constructor() { }

  ngOnInit(): void {
  }

}
