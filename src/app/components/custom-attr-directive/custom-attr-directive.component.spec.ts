import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAttrDirectiveComponent } from './custom-attr-directive.component';

describe('CustomAttrDirectiveComponent', () => {
  let component: CustomAttrDirectiveComponent;
  let fixture: ComponentFixture<CustomAttrDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomAttrDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAttrDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
