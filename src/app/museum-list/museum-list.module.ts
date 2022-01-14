import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuseumListPageRoutingModule } from './museum-list-routing.module';

import { MuseumListPage } from './museum-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuseumListPageRoutingModule
  ],
  declarations: [MuseumListPage]
})
export class MuseumListPageModule {}
