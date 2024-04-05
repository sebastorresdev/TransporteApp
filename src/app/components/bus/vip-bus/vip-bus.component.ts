import { Component } from '@angular/core';
import { SeatComponent } from '../../seat/seat.component';
import { StairComponent } from '../../stair/stair.component';
import { ToiletComponent } from '../../toilet/toilet.component';

@Component({
  selector: 'app-vip-bus',
  standalone: true,
  imports: [
    SeatComponent,
    StairComponent,
    ToiletComponent
  ],
  templateUrl: './vip-bus.component.html',
  styleUrl: '../../bus/bus.component.css'
})
export class VipBusComponent {

}
