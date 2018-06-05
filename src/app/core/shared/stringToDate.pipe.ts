import { PipeTransform, Pipe, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Pipe({
    name: 'stringToDate' 
})
export class StringToDatePipe implements PipeTransform {
    
    constructor() {}
    
    transform(value: string): Date {
        let reggie = /(\d{4})-(\d{2})-(\d{2})/;
        let dateArray = reggie.exec(value);
        let dateObject = new Date(
            (+dateArray[1]),
            ((+dateArray[2])) - 1,
            (+dateArray[3])
        );
        return dateObject;
    }
}

@NgModule({
    imports: [
        FormsModule
      ],
    declarations: [StringToDatePipe],
    exports: [StringToDatePipe]
})
export class StringToDatePipeModule { }