import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuseumAddPageRoutingModule } from './museum-add-routing.module';

import { MuseumAddPage } from './museum-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuseumAddPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MuseumAddPage]
})
export class MuseumAddPageModule {}
