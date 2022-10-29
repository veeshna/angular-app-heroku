import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { DiyFirstAidComponent } from './diy-first-aid.component';

@NgModule({
  declarations: [DiyFirstAidComponent],
  imports: [AccordionModule, CardModule],
  providers: [],
  bootstrap: [],
})
export class FeatureModule {}
