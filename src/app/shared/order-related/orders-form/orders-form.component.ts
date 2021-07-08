import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';



@Component({
  selector: 'app-form-orders',
  templateUrl: './orders-form.component.html',
  styleUrls: ['./orders-form.component.scss'],
  animations: [
    trigger("fadeInOut", [
      state("in", style({ opacity: 0, transform: "translateY(0)" })),
      transition("void => *", [
        style({ opacity: 1, transform: "translateY(100%)" }),
        animate(200)
      ]),
      transition("* => void", [
        animate(200, style({ opacity: 1, transform: "translateY(100%)" }))
      ])
    ])

]

})
export class OrdersFormComponent implements OnInit {
  Form: FormGroup;
  @ViewChild('f', {static: false}) floatingLabelForm: NgForm;
  @ViewChild('vform', {static: false}) validationForm: FormGroup;


    // isLoading = false;
    isLoadingMyInfo = true;
    loadingData =true;


      submitForm = this.fb.group({
        title: ['', Validators.required],
        trackingCode: ['', Validators.required],
        subject:['', Validators.required]

      });
      // ////////////////
@Output() OnclickCancel = new EventEmitter<any>();
@Output() OnclickInsert = new EventEmitter<any>();
@Output() insert = new EventEmitter<any>();
  @Input('visibleBtn') public isVisible :boolean = false;
   @Input() myOrdersData: any = [];
   @Input() rows: any = [];

  isChecked = true;
  isLoading: boolean = false;
  isLoadings: boolean = false;

  isDisabled = false;


  constructor(
    private router: Router,
 
  private fb: FormBuilder
    ) {
 
    }


  ngOnInit() {
    this.Form = new FormGroup({
      'title': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'comment': new FormControl(null, [Validators.required]),
     'subject': new FormControl(null, [Validators.required])
  });

  }





  onClickSubmit(data) {

    this.isLoading=true;
    // setTimeout(() => {
        this.OnclickInsert.emit(data);
        this.rows =this.myOrdersData;

      this.isLoading=false;
    // }, 3000);
 }





  public cancelBtn() :void{
    this.isLoadings=true;
    this.OnclickCancel.emit('CLOSE');
  this.isLoadings=false;

  }




selectChangeHandler(event: any){
this.myOrdersData.subject = event.target.value;
}

}

