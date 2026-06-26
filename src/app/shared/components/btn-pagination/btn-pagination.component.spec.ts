import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPaginationComponent } from './btn-pagination.component';

describe('BtnPaginationComponent', () => {
  let component: BtnPaginationComponent;
  let fixture: ComponentFixture<BtnPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnPaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
