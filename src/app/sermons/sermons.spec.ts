import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sermons } from './sermons';

describe('Sermons', () => {
  let component: Sermons;
  let fixture: ComponentFixture<Sermons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sermons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sermons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
