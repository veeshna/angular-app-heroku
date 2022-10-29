import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { sharedModule } from './core/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';

import { AccordionModule } from 'primeng/accordion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserManagementModule } from './core/user-management/user-management.module';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import { FeatureModule } from './core/feature/component/diy-first-aid/feature.module';

import {PanelModule} from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    CardModule,
    DialogModule,
    ButtonModule,
   PanelModule,
      
    // UserManagementModule
    UserManagementModule,
    sharedModule,
    FeatureModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
