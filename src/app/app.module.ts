import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { sharedModule } from './core/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserManagementModule } from './core/user-management/user-management.module';

import { FeatureModule } from './core/feature/feature.module';

import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './core/feature/component/home/home.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    sharedModule,
    FeatureModule,
    InputTextModule,
    CardModule,
    DialogModule,
    ButtonModule,
    PanelModule,
    UserManagementModule,
    NgxMaterialTimepickerModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
