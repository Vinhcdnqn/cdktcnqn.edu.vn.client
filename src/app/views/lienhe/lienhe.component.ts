import { Component, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-lienhe',
  templateUrl: './lienhe.component.html',
  styleUrls: ['./lienhe.component.scss']
})
export class LienheComponent implements OnInit {
  listFilter: string;
  modalTitle: string;

  constructor() { }

  ngOnInit() {
    this.modalTitle = 'Thông tin liên hệ';
  }
  criteriaChange(value: string): void {
    // if (value != '[object Event]')
    //   this.listFilter = value;
    console.log(value.toString());
  }
}
