import { Component } from '@angular/core';
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
  constructor(){
    this.rtl = true;

  }
}
