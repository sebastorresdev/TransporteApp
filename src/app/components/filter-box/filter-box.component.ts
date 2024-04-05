import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-filter-box',
  standalone: true,
  imports: [],
  templateUrl: './filter-box.component.html',
  styleUrl: './filter-box.component.css'
})
export class FilterBoxComponent {
  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      // Agrega el listener para el evento 'resize'
      window.addEventListener('resize', this.updateStickyBackground);

      // Agrega el listener para el evento 'scroll'
      window.addEventListener('scroll', this.updateStickyBackground);

      // Inicializa el datepicker
      $('.st-date').datepicker({
        format: "dd/mm/yyyy",
        startDate: "hoy",
        language: "es",
        autoclose: true,
        orientation: "bottom auto"
      });
    }
    
  }

  updateStickyBackground() {
    const filter = document.querySelector('.st-filter') as HTMLElement;
    const filterBox = document.querySelector('.st-filter__box') as HTMLElement;

    const distanceFromTop = filter.offsetTop - window.scrollY;

    if (distanceFromTop <= 0) {
        filter.classList.add('stuck');
        filterBox.classList.add('bg');
    } else {
        filter.classList.remove('stuck');
        filterBox.classList.remove('bg');
    }
  }
}
