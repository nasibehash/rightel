import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PorderModel} from '../../models/pOrders.model';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})

export class OrdersTableComponent implements OnInit {


  myData : Array<PorderModel> = [];
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
      this.http.get('assets/data/pOrder.json')
      .subscribe((myList: any[]) => {

          this.myData =  myList.sort(function(a, b){return b.id-a.id});
          this.rows =this.myData;
        this.rows =this.myData;
        this.isLoadingMyInfo = false;

      })
            }
    
     




ngModelChange($event){
  console.log($event);
}

updateFilter(event) {
  const val = event.target.value.toLowerCase();

  // filter our data
  const temp = this.myData.filter(function (d) {
      // return d.title.toLowerCase().indexOf(val) !== -1 || !val;
  });

  // update the rows
  this.rows = temp;
  // Whenever the filter changes, always go back to the first page
  this.table.offset = 0;
}

toggleExpandRow(row) {
this.table.rowDetail.toggleExpandRow(row);
}

onDetailToggle(event) {
// console.log('Detail Toggled', event);
}
toggleForm(){
this.isVisible = !this.isVisible;
// this.showForm = !this.showForm;

}


  closeMe($event){
      if($event !== undefined && $event !== null && $event==='CLOSE'){
        this.isVisible = false;
      }
  }



 InsertFeedback(data){


  this.isVisible = false;
  const id =this.myData.length;
  const status =Math.floor((Math.random() * 10) + 1);
  const trackingCode =Math.floor((Math.random() *1000) + 1)
  this.myData.push({
    id:id + 1,
    title: data.title,
    comment: data.comment,
    subject: data.subject,
    trackingCode:trackingCode,
    status: status
  });

    this.doRefresh = true;
    setTimeout(() => {
      // this.rows =this.myData.sort(function(a, b){return b.id-a.id});
      this.doRefresh = false;
    }, 50);

  //   swal.fire(
  //     {
  //         title: 'نظرات شما با موفقیت در سیستم ثبت شد',
  //         showConfirmButton: false,
  //         icon: 'success',
  //         timer: 4000
  //     }
  // )
}

}
