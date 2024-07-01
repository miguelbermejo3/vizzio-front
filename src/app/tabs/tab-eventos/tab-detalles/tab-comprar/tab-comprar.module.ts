import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabComprarPageRoutingModule } from './tab-comprar-routing.module';

import { TabComprarPage } from './tab-comprar.page';
import { RouterModule, Routes } from '@angular/router';
import { TabDetallesPage } from '../tab-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: TabComprarPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabComprarPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabComprarPage]
})
export class TabComprarPageModule {}
