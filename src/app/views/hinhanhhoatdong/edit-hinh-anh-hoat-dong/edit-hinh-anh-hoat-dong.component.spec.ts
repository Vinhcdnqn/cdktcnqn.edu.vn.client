import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHinhAnhHoatDongComponent } from './edit-hinh-anh-hoat-dong.component';

describe('EditHinhAnhHoatDongComponent', () => {
  let component: EditHinhAnhHoatDongComponent;
  let fixture: ComponentFixture<EditHinhAnhHoatDongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHinhAnhHoatDongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHinhAnhHoatDongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
