import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compaigns',
  templateUrl: './compaigns.component.html',
  styleUrls: ['./compaigns.component.scss']
})
export class CompaignsComponent implements OnInit {
  checked: boolean = false;
  value: boolean = false;
  values1!: string[];
  date1 =  new Date();
  display = false;
  constructor() { }

  ngOnInit(): void {
  }

  showDialog() {
    this.display = true
  }

}
