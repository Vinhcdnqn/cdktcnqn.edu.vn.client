import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'file'
})
export class FilePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
