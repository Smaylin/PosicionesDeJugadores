import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clase1DeportistasComponent } from './clase1-deportistas.component';

describe('Clase1DeportistasComponent', () => {
  let component: Clase1DeportistasComponent;
  let fixture: ComponentFixture<Clase1DeportistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Clase1DeportistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Clase1DeportistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
