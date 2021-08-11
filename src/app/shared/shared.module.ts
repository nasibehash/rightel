import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageUploaderComponent} from './image-uploader/image-uploader.component';
import {FormatTimePipe} from './pipes/formatTime.pipe';


@NgModule({
  declarations: [
      ImageUploaderComponent,
      FormatTimePipe
    ],
  imports: [
    CommonModule,
 
  ],
  exports:[
    ImageUploaderComponent,
    FormatTimePipe
  ]
})
export class SharedModule { }
