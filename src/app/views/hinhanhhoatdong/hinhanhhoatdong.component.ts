import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-hinhanhhoatdong',
  templateUrl: './hinhanhhoatdong.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ],
  styleUrls: ['./hinhanhhoatdong.component.scss']
})
export class HinhanhhoatdongComponent implements OnInit {
  listFilter: string;
  modalTitle: string;
  
  constructor() { }

  ngOnInit() {
    this.modalTitle = 'Thông tin hỏi đáp';
  }
  criteriaChange(value: string): void {
    // if (value != '[object Event]')
    //   this.listFilter = value;
    console.log(value.toString());
  }
}
