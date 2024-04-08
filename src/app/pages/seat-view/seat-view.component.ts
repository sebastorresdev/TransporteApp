import { Component, ElementRef, Output, ViewChild, EventEmitter } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { StepperComponent } from '../../components/stepper/stepper.component';
import { AccordionModule } from 'primeng/accordion';
import { EconomicBusComponent } from '../../components/economic-bus/economic-bus.component';
import { VipBusComponent } from '../../components/vip-bus/vip-bus.component';
import { PremiumBusComponent } from '../../components/premium-bus/premium-bus.component';
import { StandardBusComponent } from '../../components/standard-bus/standard-bus.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { StepperModule} from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { query } from 'express';

@Component({
  selector: 'app-seat-view',
  standalone: true,
  imports: [
    HeaderComponent,
    StepperComponent,
    AccordionModule,
    EconomicBusComponent,
    VipBusComponent,
    PremiumBusComponent,
    StandardBusComponent,
    ToastModule,
    StepperModule,
    ButtonModule,
    MessagesModule
    ],
  providers: [MessageService],
  templateUrl: './seat-view.component.html',
  styleUrl: './seat-view.component.css'
})
export class SeatViewComponent {
  isEnable = false;
  seatSelectionAvailable = true;
  @ViewChild('#validationCustom02') miElementoRef!: ElementRef;

  constructor(private messageService: MessageService, private elementRef: ElementRef) {
    
  }
  // DEBO TENER AQUI LOS PRECIOS POR ACIENTOS, AL MOMENTO QUE EL USUARIO SELECCIONE UN ASIENTO DEBE OBTENER EL PRECIOS
  // Y MOSTRAR EN LA VISTA
  // ARRAY DE OBJETO QUE CONTENGA EL ASIENTO, NUMERO_PISO, PRECIO

  // SE NECESITA TENER EL ORIGEN Y DESTINO Y UN ARRAY DE LOS DESTINOS INTERMEDIOS, HORA DE SALIDA Y HORA DE LLEGADA ASI COMO 
  // LA FECHA DE SALIDA

  // SE NECESITA EL PRECIO GLOBAL PARA QUE AL SUMAR EL PRECIO DEL ASIENTO SELECCIONADO SE MUESTRE EN LA VISTA

  items: { floorNumber: string, seatNumber: string }[] = [];

  // en algun evento
  onActionFromParent(seat: { floorNumber: string, seatNumber: string }) {

    const index = this.items.findIndex(s => s.floorNumber === seat.floorNumber && s.seatNumber === seat.seatNumber);

    if (index !== -1) {
      this.items.splice(index, 1); // Eliminar si ya estaba seleccionado
      console.log('se elimino');
    } 
    else if(this.seatSelectionAvailable) {
      this.items.push(seat); // Agregar si no estaba seleccionado
      console.log('se agrego');
    }
    else {
      this.messageService.add({ severity: 'warn', summary: 'Límite máximo', detail: 'Puede seleccionar un máximo de 5 asientos en un autobús.' });
    }

    this.seatSelectionAvailable = this.items.length > 4 ? false : true;

    console.log(this.items);
    this.isEnable = this.items.length > 0 ? true : false;

  }

  showError() {
    this.messageService.add({ severity: 'warn', summary: 'Seleccione asiento(s).', detail: 'Seleccione asiento(s) de salida.'});
  }

  condicion():boolean {

    const form : HTMLFormElement | null = this.elementRef.nativeElement.querySelector('#myForm');
    const inputElement1: HTMLSelectElement | null = this.elementRef.nativeElement.querySelector('#validationCustom01');
    const inputElement2: HTMLInputElement | null = this.elementRef.nativeElement.querySelector('#validationCustom02');
    const inputElement3: HTMLInputElement | null = this.elementRef.nativeElement.querySelector('#validationCustom03');
    const inputElement4: HTMLInputElement | null = this.elementRef.nativeElement.querySelector('#validationCustom04');
    const inputElement5: HTMLInputElement | null = this.elementRef.nativeElement.querySelector('#validationCustom05');
    const inputElement6: HTMLSelectElement | null = this.elementRef.nativeElement.querySelector('#validationCustom06');
    const inputElement7: HTMLSelectElement | null = this.elementRef.nativeElement.querySelector('#validationCustom07');


    if (inputElement1?.value == '' || inputElement2?.value == '' 
      || inputElement3?.value == '' || inputElement4?.value == ''
      || inputElement5?.value == '' || inputElement6?.value == ''
      || inputElement7?.value == ''
    ) {
      // Obtener y mostrar el valor del input
      form?.classList.add('was-validated');
      return false;
    }
    return true;
  }

}
