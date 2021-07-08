import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import{AdditionNavbarComponent} from './addition-navbar/addition-navbar.component';
import { MatIconModule } from '@angular/material/Icon';

@NgModule({
  declarations: [
    HeaderComponent,
    AdditionNavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  exports:[
    HeaderComponent,
    AdditionNavbarComponent
  ]
})
export class UiModule { }
