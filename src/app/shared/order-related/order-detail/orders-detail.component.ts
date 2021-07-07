import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orders-detail',
  templateUrl: './orders-detail.component.html',
  styleUrls: ['./orders-detail.component.scss']
})
export class OrdersDetailComponent implements OnInit {
 @Input() rows =[];
 @Input() orderItemIndex;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
   
  }

 
}
