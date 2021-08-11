import { Component } from '@angular/core';
import { UsersModel } from 'src/core/models/users.model';
const BREADCRUMBS: any[] = [
  {
    title: 'داشبورد',
    link: ''
  }
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  breadcrumb: any[] = BREADCRUMBS;

  title = 'پنل';
  rtl: boolean;

  isVisible:boolean=true;
  myUserData:UsersModel;

  constructor(){
    this.rtl = true;

  }

  getFormData($event){
this.myUserData=$event.data;
this.isVisible=$event.isVisible;
  }
  getSummaryData($event){
    this.myUserData=$event.data;
    this.isVisible=$event.isVisible;

      }
}
