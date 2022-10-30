import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GmapComponent } from './gmap/gmap.component';
import { GMapModule } from 'primeng/gmap';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { CommonModule } from '@angular/common';

const primengModules = [
  AccordionModule,
  FormsModule,
  DialogModule,
  CardModule,
  GMapModule,
  DialogModule,
  ToastModule,
  CheckboxModule,
  InputTextModule,
  ButtonModule,
  TabViewModule,
  CommonModule
];
@NgModule({
  declarations: [GmapComponent],
  imports: [...primengModules],
  exports: [...primengModules],
})
export class sharedModule {}
