import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentRoute: string = '';
  constructor(private route: Router) {
    this.route.events.subscribe((event: NavigationEvent) => {
      if ( event instanceof NavigationEnd ) {
        this.currentRoute = event.url;
      }
    })
  }

  ngOnInit(): void {
  }

}
