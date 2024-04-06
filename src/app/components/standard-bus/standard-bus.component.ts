import { Component } from '@angular/core';
import { SeatComponent } from '../seat/seat.component';
import { StairComponent } from '../stair/stair.component';
import { ToiletComponent } from '../toilet/toilet.component';

@Component({
  selector: 'app-standard-bus',
  standalone: true,
  imports: [
    SeatComponent,
    StairComponent,
    ToiletComponent
  ],
  templateUrl: './standard-bus.component.html',
  styleUrl: './standard-bus.component.css'
})
export class StandardBusComponent {
  selectedSeats: { floorNumber: string, seatNumber: string }[] = [];

  onSeatClicked(seat: { floorNumber: string, seatNumber: string }) {
    const index = this.selectedSeats.findIndex(s => s.floorNumber === seat.floorNumber && s.seatNumber === seat.seatNumber);
    if (index !== -1) {
      this.selectedSeats.splice(index, 1); // Eliminar si ya estaba seleccionado
      console.log('elimino');
    } else {
      this.selectedSeats.push(seat); // Agregar si no estaba seleccionado
      console.log('agrego');
    }

    console.log(this.selectedSeats);
  }
}
