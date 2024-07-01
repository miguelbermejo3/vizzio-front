import { NgModule } from '@angular/core';
import { PreloadAllModules, RouteReuseStrategy, RouterModule, Routes } from '@angular/router';

import { IonicRouteStrategy } from '@ionic/angular';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
     
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
