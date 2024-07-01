import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabNosotrosPageRoutingModule } from './tab-nosotros-routing.module';

import { TabNosotrosPage } from './tab-nosotros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabNosotrosPageRoutingModule
  ],
  declarations: [TabNosotrosPage]
})
export class TabNosotrosPageModule {}
