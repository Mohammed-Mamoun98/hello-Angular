import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStructDirectiveComponent } from './custom-struct-directive.component';

describe('CustomStructDirectiveComponent', () => {
  let component: CustomStructDirectiveComponent;
  let fixture: ComponentFixture<CustomStructDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomStructDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomStructDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
