import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LienheComponent } from './lienhe.component';
import { LienhePipe } from './lienhe.pipe';
import { Routes,RouterModule } from '@angular/router';
import { SearchComponent, SearchModule } from '../../core/shared/search.component';
import { ModalModule } from 'ngx-bootstrap/modal';

const routes: Routes = [
  {
    path: '',
    component: LienheComponent,
    data: {
      title: 'Liên hệ'
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
  declarations: [LienheComponent, LienhePipe]
})
export class LienheModule { }
