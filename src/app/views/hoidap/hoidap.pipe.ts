import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hoidap'
})
export class HoidapPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
