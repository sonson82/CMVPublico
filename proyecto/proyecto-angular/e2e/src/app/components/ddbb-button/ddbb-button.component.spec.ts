import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdbbButtonComponent } from './ddbb-button.component';

describe('DdbbButtonComponent', () => {
  let component: DdbbButtonComponent;
  let fixture: ComponentFixture<DdbbButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdbbButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DdbbButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
