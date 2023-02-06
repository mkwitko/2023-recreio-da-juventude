import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationHomePageRoutingModule } from './reservation-home-routing.module';

import { ReservationHomePage } from './reservation-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationHomePageRoutingModule
  ],
  declarations: [ReservationHomePage]
})
export class ReservationHomePageModule {}
