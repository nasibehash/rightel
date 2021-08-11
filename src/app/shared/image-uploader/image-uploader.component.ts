import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

import { SafeUrl, DomSanitizer } from "@angular/platform-browser";
// import { NgxSpinnerService } from "ngx-spinner";

// import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],

})
export class ImageUploaderComponent implements OnInit{

  isLoadingMyInfo = false;
  errMessage = '';
  isLoading: boolean = false;
  @Output() errorMessages = new EventEmitter<string>();
  @Input()  fileTypes = ['image/jpeg','image/pjpeg','image/png','pdf'];


  @Input() limitSize = 200;
@Input() image: string | SafeUrl = "";
@Input() width = 100;
@Input() height = 100;



constructor(private sanitizer: DomSanitizer){

}
  ngOnInit() {
  }




    updateImage(file:any) {
      // console.log(file);
      for(var i = 0; i < file.length; i++) {

      if (file !== undefined && file !== null && file.length > 0  ) {

        if(this.fileTypes.findIndex(x => x === file[i].type) === -1){



          this.errMessage = 'تصویر شما می بایستی از نوع jpeg و یا png باشد';
          this.errorMessages.emit(this.errMessage);
        }
        if( file[i].size > (this.limitSize * 1024)){
          this.errMessage = 'حجم می بایستی کمتر از 200 کیلوبایت باشد';
          this.errorMessages.emit(this.errMessage);
        }
        if(this.fileTypes.findIndex(x => x === file[i].type) !== -1 && file[i].size < (this.limitSize * 1024)){
          this.isLoading=true;
          setTimeout(() => {
            this.errMessage ='';
            this.errorMessages.emit(this.errMessage);

           this.image = this.sanitizer.bypassSecurityTrustUrl(
             window.URL.createObjectURL(file[0]));

          
               this.isLoading=false;

               this.errMessage ='';

          }, 500);
        }


          }


        }


        }

    }






