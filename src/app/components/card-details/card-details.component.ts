import { Component, HostListener,ElementRef } from '@angular/core';
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
  // searchPokemon: string = '';
  pokemonDetails: DetailsPokemon | null = null;
  
  ngOnInit() {
    this.getPokemonDetailsById(6); // Substitua o número 5 pelo ID do Pokémon desejado
  }

  constructor(
    private cardDetailsService: CardDetailsService, 
    private pokemonService: PokemonService, 
    private elementRef: ElementRef
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

  // getPokemonList(){
  //   this.pokemonService.getPokemonList('charmelon').subscribe(
  //     (pokemonDetails: DetailsPokemon) => {
  //     this.pokemonDetails = pokemonDetails;
  //     console.log('Lista de Pokémons', pokemonDetails)
  //     },
  //     (error: any) => {
  //       console.log('Ocorreu um erro a obter a lista de Pokemons:', error)
  //     }
  //   );
  // }

  // buscarPokemon() {
  //   if (this.searchPokemon) {
  //     this.pokemonService.buscarPokemon(this.searchPokemon)
  //       .subscribe((data: any) => {
  //         this.pokemonData = data;
  //         this.cardDetailsService.toggleDetalhes(); // Exibe os detalhes do card
  //       }, (error: any) => {
  //         console.log('Erro na busca do Pokémon:', error);
  //         this.pokemonData = null;
  //       });
  //   } else {
  //     this.pokemonData = null;
  //   }
  // }

  // @HostListener('document:click', ['$event'])
  // onDocumentClick(event: MouseEvent): void {
  //   const clickedInsideComponent = this.elementRef.nativeElement.contains(event.target);
  //   if (!clickedInsideComponent) {
  //     this.cardDetailsService.toggleDetalhes();
  //   }
  // }
}
