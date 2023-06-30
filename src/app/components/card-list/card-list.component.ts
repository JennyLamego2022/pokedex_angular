import { Component, OnInit, ViewChild } from '@angular/core';
import { Pokemon, PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})

export class CardListComponent implements OnInit{
  pokemonData: any;
  pokemonList: Pokemon[] = [];
  pokemonList10: Pokemon[] = [];

  @ViewChild('myScrollableElement', { static:false}) myScrollableElement:any;
  @ViewChild('myScrollableElement2', { static:false}) myScrollableElement2:any;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemonList();
    this.getPokemonList10();
  }

  //Consumo API cards
  getPokemonList10() {
    this.pokemonService.getPokemonList(10).subscribe(
      (pokemonList: Pokemon[]) => {
        this.pokemonList10 = pokemonList;
        console.log('Lista de Pokémons', pokemonList);
      },
      (error: any) => {
        console.log('Ocorreu um erro ao obter a lista de Pokemons:', error);
      }
    );
  }
  
  getPokemonList(){
    this.pokemonService.getPokemonList().subscribe(
      (pokemonList: Pokemon[]) => {
      this.pokemonList = pokemonList;
      console.log('Lista de Pokémons', pokemonList)
      },
      (error: any) => {
        console.log('Ocorreu um erro a obter a lista de Pokemons:', error)
      }
    );
  }

  //Scroll
  scrollButtonClick(isForward: boolean) {
    const scrollable = this.myScrollableElement.nativeElement;
    const scrollAmount = isForward ? scrollable.scrollLeft + 254 : scrollable.scrollLeft - 254;
    scrollable.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
    if (!isForward) {
    }
  }

  onButtonClick() {
    this.scrollButtonClick(true);
  }
  
  offButtonClick() {
    this.scrollButtonClick(false);
  }
  

  scrollButtonClick2(isForward: boolean) {
    const scrollable = this.myScrollableElement2.nativeElement;
    const scrollAmount = isForward ? scrollable.scrollLeft + 500 : scrollable.scrollLeft - 500;
    scrollable.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
    if (!isForward) {
    }
  }

  onButtonClick2() {
    this.scrollButtonClick2(true);
  }
  
  offButtonClick2() {
    this.scrollButtonClick2(false);
  }
 
}
  


