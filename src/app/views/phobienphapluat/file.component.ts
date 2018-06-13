import { Component, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})

//tên của component là cái cần gọi như class trong C#
export class FileComponent implements OnInit {
  listFilter: string;
  modalTitle: string;

  constructor() { }

  ngOnInit() {
    this.modalTitle = 'Thông tin phổ biến pháp luật';
  }
  criteriaChange(value: string): void {
    // if (value != '[object Event]')
    //   this.listFilter = value;
    console.log(value.toString());
  }
}
