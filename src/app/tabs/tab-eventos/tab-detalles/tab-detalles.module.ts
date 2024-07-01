import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabDetallesPageRoutingModule } from './tab-detalles-routing.module';

import { TabDetallesPage } from './tab-detalles.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TabDetallesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabDetallesPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabDetallesPage]
})
export class TabDetallesPageModule {}
