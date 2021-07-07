import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import {OrdersRelatedModule} from '../shared/order-related/orders-related.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  exports:[
    OrdersComponent
  ],
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    OrdersRelatedModule,
    SharedModule

  ]
})
export class OrdersModule { }
