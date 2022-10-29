import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [AccordionModule],
  providers: [],
  bootstrap: [],
})
export class UserManagementModule {}
