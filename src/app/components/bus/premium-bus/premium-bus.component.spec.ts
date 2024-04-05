import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumBusComponent } from './premium-bus.component';

describe('PremiumBusComponent', () => {
  let component: PremiumBusComponent;
  let fixture: ComponentFixture<PremiumBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiumBusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PremiumBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
