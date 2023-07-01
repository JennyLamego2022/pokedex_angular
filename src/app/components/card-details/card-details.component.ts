import { Component } from '@angular/core';
import { DetailsPokemon, PokemonService } from 'src/app/pokemon.service';
import { CardDetailsService } from 'src/app/services/card-details.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {
  mostrarDetalhes: boolean = false;
  pokemonData: any;
  pokemonDetails: DetailsPokemon | null = null;
  
  ngOnInit() {
    this.getPokemonDetailsById(6); 
  }

  constructor(
    private cardDetailsService: CardDetailsService, 
    private pokemonService: PokemonService, 
    ) {
    this.cardDetailsService.mostrarDetalhes$.subscribe(mostrarDetalhes => {
      this.mostrarDetalhes = mostrarDetalhes;
    });
  }


  toggleDetalhes() {
    this.cardDetailsService.toggleDetalhes();
  }

  getPokemonDetailsById(pokemonId: number) {
    this.pokemonService.getPokemonDetailsById(pokemonId).subscribe(
      (pokemonDetails: DetailsPokemon) => {
        this.pokemonDetails = pokemonDetails;
        console.log('Detalhes do Pokémon:', pokemonDetails.name);
        console.log('Detalhes do Pokémon:', pokemonDetails.stats.hp);
        console.log('Detalhes do Pokémon:', pokemonDetails.stats.attack);
        // console.log('Detalhes do Pokémon:', pokemonDetails.types[0].type.name);
        console.log('Detalhes do Pokémon:', pokemonDetails);
        console.log('Detalhes do Pokémon:', pokemonDetails.description);
        // console.log('Detalhes do Pokémon:', pokemonDetails.evolutions);
      },
      (error: any) => {
        console.log('Erro ao obter os detalhes do Pokémon:', error);
      }
    );
  }

}
