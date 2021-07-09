import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {OrderModel} from '../../../../core/models/orders.model';
import swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})

export class OrdersTableComponent implements OnInit {


  myOrdersData : Array<OrderModel> = [];
  rows = [];
  isLoadingMyInfo :boolean = true;
  doRefresh :boolean = false;
  public isVisible:boolean = false;

  scrollBarHorizontal = (window.innerWidth < 1200);
  messages = {
    emptyMessage: `
      <div class="mt-4 mb-4 f-18 text-center">
        <i class="ft-alert-triangle fa faa-flash animated"></i>
        <span >موردی یافت نشد</span>

      </div>
    `
  }
  @ViewChild('myTable', { static: false }) table: any;
  constructor(private http:HttpClient) {
    window.onresize = () => {
      this.scrollBarHorizontal = (window.innerWidth < 1200);
    };
   }

  ngOnInit(): void {
    this.getData();

  }

    getData() {
      this.http.get('assets/data/order.json')
      .subscribe((myList: any[]) => {

          this.myOrdersData =  myList;
          this.rows =this.myOrdersData;
        this.isLoadingMyInfo = false;

      })
            }
    
     




ngModelChange($event){
  console.log($event);
}

updateFilter(event) {
  const val = event.target.value.toLowerCase();

  // filter our data
  const temp = this.myOrdersData.filter(function (d) {
    return d.title.toLowerCase().indexOf(val) !== -1 || d.subject.toLowerCase().indexOf(val) !== -1 || !val;
 
  });

  // update the rows
  this.rows = temp;
  // Whenever the filter changes, always go back to the first page
  this.table.offset = 0;
}



  closeMe($event){
      if($event !== undefined && $event !== null && $event==='CLOSE'){
        this.isVisible = false;
      }
  }


  toggleExpandRow(row) {

    this.table.rowDetail.toggleExpandRow(row);


  } 
  editRow(){
    swal.fire(
      {
          title: 'ویرایش با موفقیت انجام شد',
          showConfirmButton: false,
          icon: 'success',
          timer: 2000
      }
      )
  }
 InsertOrders(data){


  this.isVisible = false;
  const id =this.myOrdersData.length;

  this.myOrdersData.push({
    id:id + 1,
    title: data.title,
    comment: data.comment,
    subject: data.subject,
    trackingCode:data.trackingCode
  });

    this.doRefresh = true;
    setTimeout(() => {
      // this.rows =this.myOrdersData.sort(function(a, b){return b.id-a.id});
      this.doRefresh = false;
    }, 50);

    swal.fire(
      {
          title: 'سفارش شما با موفقیت در سیستم ثبت شد',
          showConfirmButton: false,
          icon: 'success',
          timer: 2000
      }
  )
}

onRemoveRow(rowIndex: number) {

  this.myOrdersData.splice(rowIndex, 1);
  this.rows = [...this.rows];
}
}
