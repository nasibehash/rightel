import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { UsersModel } from 'src/core/models/users.model';
import { timer, Subscription } from "rxjs";
import { createNumberMask } from 'text-mask-addons/dist/textMaskAddons';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],


})
export class UserFormComponent implements OnInit, OnDestroy {
  countDown: Subscription;
  counter = 1800;
  tick = 1000;


@Output() OnclickInsert = new EventEmitter<any>();
@ViewChild('f') userForm: NgForm;

@Input() myUserData:UsersModel= new  UsersModel;
@Input() myAction = 'NEW';

isVisible:boolean;
errorMessages : string = '';
public mask = [ /[0-9]/, /\d/, /\d/,/\d/,  '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
public letterPattern = [/[a-zA-Z]/, /[a-zA-Z]/, /[a-zA-Z]/,/[a-zA-Z]/, /[a-zA-Z]/, /[a-zA-Z]/,/[a-zA-Z]/, /[a-zA-Z]/, /[a-zA-Z]/,/[a-zA-Z]/, /[a-zA-Z]/, /[a-zA-Z]/,/[a-zA-Z]/, /[a-zA-Z]/, /[a-zA-Z]/,/[a-zA-Z]/, /[a-zA-Z]/, /[a-zA-Z]/];
public maskAmount = createNumberMask({
  prefix: '',
  suffix: ''
});



constructor() {}

  ngOnInit() {

this.countDown = timer(0, this.tick).subscribe(() => --this.counter);
const ttt= this.myUserData;

  }
  ngOnDestroy(){
    this.countDown=null;
  }
  onSubmit() {
    this.OnclickInsert.emit({isVisible:false,data:this.myUserData});

 }
 errorMg(message : string){
  this.errorMessages =message;
}





}



