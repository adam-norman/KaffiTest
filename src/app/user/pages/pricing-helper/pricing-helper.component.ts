import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-helper',
  templateUrl: './pricing-helper.component.html',
  styleUrls: ['./pricing-helper.component.scss']
})
export class PricingHelperComponent implements OnInit {

  product = [
    {
      'prodName': 'البرازيل - أكيا',
      'price': 25.99,
      'roaster': 'خطوة جمل',
      'source': 'البرازيل',
      'overtones': 'فاكهية',
      'processing': 'مغسولة'
     },
     {
      'prodName': 'البرازيل - أكيا',
      'price': 26.99,
      'roaster': 'خطوة جمل',
      'source': 'البرازيل',
      'overtones': 'فاكهية',
      'processing': 'مغسولة'
     },
     {
      'prodName': 'البرازيل - أكيا',
      'price': 27.99,
      'roaster': 'خطوة جمل',
      'source': 'البرازيل',
      'overtones': 'فاكهية',
      'processing': 'مغسولة'
     },
     {
      'prodName': 'البرازيل - أكيا',
      'price': 28.99,
      'roaster': 'خطوة جمل',
      'source': 'البرازيل',
      'overtones': 'فاكهية',
      'processing': 'مغسولة'
     },
     {
      'prodName': 'البرازيل - أكيا',
      'price': 29.99,
      'roaster': 'خطوة جمل',
      'source': 'البرازيل',
      'overtones': 'فاكهية',
      'processing': 'مغسولة'
     },
     {
      'prodName': 'البرازيل - أكيا',
      'price': 30.99,
      'roaster': 'خطوة جمل',
      'source': 'البرازيل',
      'overtones': 'فاكهية',
      'processing': 'مغسولة'
     }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
