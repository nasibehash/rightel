import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { UsersModel } from 'src/core/models/users.model';
import { timer, Subscription } from "rxjs";
import { Pipe, PipeTransform } from "@angular/core";


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],


})
export class UserFormComponent implements OnInit, OnDestroy {
  Form: FormGroup;
  countDown: Subscription;
  counter = 1800;
  tick = 1000;

 
@Output() OnclickInsert = new EventEmitter<any>();
errorMessages : string = '';
  
   myUserData: Array<UsersModel> = [];
isVisible:boolean;

  submitForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phoneNo: ['', Validators.required],
    fromSalary: ['', Validators.required],
    toSalary: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],


  });
  constructor(
    private router: Router,
  private fb: FormBuilder
    ) {
 
    }

  ngOnInit() {
console.log(this.myUserData);
this.countDown = timer(0, this.tick).subscribe(() => --this.counter);

  }
  ngOnDestroy(){
    this.countDown=null;
  }
  onClickSubmit(f:NgForm) {
this.myUserData.push(f.value)
    this.OnclickInsert.emit({isVisible:false,data:f.value});
            
 }
 errorMg(message : string){
  this.errorMessages =message;
}





}

