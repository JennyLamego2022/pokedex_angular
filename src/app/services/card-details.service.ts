import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface DetailsPokemon{
  id: number;
  name: string;
  url?:string;
  height: number;
  weight: number;
  sprites: {
    other: {
      'official-artwork':{
        front_default:string;
      }
    }
  };
  types:{
    type:{
      name:string;
    }
  },
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
}

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
