import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileComponent } from './file.component';
import { FilePipe } from './file.pipe';
import { Routes,RouterModule } from '@angular/router';
import { SearchComponent, SearchModule } from '../../core/shared/search.component';
import { ModalModule } from 'ngx-bootstrap/modal';

const routes: Routes = [
  {
    path: '',
    component: FileComponent,
    data: {
      title: 'Tài liệu phổ biến pháp luật'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    SearchModule,
    ModalModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [FileComponent, FilePipe]
})
export class FileModule { }