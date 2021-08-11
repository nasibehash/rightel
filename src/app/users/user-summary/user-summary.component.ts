import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';

import { UsersModel } from 'src/core/models/users.model';



@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.scss'],


})
export class UserSummaryComponent implements OnInit {
  Form: FormGroup;
  jobs: string[] = ['تمام وقت', 'پاره وقت'];

 @Input()  myUserData: UsersModel;
 @Output() OnclickInsert = new EventEmitter<any>();
 isVisible:boolean=true;



  constructor() { }


  ngOnInit() {
  }

  returnBtn(data:UsersModel){
    this.OnclickInsert.emit({isVisible:true,data:data});


  }

}

