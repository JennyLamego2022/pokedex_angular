import { Component, HostListener,ElementRef } from '@angular/core';
import { CardDetailsService } from 'src/app/services/card-details.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {
  mostrarDetalhes: boolean = false;
  

  constructor(private cardDetailsService: CardDetailsService, private elementRef: ElementRef) {
    this.cardDetailsService.mostrarDetalhes$.subscribe(mostrarDetalhes => {
      this.mostrarDetalhes = mostrarDetalhes;
    });
  }

  // @HostListener('document:click', ['$event'])
  // onDocumentClick(event: MouseEvent): void {
  //   const clickedInsideComponent = this.elementRef.nativeElement.contains(event.target);
  //   if (!clickedInsideComponent) {
  //     this.cardDetailsService.toggleDetalhes();
  //   }
  // }
}
