import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as ambulanceDetails from '../../../../../assets/mock/ambulance.json';

import { AngularStripeService } from '@fireflysemantics/angular-stripe-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ambulance-list',
  templateUrl: './ambulance-list.component.html',
  styleUrls: ['./ambulance-list.component.scss'],
})
export class AmbulanceListComponent implements OnInit {
  @ViewChild('cardInfo', { static: false }) cardInfo: ElementRef;
  ambulances: any = (ambulanceDetails as any).default;
  ambulanceList: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.ambulanceList = this.ambulances.ambulances.ambulance;
  }
  payment() {
    this.router.navigate(['/payment-gateway']);
  }
}
