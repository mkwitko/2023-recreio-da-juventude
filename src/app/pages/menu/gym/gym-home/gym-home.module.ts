import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GymHomePageRoutingModule } from './gym-home-routing.module';

import { GymHomePage } from './gym-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GymHomePageRoutingModule
  ],
  declarations: [GymHomePage]
})
export class GymHomePageModule {}
