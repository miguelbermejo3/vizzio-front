import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabComprarPage } from './tab-comprar.page';

const routes: Routes = [
  {
    path: '',
    component: TabComprarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabComprarPageRoutingModule {}
