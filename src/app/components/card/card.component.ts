import { Pokemon, PokemonService } from 'src/app/pokemon.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 
  @Input() pokemonData: Pokemon | undefined;

constructor(private pokemonService: PokemonService) {}

}


