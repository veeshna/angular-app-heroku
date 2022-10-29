import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [
    AccordionModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    CardModule,
    DialogModule,
    ButtonModule,
    PanelModule,
  ],
  providers: [],
  bootstrap: [],
})
export class UserManagementModule {}
