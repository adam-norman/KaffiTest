import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  active: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  openMenu() {
    this.active = !this.active;
  }

}
