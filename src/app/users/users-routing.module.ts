import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserFormComponent } from './user-form/user-form.component';
import { UserSummaryComponent } from './user-summary/user-summary.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'userForm',
        pathMatch: 'full',
      },
      {
        path: '',
        component: UserFormComponent,
       
      },
      {
        path: 'userSummary',
        component: UserSummaryComponent,
       
      },
      
      {
        path: '**',
        redirectTo: 'users',
        pathMatch: 'full'
      }
    ],
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

