import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HinhanhhoatdongComponent } from './hinhanhhoatdong.component';
import { HinhanhhoatdongPipe } from './hinhanhhoatdong.pipe';
import { Routes, RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SearchComponent, SearchModule } from '../../core/shared/search.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EditHinhAnhHoatDongComponent } from './edit-hinh-anh-hoat-dong/edit-hinh-anh-hoat-dong.component';

const routes: Routes = [
  {
    path: '',
    component: HinhanhhoatdongComponent,
    data: {
      title: 'Hình ảnh hoạt động'
    }
  },
  {
    path: 'EditImg',
    component: EditHinhAnhHoatDongComponent,
    children: [
      {
        path: '',
        component: EditHinhAnhHoatDongComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    SearchModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [HinhanhhoatdongComponent, EditHinhAnhHoatDongComponent, HinhanhhoatdongPipe]
})
export class HinhanhhoatdongModule { }
