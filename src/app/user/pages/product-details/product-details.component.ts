import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  val: number = 5;

  constructor() { }

  ngOnInit(): void {

  }


  relatedProducts: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoWidth: true,
    dots: false,
    nav: true,
    rtl: true,
    navSpeed: 700,
    navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      1000: {
        items: 6
      }
    },
    margin: 10

  }

}
