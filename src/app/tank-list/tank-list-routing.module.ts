import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TankListPage } from './tank-list.page';

const routes: Routes = [
  {
    path: '',
    component: TankListPage
  },
  {
    path: 'new',
    loadChildren: () => import('./tank-new/tank-new.module').then( m => m.TankNewPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('../tank-list/tank/tank.module').then( m => m.TankPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TankListPageRoutingModule {}
