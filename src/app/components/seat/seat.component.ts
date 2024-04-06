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
  
  constructor() {
    this.isAvailable = true;
    this.seatNumber = '';
    this.floorNumber = '';
  }

  onSeatClick(seatNumber : string, floorNumber:string) {
    this.selectedSeatNumber = seatNumber;
    this.selectedSeat = !this.selectedSeat;
    this.datosEnviados.emit({ seatNumber: seatNumber, floorNumber: floorNumber });
  }
}
