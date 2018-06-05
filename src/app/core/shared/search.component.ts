import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'search-list',
    template: `                
                <div class="form-group pull-right top_search">
                    <div class="input-group">
                        <input 
                            style="border-color:#66afe9"
                            class="form-control" 
                            placeholder="Nhập từ khóa tìm kiếm" 
                            (paste)="getPasteData($event)" 
                            (keyup)="getEachChar($event.target.value)" 
                            type="text" 
                            [(ngModel)]="listFilter" />
                            <span class="input-group-btn">
                                <button style="color:white" class="btn btn-primary" type="button"><i class="fa fa-search"></i></button>                            
                            </span>
                    </div>
                </div>
           `
})

export class SearchComponent {
    listFilter: string;
    @Input() title: string;
    @Output() change: EventEmitter<string> = new EventEmitter<string>();

    getEachChar(value: any) {
        this.change.emit(value);
    }

    clearFilter() {
        this.listFilter = null;
        this.change.emit(null);
    }

    getPasteData(value: any) {
        let pastedVal = value.clipboardData.getData('text/plain');
        this.change.emit(pastedVal);
        value.preventDefault();
    }
}

@NgModule({
    imports: [
        FormsModule
      ],
    declarations: [SearchComponent],
    exports: [SearchComponent]
})
export class SearchModule { }