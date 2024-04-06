import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { StepperComponent } from '../../components/stepper/stepper.component';
import { AccordionModule } from 'primeng/accordion';
import { EconomicBusComponent } from '../../components/economic-bus/economic-bus.component';
import { VipBusComponent } from '../../components/vip-bus/vip-bus.component';
import { PremiumBusComponent } from '../../components/premium-bus/premium-bus.component';
import { StandardBusComponent } from '../../components/standard-bus/standard-bus.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

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
  ],
  providers: [MessageService],
  templateUrl: './seat-view.component.html',
  styleUrl: './seat-view.component.css'
})
export class SeatViewComponent {
  isEnable = false;

  constructor(private messageService: MessageService) {}
  // DEBO TENER AQUI LOS PRECIOS POR ACIENTOS, AL MOMENTO QUE EL USUARIO SELECCIONE UN ASIENTO DEBE OBTENER EL PRECIOS
  // Y MOSTRAR EN LA VISTA

  // SE NECESITA TENER EL ORIGEN Y DESTINO Y UN ARRAY DE LOS DESTINOS INTERMEDIOS, HORA DE SALIDA Y HORA DE LLEGADA ASI COMO 
  // LA FECHA DE SALIDA

  items: { floorNumber: string, seatNumber: string }[] = [];

  // en algun evento
  onActionFromParent(seat: { floorNumber: string, seatNumber: string }) {
    const index = this.items.findIndex(s => s.floorNumber === seat.floorNumber && s.seatNumber === seat.seatNumber);
    if (index !== -1) {
      this.items.splice(index, 1); // Eliminar si ya estaba seleccionado
      console.log('se elimino');
    } else {
      this.items.push(seat); // Agregar si no estaba seleccionado
      console.log('se agrego');
    }
    console.log(this.items);
    this.isEnable = this.items.length > 0 ? true : false; 

  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
    alert('si dio click');
}
}
