import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  checked: boolean = false;
  rangeValues: number[] = [0,99];


  constructor() { }

  ngOnInit(): void {
  }

}
