import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { FilterBoxComponent } from '../../components/filter-box/filter-box.component';
import { CardComponent } from '../../components/card/card.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [
    HeaderComponent,
    CarouselComponent,
    FilterBoxComponent,
    CardComponent,
    FooterComponent
  ],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css'
})
export class HomeViewComponent {
}
