import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'information'
})
export class InformationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
