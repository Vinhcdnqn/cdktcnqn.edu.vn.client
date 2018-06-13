import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanbanphapquyComponent } from './vanbanphapquy.component';

describe('VanbanphapquyComponent', () => {
  let component: VanbanphapquyComponent;
  let fixture: ComponentFixture<VanbanphapquyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanbanphapquyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanbanphapquyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
