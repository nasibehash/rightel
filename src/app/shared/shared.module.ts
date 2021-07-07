import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StatusPipe} from './pipe/status.pipe';
import {NiBreadcrumbComponent} from './breadcrumb/ni-breadcrumb.component';
@NgModule({
  declarations: [
      StatusPipe,
      NiBreadcrumbComponent
    ],
  imports: [
    CommonModule,
 
  ],
  exports:[
    StatusPipe,
    NiBreadcrumbComponent
  ]
})
export class SharedModule { }
