import { Component, OnInit, ViewChild } from '@angular/core';

import { TabsetComponent } from 'ngx-bootstrap';
@Component({
  selector: 'app-binhluan',
  templateUrl: './binhluan.component.html',
  styleUrls: ['./binhluan.component.scss']
})
export class BinhluanComponent implements OnInit {
  public entity: any;
  constructor() { }

  ngOnInit() {
  }
  @ViewChild('staticTabs') staticTabs: TabsetComponent;
 
  selectTab(tab_id: number) {
    this.staticTabs.tabs[tab_id].active = true;
  }

  public keyupHandlertFunction(e: any) {
    this.entity.Content = e;
  }
}
