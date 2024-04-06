import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardBusComponent } from './standard-bus.component';

describe('StandardBusComponent', () => {
  let component: StandardBusComponent;
  let fixture: ComponentFixture<StandardBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardBusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandardBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
