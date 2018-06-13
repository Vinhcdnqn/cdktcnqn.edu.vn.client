import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoidapComponent } from './hoidap.component';
import { HoidapPipe } from './hoidap.pipe';
import { Routes,RouterModule } from '@angular/router';
import { SearchComponent, SearchModule } from '../../core/shared/search.component';
import { ModalModule } from 'ngx-bootstrap/modal';

const routes: Routes = [
  {
    path: '',
    component: HoidapComponent,
    data: {
      title: 'Hỏi đáp'
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
  declarations: [HoidapComponent,HoidapPipe]
})
export class HoidapModule { }
