import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { InformationComponent } from './information.component';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { TabsetComponent } from 'ngx-bootstrap';
//import { NgxEditorModule } from 'ngx-editor';
//import { EditorModule } from '@tinymce/tinymce-angular';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { Tiny1Component } from '../../views/tiny1/tiny1.component';
import { PaginationModule } from 'ngx-bootstrap';

import { TabsModule } from 'ngx-bootstrap';
import { InformationPipe } from './information.pipe';
const routes: Routes = [
  {
    path: '',
    component: InformationComponent,
    data: {
      title: 'information'
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
  declarations: [InformationComponent,Tiny1Component, InformationPipe]
})
export class InformationModule { }
