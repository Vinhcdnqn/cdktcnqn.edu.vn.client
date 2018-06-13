import { Component, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-hoidap',
  templateUrl: './hoidap.component.html',
  styleUrls: ['./hoidap.component.scss']
})
export class HoidapComponent implements OnInit {
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
