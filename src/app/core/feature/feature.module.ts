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

@NgModule({
  declarations: [DiyFirstAidComponent,NavbarComponent,HomeComponent, AlsComponent, BlsComponent, PtsComponent],
  imports: [AccordionModule, CardModule,CommonModule,RouterModule,ButtonModule],
  providers: [],
  bootstrap: [],
})
export class FeatureModule {}
