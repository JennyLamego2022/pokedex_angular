import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardDetailsService {
  private mostrarDetalhesSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  mostrarDetalhes$ = this.mostrarDetalhesSubject.asObservable();

  private cardPesquisadoSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  cardPesquisado$ = this.cardPesquisadoSubject.asObservable();

  toggleDetalhes(): void {
    this.mostrarDetalhesSubject.next(!this.mostrarDetalhesSubject.value);
  }

  setCardPesquisado(card: any): void {
    this.cardPesquisadoSubject.next(card);
  }
  
  constructor() { }
  
}
