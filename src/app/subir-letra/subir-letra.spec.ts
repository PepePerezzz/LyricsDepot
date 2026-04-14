import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirLetra } from './subir-letra';

describe('SubirLetra', () => {
  let component: SubirLetra;
  let fixture: ComponentFixture<SubirLetra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubirLetra],
    }).compileComponents();

    fixture = TestBed.createComponent(SubirLetra);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
