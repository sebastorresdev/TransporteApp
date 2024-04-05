import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatViewComponent } from './seat-view.component';

describe('SeatViewComponent', () => {
  let component: SeatViewComponent;
  let fixture: ComponentFixture<SeatViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeatViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
