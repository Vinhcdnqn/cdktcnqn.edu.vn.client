import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationtypeComponent } from './informationtype.component';

describe('InformationtypeComponent', () => {
  let component: InformationtypeComponent;
  let fixture: ComponentFixture<InformationtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
