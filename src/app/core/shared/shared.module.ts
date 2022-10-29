import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { NgModule } from '@angular/core';

const primengModules = [AccordionModule, DialogModule, CardModule];
@NgModule({
  declarations: [],
  imports: [...primengModules],
  exports: [...primengModules],
})
export class sharedModule {}
