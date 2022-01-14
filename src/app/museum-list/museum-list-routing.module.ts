import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuseumListPage } from './museum-list.page';

const routes: Routes = [
  {
    path: '',
    component: MuseumListPage
  },
  {
    path: 'add',
    loadChildren: () => import('./museum-add/museum-add.module').then( m => m.MuseumAddPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./museum/museum.module').then( m => m.MuseumPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuseumListPageRoutingModule {}
