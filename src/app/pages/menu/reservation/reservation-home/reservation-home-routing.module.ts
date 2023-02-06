import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationHomePage } from './reservation-home.page';

const routes: Routes = [
  {
    path: '',
    component: ReservationHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationHomePageRoutingModule {}
