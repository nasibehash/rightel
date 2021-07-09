import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { OrdersTableComponent } from './order-table/orders-table.component';
import { OrdersFormComponent } from './/orders-form/orders-form.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../shared.module';
@NgModule({
  exports:[
    OrdersTableComponent,
    OrdersFormComponent
  ],
  declarations: [
    OrdersTableComponent,
    OrdersFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    SharedModule,
    NgbModule
    
  ]
})
export class OrdersRelatedModule { }
