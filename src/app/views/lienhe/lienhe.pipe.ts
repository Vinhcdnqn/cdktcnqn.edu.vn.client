import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lienhe'
})
export class LienhePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
