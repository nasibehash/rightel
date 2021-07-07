import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StatusPipe} from './pipe/status.pipe';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
@NgModule({
  declarations: [
      StatusPipe,
    BreadcrumbComponent
    ],
  imports: [
    CommonModule,
 
  ],
  exports:[
    StatusPipe,
    BreadcrumbComponent
  ]
})
export class SharedModule { }
