import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuseumPageRoutingModule } from './museum-routing.module';

import { MuseumPage } from './museum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuseumPageRoutingModule
  ],
  declarations: [MuseumPage]
})
export class MuseumPageModule {}
