import { Component, OnInit, ViewChild } from '@angular/core';

import { TabsetComponent } from 'ngx-bootstrap';



@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  public entity: any;
  
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
