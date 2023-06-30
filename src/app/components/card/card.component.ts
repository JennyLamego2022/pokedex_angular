import { Pokemon, PokemonService } from 'src/app/pokemon.service';
import { Component, Input } from '@angular/core';
import { CardDetailsService } from 'src/app/services/card-details.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() pokemonData: Pokemon | undefined;

  mostrarDetalhes: boolean = false;

constructor(private pokemonService: PokemonService, private cardDetailsService: CardDetailsService) {}

  toggleDetalhes(): void {
    this.cardDetailsService.toggleDetalhes();
    console.log('toogle')
  }
}


