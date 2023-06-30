import { HttpClient } from '@angular/common/http';
import { PokemonService } from './../../pokemon.service';
import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  pokemonName: string = '';
  pokemonData: any;
  // searchPokemon: string = '';
  searchTerm: string = '';

  constructor(private PokemonService: PokemonService, private http: HttpClient, private sharedService: SharedService) { }

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

  searchPokemon() {
    this.sharedService.changeSearchTerm(this.searchTerm);
  }



  // buscarPokemon() {
  //   if (this.searchPokemon) {
  //     // Fazer a chamada à API da PokeAPI com o nome do Pokémon a ser buscado
  //     this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.searchPokemon.toLowerCase()}`)
  //       .subscribe((data: any) => {
  //         // Armazenar os dados do Pokémon na variável pokemonData
  //         this.pokemonData = data;
  //       }, (error) => {
  //         console.log('Erro na busca do Pokémon:', error);
  //         // Limpar os dados do Pokémon se não for encontrado
  //         this.pokemonData = null;
  //       });
  //   } else {
  //     // Limpar os dados do Pokémon se o campo de busca estiver vazio
  //     this.pokemonData = null;
  //   }
  // }

}

