import { Component, Output,EventEmitter, Input } from '@angular/core';
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
  @Input() seatSelectionAvailable = true;

  arraySeats : {seatNumber:number, floorNumber:number, seatAvailable:boolean}[] = [];
  ngOnInit() {
    for (let i = 1; i <= 44; i++) {
      this.arraySeats.push({seatNumber: i, floorNumber: 1,seatAvailable: Math.random() < 0.5 });
    }
  }    

  onSeatClicked(seat: { floorNumber: string, seatNumber: string }) {
    this.dataExit.emit(seat);
  }

  isSeatAviable(seatNumber:number, floorNumber : number) {
    const seat = this.arraySeats.find(seat => seat.seatNumber === seatNumber && seat.floorNumber === floorNumber);
    if (seat != null) {
      return seat.seatAvailable;
    }
    return false;
  }
}
