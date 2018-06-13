import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BinhluanComponent } from './binhluan.component';
import { BinhluanPipe } from './binhluan.pipe';



import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { TinyComponent } from '../../views/tiny/tiny.component';
import { PaginationModule } from 'ngx-bootstrap';

import { TabsModule } from 'ngx-bootstrap';
const routes: Routes = [
  {
    path: '',
    component: BinhluanComponent,
    data: {
      title: 'binhluan'
    }
  }
];
@NgModule({
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
   // NgxEditorModule,
   NgbModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [BinhluanComponent, BinhluanPipe,TinyComponent]
})
export class BinhluanModule { }
