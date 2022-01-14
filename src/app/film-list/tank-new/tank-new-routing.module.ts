import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TankNewPage } from './tank-new.page';

const routes: Routes = [
  {
    path: '',
    component: TankNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TankNewPageRoutingModule {}
