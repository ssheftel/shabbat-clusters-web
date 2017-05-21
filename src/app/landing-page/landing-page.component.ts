import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  template: `<app-navigation-bar></app-navigation-bar>`,
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
