import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators,FormBuilder, ValidatorFn,AbstractControl  } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { HeaderComponent } from '../header/header.component';
import { BusComponent } from '../bus/bus.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    BusComponent,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent {
}