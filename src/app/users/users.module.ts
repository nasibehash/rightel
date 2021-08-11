import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UserFormComponent } from './user-form/user-form.component';
import { UserSummaryComponent } from './user-summary/user-summary.component';
import { SharedModule } from '../shared/shared.module';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  exports:[
    UserFormComponent,
    UserSummaryComponent
  ],
  declarations: [UserFormComponent,
    UserSummaryComponent],

  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    TextMaskModule

  ]
})
export class UsersModule { }
