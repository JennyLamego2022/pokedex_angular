// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Pokemon, PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})

export class CardListComponent implements OnInit{
  pokemonData: any;
  pokemonList: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemonList();
    // this.getPokemonData();
  }

  // getPokemonData() {
  //   this.pokemonService.getPokemonData('raichu').subscribe(
  //     (pokemonData: any) => {
  //       this.pokemonData = pokemonData;
  //       console.log(pokemonData)
  //     },
  //     error => {
  //       console.log('Ocorreu um erro:', error);
  //     }
  //   );
  // }

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
  // getPokemonData() {
  //   this.pokemonList.forEach((pokemon: Pokemon) => {
  //     this.pokemonService.getPokemonData(pokemon.name).subscribe(
  //       (pokemonData: any) => {
  //         pokemon.height = pokemonData.height;
  //         pokemon.weight = pokemonData.weight;
  //         pokemon.sprites = pokemonData.sprites;
  //       },
  //       (error: any) => {
  //         console.log('Ocorreu um erro:', error);
  //       }
  //     );
  //   });
  // }

  // getPokemonList(): void {
  //   this.pokemonService.getPokemonList().subscribe(
  //     (pokemonList: Pokemon[]) => {
  //       this.pokemonList = pokemonList;
  //       this.getPokemonData();
  //     },
  //     (error: any) => {
  //       console.log('Ocorreu um erro ao obter a lista de Pokemons:', error);
  //     }
  //   );
  // }

  // getPokemonData(): void {
  //   const requests = this.pokemonList.map((pokemon: Pokemon) => {
  //     return this.pokemonService.getPokemonData(pokemon.name);
  //   });

  //   forkJoin(requests).subscribe(
  //     (pokemonDataList: any[]) => {
  //       pokemonDataList.forEach((pokemonData: any, index: number) => {
  //         this.pokemonList[index].height = pokemonData.height;
  //         this.pokemonList[index].weight = pokemonData.weight;
  //         this.pokemonList[index].sprites = pokemonData.sprites;
  //       });
  //     },
  //     (error: any) => {
  //       console.log('Ocorreu um erro:', error);
  //     }
  //   );
  // }
}
  


