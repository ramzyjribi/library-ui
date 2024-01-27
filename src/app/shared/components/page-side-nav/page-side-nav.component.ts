import { Component } from '@angular/core';

export interface NavigationItem{
  value : string;
  link : string;
  icon : string;
}

@Component({
  selector: 'app-page-side-nav',
  templateUrl: './page-side-nav.component.html',
  styleUrl: './page-side-nav.component.scss'
})
export class PageSideNavComponent {
  panelName : string = 'Admin Panel';
  navItems : NavigationItem[]=[];

  constructor(){
    this.navItems=[
      {value:"View Books",link:"home",icon:"home"},
      {value:"View Books",link:"view-books",icon:"home"}
    ]
  }
}
