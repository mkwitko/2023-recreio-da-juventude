import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GymHomePage } from './gym-home.page';

const routes: Routes = [
  {
    path: '',
    component: GymHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GymHomePageRoutingModule {}
