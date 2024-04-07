import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seat',
  standalone: true,
  imports: [],
  templateUrl: './seat.component.html',
  styleUrl: './seat.component.css'
})
export class SeatComponent {
  @Input() seatNumber:string;
  @Input() floorNumber:string;
  @Input() isAvailable: boolean;
  selectedSeatNumber:string='';
  
  @Output() datosEnviados = new EventEmitter<{ seatNumber: string, floorNumber: string }>();
  selectedSeat = false;
  @Input() seatSelectionAvailable = true;
  
  constructor() {
    this.isAvailable = true;
    this.seatNumber = '';
    this.floorNumber = '';
  }

  onSeatClick(seatNumber : string, floorNumber:string) {
    if (this.selectedSeat || this.seatSelectionAvailable) {
      this.selectedSeat = !this.selectedSeat;
    }
    this.selectedSeatNumber = seatNumber;
    this.datosEnviados.emit({ seatNumber: seatNumber, floorNumber: floorNumber });
  }
}
