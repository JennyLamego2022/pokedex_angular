// import { Pokemon } from 'src/app/pokemon.service';
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
    front_default: string;
  };
}
@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  private baseUrl = 'https://pokeapi.co/api/v2';
  

  constructor(private http: HttpClient) { }

  // getPokemonList(): Observable<Pokemon[]> {
  //   return this.http.get<any>(`${this.baseUrl}/pokemon`).pipe(
  //     map((response: any) => {
  //       return response.results.map((pokemon: any) => {
  //         const pokemonId = pokemon.url.split('/')[6];
  //         return this.http.get<any>(`${this.baseUrl}/pokemon/${pokemonId}`).pipe(
  //           map((pokemonResponse: any) => {
  //             return {
  //               id: pokemonId,
  //               name: pokemonResponse.name,
  //               height: pokemonResponse.height*10,
  //               weight: pokemonResponse.weight/10,
  //               sprites: {
  //                 front_default: pokemonResponse.sprites.front_default
  //               }
  //             };
  //           })
  //         );
  //       });
  //     }),
  //     switchMap((pokemonRequests: Observable<Pokemon>[]) => {
  //       return forkJoin(pokemonRequests);
  //     })
  //   );
  // }

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
                  front_default: pokemonResponse.sprites.front_default
                }
              };
            })
          );
        });
        
        return forkJoin(pokemonRequests);
      })
    );
  }
  
  

  
  // getPokemonData(pokemonName: string): Observable<Pokemon> {
  //   return this.http.get<any>(`${this.baseUrl}/pokemon/${pokemonName}`).pipe(
  //     map((response: any) => {
  //       console.log('card Unitario por nome:', response.height)
  //       return {
  //         id: response.id,
  //         name: response.name,
  //         height: response.height*10,
  //         weight: response.weight/10,
  //         sprites: {
  //           front_default: response.sprites.front_default
  //         }
  //       };
  //     })
  //   );
  // }

}



