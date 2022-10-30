import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { NavbarComponent } from './component/navbar/navbar.component';
import { DiyFirstAidComponent } from './component/diy-first-aid/diy-first-aid.component';
import { HomeComponent } from './component/home/home.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlsComponent } from './component/home/als/als.component';
import { BlsComponent } from './component/home/bls/bls.component';
import { PtsComponent } from './component/home/pts/pts.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AdvanceBookingPopupComponent } from './component/advance-booking-popup/advance-booking-popup.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AmbulanceListComponent } from './component/ambulance-list/ambulance-list.component';
import { TabViewModule } from 'primeng/tabview';
import {CalendarModule} from 'primeng/calendar';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
@NgModule({
  declarations: [DiyFirstAidComponent,NavbarComponent,HomeComponent, AlsComponent, BlsComponent, PtsComponent,AdvanceBookingPopupComponent,
    AmbulanceListComponent,],
  imports: [
    AccordionModule,
    CardModule,
    ButtonModule,
    DialogModule,
    AutoCompleteModule,
    DropdownModule,
    ReactiveFormsModule,
    TabViewModule,
    FormsModule,
    CommonModule,
    RouterModule,
    CalendarModule,
    NgxMaterialTimepickerModule
  ],
  providers: [],
  bootstrap: [],
})
export class FeatureModule {}
