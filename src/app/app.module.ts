import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserManagementModule } from './core/user-management/user-management.module';
import { LoginComponent } from './core/user-management/login/login.component';
// import { PanelModule, InputTextModule, ButtonModule } from 'primeng';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';

import {PanelModule} from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    CardModule,
    DialogModule,
    ButtonModule,
   PanelModule
      
    // UserManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
