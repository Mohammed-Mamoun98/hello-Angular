import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindungsComponent } from './bindungs.component';

describe('BindungsComponent', () => {
  let component: BindungsComponent;
  let fixture: ComponentFixture<BindungsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindungsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindungsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
