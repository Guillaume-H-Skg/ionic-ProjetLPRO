import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TankNewPageRoutingModule } from './tank-new-routing.module';

import { TankNewPage } from './tank-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TankNewPageRoutingModule
  ],
  declarations: [TankNewPage]
})
export class TankNewPageModule {}
