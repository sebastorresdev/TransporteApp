import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators,FormBuilder, ValidatorFn,AbstractControl  } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent {
}