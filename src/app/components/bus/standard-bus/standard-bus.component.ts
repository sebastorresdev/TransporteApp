import { Component } from '@angular/core';
import { SeatComponent } from '../../seat/seat.component';
import { StairComponent } from '../../stair/stair.component';
import { ToiletComponent } from '../../toilet/toilet.component';

@Component({
  selector: 'app-standard-bus',
  standalone: true,
  imports: [
    SeatComponent,
    StairComponent,
    ToiletComponent
  ],
  templateUrl: './standard-bus.component.html',
  styleUrl: '../../bus/bus.component.css'
})
export class StandardBusComponent {

}
