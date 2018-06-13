import { Component, OnInit,ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-vanbanphapquy',
  templateUrl: './vanbanphapquy.component.html',
  styleUrls: ['./vanbanphapquy.component.scss']
})
export class VanbanphapquyComponent implements OnInit {
  listFilter: string;
  modalTitle: string;

  constructor() { 
    
  }

  ngOnInit() {
    this.modalTitle = 'Thông tin văn bản pháp quy';
  }

  criteriaChange(value: string): void {
    // if (value != '[object Event]')
    //   this.listFilter = value;
  }
}
