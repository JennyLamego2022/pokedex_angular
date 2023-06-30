import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardDetailsService {
  private mostrarDetalhesSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  mostrarDetalhes$ = this.mostrarDetalhesSubject.asObservable();

  toggleDetalhes(): void {
    this.mostrarDetalhesSubject.next(!this.mostrarDetalhesSubject.value);
  }
  constructor() { }
}
