import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabDetallesPage } from './tab-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: TabDetallesPage
  },  {
    path: 'tab-comprar',
    loadChildren: () => import('./tab-comprar/tab-comprar.module').then( m => m.TabComprarPageModule)
  },

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabDetallesPageRoutingModule {}
