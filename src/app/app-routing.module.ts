import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiyFirstAidComponent } from './core/feature/component/diy-first-aid/diy-first-aid.component';
import { GmapComponent } from './core/shared/gmap/gmap.component';
import { LoginComponent } from './core/user-management/login/login.component';

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
    path: 'gmap',
    component: GmapComponent,
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
