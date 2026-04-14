import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionCard } from './cancion-card';

describe('CancionCard', () => {
  let component: CancionCard;
  let fixture: ComponentFixture<CancionCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancionCard],
    }).compileComponents();

    fixture = TestBed.createComponent(CancionCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
