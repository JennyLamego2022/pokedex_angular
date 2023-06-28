import { Pokemon, PokemonService } from 'src/app/pokemon.service';
import { Component, Input } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // @Input() pokemonData: TemplateCard = {} as TemplateCard;
  // @Input() pokemonData: Pokemon = {} as Pokemon;
  // @Input() pokemonName: string = '';
  // pokemonData: Pokemon | undefined;
  // pokemonName = 'pikachu';
  // pokemonHeight = '';
  // pokemonWeight = '';
  @Input() pokemonData: Pokemon | undefined;

constructor(private pokemonService: PokemonService) {}

  // ngOnInit(): void {
  //   this.getPokemonInfo();

  // }

  // getPokemonInfo() {
  //   this.pokemonService.getPokemonInfo(this.pokemonName)
  //     .subscribe(data => {
  //       this.pokemonHeight = data.height;
  //       this.pokemonWeight = data.weight;
  //     });
  // }

  // getPokemonHeight(url: string) {
  //   const pokemonId = url.split('/')[6];
  //   return this.pokemonService.getPokemonInfo(pokemonId).pipe(
  //     map(data => data.height)
  //   );
  // }

  // getPokemonWeight(url: string) {
  //   const pokemonId = url.split('/')[6];
  //   return this.pokemonService.getPokemonInfo(pokemonId).pipe(
  //     map(data => data.weight)
  //   );
  // }
  }

  // getPokemonData(): void {
  //   this.pokemonService.getPokemonData(this.pokemonName).subscribe(
  //     (pokemonData: Pokemon) => {
  //       this.pokemonData = pokemonData;
  //     },
  //     (error: any) => {
  //       console.log('Ocorreu um erro:', error);
  //     }
  //   );
  // }

