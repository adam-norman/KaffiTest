import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roasters-profile',
  templateUrl: './roasters-profile.component.html',
  styleUrls: ['./roasters-profile.component.scss']
})
export class RoastersProfileComponent implements OnInit {

  val: number = 1

  constructor() { }

  ngOnInit(): void {
  }

}
