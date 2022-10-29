import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { AdvanceBookingPopupComponent } from './component/advance-booking-popup/advance-booking-popup.component';
import { DiyFirstAidComponent } from './component/diy-first-aid/diy-first-aid.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AmbulanceListComponent } from './component/ambulance-list/ambulance-list.component';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [
    DiyFirstAidComponent,
    AdvanceBookingPopupComponent,
    AmbulanceListComponent,
  ],
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
  ],
  providers: [],
  bootstrap: [],
})
export class FeatureModule {}
