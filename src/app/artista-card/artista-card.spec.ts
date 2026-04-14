import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistaCard } from './artista-card';

describe('ArtistaCard', () => {
  let component: ArtistaCard;
  let fixture: ComponentFixture<ArtistaCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistaCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtistaCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
