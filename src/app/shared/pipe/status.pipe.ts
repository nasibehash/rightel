
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'statusPipe'
})
export class StatusPipe implements PipeTransform {
  transform(conditions) {

    switch (conditions.type) {
      case 'icons':
        switch (conditions.value) {
          case 0:
            return 'c-purple fa fa-exclamation-triangle'
          case 1:
            return 'c-green fa fa-check';
            case 2:
            return 'c-blue2 fa fa-clock-o';
            case 3:
              return 'c-red fa fa-exclamation-triangle';
          default:
            return 'c-purple fa fa-exclamation-triangle'
        }
        case 'colors':
          switch (conditions.value) {
            case 0:
              return 'c-purple'
            case 1:
              return 'c-green';
              case 2:
              return 'c-blue2';
              case 3:
                return 'c-red';
            default:
              return 'c-purple'
          }
        case 'status':
          switch (conditions.value) {

            case 1:
              return 'ثبت شد';
              case 2:
              return 'در حال بررسی';
              case 3:
                return 'مرجوع';
                case 4:
                  return 'رد شد';
            default:
              return 'خطا'
          }
          case 'badge':
            switch(conditions.value){

              case 1:
                return 'success';
                case 2:
                return 'warning';
                case 3:
                  return 'danger';
              default:
                return 'info'
            }
            case 'active':
              switch (conditions.value) {

                case true:
                  return 'فعال';
                  case false:
                  return 'غیر فعال';

                default:
                  return ''
              }
              case 'activeBadge':
                switch(conditions.value){

                  case true:
                    return 'success';
                    case false:
                    return 'danger';

                  default:
                    return ''
                }
      default:
        break;
    }

  }
}


