import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgComponentComponent } from './msg-component.component';

describe('MsgComponentComponent', () => {
  let component: MsgComponentComponent;
  let fixture: ComponentFixture<MsgComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
