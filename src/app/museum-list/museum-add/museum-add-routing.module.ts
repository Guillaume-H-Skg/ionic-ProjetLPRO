import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuseumAddPage } from './museum-add.page';

const routes: Routes = [
  {
    path: '',
    component: MuseumAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuseumAddPageRoutingModule {}
