import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-form-orders',
  templateUrl: './orders-form.component.html',
  styleUrls: ['./orders-form.component.scss'],


})
export class OrdersFormComponent implements OnInit {
  Form: FormGroup;
  @ViewChild('f', {static: false}) floatingLabelForm: NgForm;
  @ViewChild('vform', {static: false}) validationForm: FormGroup;

 
@Output() OnclickCancel = new EventEmitter<any>();
@Output() OnclickInsert = new EventEmitter<any>();
@Output() insert = new EventEmitter<any>();
  @Input('visibleBtn') public isVisible :boolean = false;
   @Input() myOrdersData: any = [];
   @Input() rows: any = [];

   isLoadingMyInfo = true;


  submitForm = this.fb.group({
    title: ['', Validators.required],
    trackingCode: ['', Validators.required],
    subject:['', Validators.required]

  });
  constructor(
    private router: Router,
    private modalService: NgbModal,
  private fb: FormBuilder
    ) {
 
    }


  ngOnInit() {


  }


  openXl(longContent) {
    this.modalService.open(longContent, { size: 'lg',centered:true, windowClass: 'animate__animated animate__fadeInDown modal-class' });
  }

  close() {

    this.submitForm.reset();
    this.modalService.dismissAll();
  }

  onClickSubmit(data) {

        this.OnclickInsert.emit(data);
        this.rows =this.myOrdersData;
        this.modalService.dismissAll();
        this.submitForm.reset();
 }



selectChangeHandler(event: any){
this.myOrdersData.subject = event.target.value;
}

}

