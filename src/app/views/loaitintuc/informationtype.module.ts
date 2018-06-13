import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationtypeComponent } from './informationtype.component';
import { InformationtypePipe } from './informationtype.pipe';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap';
const routes: Routes = [
  {
    path: '',
    component: InformationtypeComponent,
    data: {
      title: 'informationtype'
    }
  }
];
@NgModule({
  imports: [
    
    CommonModule,
    BsDatepickerModule.forRoot(),
    NgbModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
   FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InformationtypeComponent,InformationtypePipe]
})
export class InformationtypeModule { }
