// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Pokemon, PokemonService } from 'src/app/pokemon.service';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit{
  pokemonData: any;
  // pokemonList: any[] = [];
  pokemonList: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemonList();
    this.getPokemonData();
  }

  getPokemonData() {
    this.pokemonService.getPokemonData('raticate').subscribe(
      (pokemonData: any) => {
        this.pokemonData = pokemonData;
      },
      error => {
        console.log('Ocorreu um erro:', error);
      }
    );
  }

  getPokemonList(){
    this.pokemonService.getPokemonList().subscribe(
      (pokemonList: Pokemon[]) => {
      this.pokemonList = pokemonList;
      // this.getPokemonDetails();
      console.log('FUNCIONANDO', pokemonList)
      },
      (error: any) => {
        console.log('Ocorreu um erro a obter a lista de Pokemons:', error)
      }
    );
  }

  // getPokemonDetails(): void {
  //   for (const pokemon of this.pokemonList) {
  //     this.pokemonService.getPokemonData(pokemon.id).subscribe(
  //       (pokemonData: Pokemon) => {
  //         pokemon.height = pokemonData.height;
  //         pokemon.weight = pokemonData.weight;
  //         pokemon.sprites = pokemonData.sprites;
  //       },
  //       (error: any) => {
  //         console.log(`Ocorreu um erro ao obter os detalhes do Pokemon ${pokemon.name}:`, error);
  //       }
  //     );
  //   }
  // }

  // getPokemonDetails(): void {
  //   for (const pokemon of this.pokemonList) {
  //     if (pokemon.url){
  //       this.pokemonService.getPokemonData(pokemon.url).subscribe(
  //         (pokemonData: Pokemon) => {
  //           pokemon.height = pokemonData.height;
  //           pokemon.weight = pokemonData.weight;
  //           pokemon.sprites = pokemonData.sprites;
  //           console.log('detalhes pokemom',pokemon.height)
  //         },
  //         (error: any) => {
  //           console.log(`Ocorreu um erro ao abrir os detalhes do Pokemon ${pokemon.name}:`, error)
  //         }
  //       );
  //     }
  //   }
  // }

  // getPokemonList() {
  //   this.pokemonService.getPokemonList().subscribe(data => {
  //     this.pokemonList = data.results;
  //   });
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
