import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';
import { CategoryPipe } from './category.pipe';
import {FormsModule} from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    data: {
      title: 'category'
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
  declarations: [CategoryComponent, CategoryPipe]
 
})
export class CategoryModule { 

 

}
