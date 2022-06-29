import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Opdracht1cComponent } from './opdracht1c.component';

describe('Opdracht1cComponent', () => {
  let component: Opdracht1cComponent;
  let fixture: ComponentFixture<Opdracht1cComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Opdracht1cComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Opdracht1cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
