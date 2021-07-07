import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { OrdersTableComponent } from './order-table/orders-table.component';
import { OrdersFormComponent } from './/orders-form/orders-form.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/Card';
import { MatCheckboxModule } from '@angular/material/Checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/Input';
import { MatIconModule } from '@angular/material/Icon';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MatSelectModule } from '@angular/material/select';

import { MatTooltipModule } from '@angular/material/tooltip';
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
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,

    
  ]
})
export class OrdersRelatedModule { }
