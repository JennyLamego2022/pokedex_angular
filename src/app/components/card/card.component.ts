import { Pokemon, PokemonService } from 'src/app/pokemon.service';
import { Component, Input } from '@angular/core';
import { CardDetailsService } from 'src/app/services/card-details.service';
import { SharedService } from 'src/app/services/shared.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() pokemonData: Pokemon | undefined;

  mostrarDetalhes: boolean = false;
  pokemonData2: any;
  searchPokemon: string = '';
  

constructor(private pokemonService: PokemonService, private cardDetailsService: CardDetailsService, private sharedService: SharedService) {}

ngOnInit() {
  // this.sharedService.currentSearchTerm.subscribe((searchTerm: string) => {
  //   if (searchTerm && searchTerm.trim() !== '') {
  //     const searchObservable: Observable<any> | null = this.buscarPokemon(searchTerm);
  //     if (searchObservable) {
  //       searchObservable.subscribe(
  //         (data: any) => {
  //           this.pokemonData2 = data;
  //           this.cardDetailsService.setCardPesquisado(this.pokemonData2);
  //           this.cardDetailsService.toggleDetalhes();
  //         },
  //         (error: any) => {
  //           console.log('Erro na busca do Pokémon:', error);
  //           this.pokemonData2 = null;
  //         }
  //       );
  //     }
  //   } else {
  //     this.pokemonData2 = null;
  //     this.cardDetailsService.setCardPesquisado(null);
  //   }
  // });
}

  toggleDetalhes() {
    this.cardDetailsService.toggleDetalhes();
    console.log('toogle')
  }

//   buscarPokemon(nome: string): void {
//     if (nome) {
//       this.pokemonService.buscarPokemon(nome)
//         .subscribe(
//           (data: any) => {
//             this.pokemonData2 = data;
//             this.cardDetailsService.setCardPesquisado(this.pokemonData2);
//             this.cardDetailsService.toggleDetalhes();
//           },
//           (error: any) => {
//             console.log('Erro na busca do Pokémon:', error);
//             this.pokemonData2 = null;
//           }
//         );
//     } else {
//       this.pokemonData2 = null;
//       this.cardDetailsService.setCardPesquisado(null);
//     }
  
// }

}


