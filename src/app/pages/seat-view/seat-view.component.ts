import { Component } from '@angular/core';
import { BusComponent } from '../../components/bus/bus.component';
import { HeaderComponent } from '../../components/header/header.component';
import { StepperComponent } from '../../components/stepper/stepper.component';

@Component({
  selector: 'app-seat-view',
  standalone: true,
  imports: [
    BusComponent,
    HeaderComponent,
    StepperComponent
  ],
  templateUrl: './seat-view.component.html',
  styleUrl: './seat-view.component.css'
})
export class SeatViewComponent {

}
