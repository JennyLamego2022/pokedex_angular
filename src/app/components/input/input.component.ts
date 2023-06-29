import { PokemonService } from './../../pokemon.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  pokemonName: string = '';

  constructor(private PokemonService: PokemonService) { }

  // searchPokemon(pokemonName: string) {
  //   this.PokemonService.getPokemonData(pokemonName).subscribe(
  //     (pokemonData: any) => {
  //       console.log('Dados do Pokemon:', pokemonData);
  //     },
  //     error => {
  //       console.log('Ocorreu um erro:', error)
  //     }
  //   )
  // }

}
