import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuseumPage } from './museum.page';

const routes: Routes = [
  {
    path: '',
    component: MuseumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuseumPageRoutingModule {}
