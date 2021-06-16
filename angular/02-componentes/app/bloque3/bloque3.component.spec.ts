import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bloque3Component } from './bloque3.component';

describe('Bloque3Component', () => {
  let component: Bloque3Component;
  let fixture: ComponentFixture<Bloque3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bloque3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bloque3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
