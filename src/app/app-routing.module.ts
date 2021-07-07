import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomPreloadingStrategyService} from '../services/custom-preloading-strategy.service';
const routes: Routes = [

 { path: 'orders', data: { preload:true, loadAfterSeconds:15}, loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }
,{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
}
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingStrategyService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
