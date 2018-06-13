import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HinhanhhoatdongComponent } from './hinhanhhoatdong.component';

describe('HinhanhhoatdongComponent', () => {
  let component: HinhanhhoatdongComponent;
  let fixture: ComponentFixture<HinhanhhoatdongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HinhanhhoatdongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HinhanhhoatdongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
