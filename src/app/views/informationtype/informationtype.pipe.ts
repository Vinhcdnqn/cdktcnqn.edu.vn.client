import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'informationtype'
})
export class InformationtypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
