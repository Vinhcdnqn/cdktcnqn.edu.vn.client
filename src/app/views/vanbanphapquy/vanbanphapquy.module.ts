import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VanbanphapquyPipe } from './vanbanphapquy.pipe';
import { VanbanphapquyComponent } from './vanbanphapquy.component';
import { Routes,RouterModule } from '@angular/router';
import { SearchComponent, SearchModule } from '../../core/shared/search.component';
import { ModalModule } from 'ngx-bootstrap/modal';
const routes: Routes = [
  {
    path: '',
    component: VanbanphapquyComponent,
    data: {
      title: 'Văn bản pháp quy'
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
  declarations: [
    VanbanphapquyComponent,
    VanbanphapquyPipe
  ]
})
export class VanbanphapquyModule { }
