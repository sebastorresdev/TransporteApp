import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeViewComponent } from './pages/home-view/home-view.component';
import { SeatViewComponent } from './pages/seat-view/seat-view.component';
import { StepperComponent } from './components/stepper/stepper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeViewComponent, SeatViewComponent, StepperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TransporteTorresWeb';
}
