import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsHomePageRoutingModule } from './events-home-routing.module';

import { EventsHomePage } from './events-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsHomePageRoutingModule
  ],
  declarations: [EventsHomePage]
})
export class EventsHomePageModule {}
