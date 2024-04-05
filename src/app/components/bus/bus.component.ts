import { Component, Input } from '@angular/core';
import { EconomicBusComponent } from './economic-bus/economic-bus.component';
import { PremiumBusComponent } from './premium-bus/premium-bus.component';
import { StandardBusComponent } from './standard-bus/standard-bus.component';
import { VipBusComponent } from './vip-bus/vip-bus.component';

@Component({
  selector: 'app-bus',
  standalone: true,
  imports: [
    EconomicBusComponent, 
    PremiumBusComponent,
    StandardBusComponent,
    VipBusComponent
  ],
  templateUrl: './bus.component.html',
  styleUrl: './bus.component.css'
})
export class BusComponent {
  @Input() serviceType = '';
  constructor() {
    this.serviceType = 'standard';
  }
}
