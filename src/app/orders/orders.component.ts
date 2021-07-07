import { Component, Input, OnInit } from '@angular/core';
const BREADCRUMBS: any[] = [
  {
    title: 'داشبورد',
    link: 'dashboards/default'
  },
  {
    title: 'صفحه سفارشات',
    link: '/orders'
  }
];
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  breadcrumb: any[] = BREADCRUMBS;
 

@Input() text='';
  constructor() { }

  ngOnInit(): void {

  }

    
}
