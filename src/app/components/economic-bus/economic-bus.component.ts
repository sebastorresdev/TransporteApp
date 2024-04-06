import { Component, Output,EventEmitter } from '@angular/core';
import { SeatComponent } from '../seat/seat.component';
import { StairComponent } from '../stair/stair.component';
import { ToiletComponent } from '../toilet/toilet.component';

@Component({
  selector: 'app-economic-bus',
  standalone: true,
  imports: [
    SeatComponent,
    StairComponent,
    ToiletComponent
  ],
  templateUrl: './economic-bus.component.html',
  styleUrl: './economic-bus.component.css'
})
export class EconomicBusComponent{
  @Output() dataExit = new EventEmitter<{ seatNumber: string, floorNumber: string }>();

  onSeatClicked(seat: { floorNumber: string, seatNumber: string }) {
    this.dataExit.emit(seat);
  }
}
