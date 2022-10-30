import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmbulanceListComponent } from './core/feature/component/ambulance-list/ambulance-list.component';
import { DiyFirstAidComponent } from './core/feature/component/diy-first-aid/diy-first-aid.component';
import { HomeComponent } from './core/feature/component/home/home.component';
import { PaymentComponent } from './core/feature/component/payment/payment.component';
import { GmapComponent } from './core/shared/gmap/gmap.component';
import { LoginComponent } from './core/user-management/login/login.component';
import { RegistrationComponent } from './core/user-management/registration/registration.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'first-aid',
    component: DiyFirstAidComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'ambulance-list',
    component: AmbulanceListComponent,
  },
  {
    path: 'emergency-booking',
    component: GmapComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent,
  },
  {
    path: 'payment-gateway',
    component: PaymentComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
