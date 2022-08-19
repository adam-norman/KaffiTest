import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  value1 = 70;
  value2= 30;
  value3 = 50;
  data: any;


  constructor() { }

  ngOnInit(): void {
    this.data = {

      datasets: [
          {
              data: [300, 50, 100, 130],
              backgroundColor: [
                  "#acc4c6",
                  "#8eb0b1",
                  "#6c9ea0",
                  "#e2eded"
              ],
              hoverBackgroundColor: [
                "#acc4c6",
                "#8eb0b1",
                "#6c9ea0",
                "#e2eded"
              ]
          }
      ],
      // labels: ['300','50','100']
  };
  }



}
