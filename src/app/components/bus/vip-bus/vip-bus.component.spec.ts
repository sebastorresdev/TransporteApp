import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipBusComponent } from './vip-bus.component';

describe('VipBusComponent', () => {
  let component: VipBusComponent;
  let fixture: ComponentFixture<VipBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VipBusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VipBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
