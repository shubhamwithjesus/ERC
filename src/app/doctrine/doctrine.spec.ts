import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Doctrine } from './doctrine';

describe('Doctrine', () => {
  let component: Doctrine;
  let fixture: ComponentFixture<Doctrine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Doctrine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Doctrine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
