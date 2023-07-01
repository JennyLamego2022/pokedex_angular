import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';

export interface Pokemon{
  id: number;
  name: string;
  url?:string;
  height: number;
  weight: number;
  sprites: {
    other: {
      'official-artwork':{
        front_default:string;
      }
    }
  };
}

export interface DetailsPokemon{
  id: number;
  name: string;
  url?:string;
  height: number;
  weight: number;
  sprites: {
    other: {
      'official-artwork':{
        front_default:string;
      }
    };
    // front_default: string;
    // };
    // 'generation-v': {
    //   'black-white': {
    //     "animated": {
    //       back_default:string;
    //     }
    //   };
    // };
    // "generation-iv": {
    //   platinum: {
    //     front_default:string;
    //   }
    //   'heartgold-soulsilver': {
        
    //   }
    }; 
  types:{
    type:{
      name:string;
    }
  };
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  description:string;
  
}
@Injectable({
  providedIn: 'root'
})

export class PokemonService {
   private baseUrl = 'https://pokeapi.co/api/v2';

  
  constructor(private http: HttpClient) { }

  getPokemonList(pageLimit: number = 60, pageOffset: number = 0): Observable<Pokemon[]> {
    const url = `${this.baseUrl}/pokemon?limit=${pageLimit}&offset=${pageOffset}`;
    
    return this.http.get<any>(url).pipe(
      switchMap((response: any) => {
        const pokemonRequests: Observable<Pokemon>[] = response.results.map((pokemon: any) => {
          const pokemonId = pokemon.url.split('/')[6];
          
          return this.http.get<any>(`${this.baseUrl}/pokemon/${pokemonId}`).pipe(
            map((pokemonResponse: any) => {
              return {
                id: pokemonId,
                name: pokemonResponse.name,
                height: pokemonResponse.height * 10,
                weight: pokemonResponse.weight / 10,
                sprites: {
                  other: {
                    'official-artwork':{
                      front_default: pokemonResponse.sprites.other['official-artwork'].front_default
                    }
                  }
                }
              };
            })
          );
        });
        return forkJoin(pokemonRequests);
      })
    );
  }



  // getPokemonDetailsById(pokemonId: number): Observable<DetailsPokemon> {
  //   const url = `${this.baseUrl}/pokemon/${pokemonId}`;
  
  //   return this.http.get<any>(url).pipe(
  //     map((pokemonResponse: any) => {
  //       return {
  //         id: pokemonResponse.id,
  //         name: pokemonResponse.name,
  //         height: pokemonResponse.height * 10,
  //         weight: pokemonResponse.weight / 10,
  //         sprites: {
  //           other: {
  //             'official-artwork': {
  //               front_default: pokemonResponse.sprites.other['official-artwork'].front_default
  //             }
  //           }
  //         },
  //         types: pokemonResponse.types.map((type: any) => {
  //           return {
  //             type: {
  //               name: type.type.name
  //             }
  //           };
  //         }),
  //         stats: {
  //           hp: pokemonResponse.stats[0].base_stat,
  //           attack: pokemonResponse.stats[1].base_stat,
  //           defense: pokemonResponse.stats[2].base_stat,
  //           specialAttack: pokemonResponse.stats[3].base_stat,
  //           specialDefense: pokemonResponse.stats[4].base_stat,
  //           speed: pokemonResponse.stats[5].base_stat
  //         },
  //         description: pokemonResponse.description,
  //         evolutions: pokemonResponse.evolutions,
  //       };
  //     })
  //   );
  // }
  

  getPokemonDetailsById(pokemonId: number): Observable<DetailsPokemon> {
    const pokemonUrl = `${this.baseUrl}/pokemon/${pokemonId}`;
  
    return this.http.get<any>(pokemonUrl).pipe(
      switchMap((pokemonResponse: any) => {
        const speciesUrl = pokemonResponse.species.url;
        return this.http.get<any>(speciesUrl).pipe(
          map((speciesResponse: any) => {
            return {
              id: pokemonResponse.id,
              name: pokemonResponse.name,
              height: pokemonResponse.height * 10,
              weight: pokemonResponse.weight / 10,
              sprites: {
                other: {
                  'official-artwork': {
                    front_default: pokemonResponse.sprites.other['official-artwork'].front_default
                  }
                }
              },
              types: pokemonResponse.types.map((type: any) => {
                return {
                  type: {
                    name: type.type.name
                  }
                };
              }),
              stats: {
                hp: pokemonResponse.stats[0].base_stat,
                attack: pokemonResponse.stats[1].base_stat,
                defense: pokemonResponse.stats[2].base_stat,
                specialAttack: pokemonResponse.stats[3].base_stat,
                specialDefense: pokemonResponse.stats[4].base_stat,
                speed: pokemonResponse.stats[5].base_stat
              },
              description: speciesResponse.flavor_text_entries.find((entry: any) => entry.language.name === 'en').flavor_text,
              evolutions: pokemonResponse.evolutions
            };
          })
        );
      })
    );
  }
  

  
}



