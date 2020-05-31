import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildrenDemoComponent } from './view-children-demo.component';

describe('ViewChildrenDemoComponent', () => {
  let component: ViewChildrenDemoComponent;
  let fixture: ComponentFixture<ViewChildrenDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildrenDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildrenDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
