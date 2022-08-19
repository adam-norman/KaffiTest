import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentRoute: string = '';
  display: boolean = false;
  open: boolean = false;


  constructor(private route: Router) {
    this.route.events.subscribe((event: NavigationEvent) => {
      if ( event instanceof NavigationEnd ) {
        this.currentRoute = event.url;
      }
    })
  }

  ngOnInit(): void {
  }

  openDialog() {
    this.display = true;
  }

  openMenu() {
    let addShow = document.querySelector('.mobile-nav');
    addShow?.classList.add('show');
  }

  closeMenu() {
    let addShow = document.querySelector('.mobile-nav');
    addShow?.classList.remove('show')
  }

  openToggle() {
    this.open = !this.open;
  }

  openDropdown() {
    this.open = !this.open
  }

}
