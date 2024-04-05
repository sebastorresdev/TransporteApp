import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicBusComponent } from './economic-bus.component';

describe('EconomicBusComponent', () => {
  let component: EconomicBusComponent;
  let fixture: ComponentFixture<EconomicBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EconomicBusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EconomicBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
