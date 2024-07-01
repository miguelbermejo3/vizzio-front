import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabEventosPageRoutingModule } from './tab-eventos-routing.module';

import { TabEventosPage } from './tab-eventos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabEventosPageRoutingModule
  ],
  declarations: [TabEventosPage]
})
export class TabEventosPageModule {}
