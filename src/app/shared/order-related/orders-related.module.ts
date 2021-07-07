import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { OrdersTableComponent } from './order-table/orders-table.component';
import { OrdersDetailComponent } from './order-detail/orders-detail.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  exports:[
    OrdersTableComponent,
    OrdersDetailComponent
  ],
  declarations: [OrdersTableComponent,OrdersDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule,
  ]
})
export class OrdersRelatedModule { }
