import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [

  {
    path: 'tab',
    component: TabPage,

    children: [
      {
        path: 'tanks',
        loadChildren: () => import('../film-list/tank-list.module').then(m => m.TankListPageModule),

      },
      {
        path: 'museums',
        loadChildren: () => import('../museum-list/museum-list.module').then(m => m.MuseumListPageModule),

      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),
      },
      // {
      //   path: 'about',
      //   loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule),
      // },
      {
        path: 'photos',
        loadChildren: () => import('../photos/photos.module').then(m => m.PhotosPageModule),
      },
    ]
  },
{
  path: '',
  redirectTo:'/tab/home',
  pathMatch:'full'
},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule { }
