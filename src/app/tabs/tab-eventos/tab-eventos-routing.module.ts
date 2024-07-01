import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabEventosPage } from './tab-eventos.page';

const routes: Routes = [
  {
    path: '',
    component: TabEventosPage
  },
  {
    path: 'tab-detalles/:id/:img/:fecha/:nombre',
    loadChildren: () => import('./tab-detalles/tab-detalles.module').then( m => m.TabDetallesPageModule)
  },
  {
    path: 'tab-detalles/tab-comprar/:id/:img/:fecha/:nombre',
    loadChildren: () => import('./tab-detalles/tab-comprar/tab-comprar.module').then( m => m.TabComprarPageModule)
  }
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabEventosPageRoutingModule {}
