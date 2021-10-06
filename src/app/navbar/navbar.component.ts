import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarfixed:boolean = false;

  @HostListener('window.scroll',['$event']) onScroll() {

    if(window.scrollY > 100)
    {
      this.navbarfixed = true;
    }
    else
    {
      this.navbarfixed = false;
    }

  }

  constructor() { }

  ngOnInit(): void {
  }
  
}
