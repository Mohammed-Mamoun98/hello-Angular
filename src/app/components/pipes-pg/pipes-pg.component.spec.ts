import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesPGComponent } from './pipes-pg.component';

describe('PipesPGComponent', () => {
  let component: PipesPGComponent;
  let fixture: ComponentFixture<PipesPGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesPGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesPGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
