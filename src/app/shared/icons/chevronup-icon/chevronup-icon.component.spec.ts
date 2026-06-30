import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChevronupIconComponent } from './chevronup-icon.component';

describe('ChevronupIconComponent', () => {
  let component: ChevronupIconComponent;
  let fixture: ComponentFixture<ChevronupIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChevronupIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChevronupIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
