import { Component, OnInit } from '@angular/core';
import * as ambulanceDetails from '../../../../../assets/mock/ambulance.json';

@Component({
  selector: 'app-ambulance-list',
  templateUrl: './ambulance-list.component.html',
  styleUrls: ['./ambulance-list.component.scss'],
})
export class AmbulanceListComponent implements OnInit {
  ambulances: any = (ambulanceDetails as any).default;
  ambulanceList: any;

  constructor() {}

  ngOnInit(): void {
    this.ambulanceList = this.ambulances.ambulances.ambulance;
  }
}
