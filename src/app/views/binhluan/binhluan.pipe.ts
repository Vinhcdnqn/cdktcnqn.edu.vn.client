import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'binhluan'
})
export class BinhluanPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
