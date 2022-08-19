import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss']
})
export class FrontendComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void {
    this.document.body.classList.add('frontend');
  }

}
