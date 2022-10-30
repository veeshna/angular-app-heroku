import { Component, OnInit } from '@angular/core';
import * as ambulanceDetails from '../../../../../assets/mock/ambulance.json';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  ambulances: any = (ambulanceDetails as any).default;
  ambulanceList: any;
  constructor() {}

  ngOnInit(): void {
    this.ambulanceList = this.ambulances.ambulances.ambulance;
  }
}
