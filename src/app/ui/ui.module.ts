import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import{AdditionNavbarComponent} from './addition-navbar/addition-navbar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AdditionNavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    HeaderComponent,
    AdditionNavbarComponent
  ]
})
export class UiModule { }
