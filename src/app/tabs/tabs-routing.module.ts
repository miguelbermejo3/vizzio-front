import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { TabHomePageModule } from './tab-home/tab-home.module';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab-home',
        loadChildren: () => import('../tabs/tab-home/tab-home.module').then(m => m.TabHomePageModule)
      },
      {
        path: 'tab-eventos',
        loadChildren: () => import('../tabs/tab-eventos/tab-eventos.module').then(m => m.TabEventosPageModule)
      },
      {
        path: 'tab-perfil',
        loadChildren: () => import('../tabs/tab-perfil/tab-perfil.module').then(m => m.TabPerfilPageModule)
      },
      {
        path: 'tab-nosotros',
        loadChildren: () => import('../tabs/tab-nosotros/tab-nosotros.module').then(m => m.TabNosotrosPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab-home',
        pathMatch: 'full'
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
