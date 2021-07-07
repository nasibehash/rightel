import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomPreloadingStrategyService} from '../core/services/custom-preloading-strategy.service';
const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
 { path: 'orders', data: { preload:true, loadAfterSeconds:15}, loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }

];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingStrategyService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
