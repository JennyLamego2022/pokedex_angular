import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';

// export interface Sprint {
//   front_default:string;
// }
// export interface Pokemon{
// id: number;
// name: string;
// url:{
//   height: number;
//   weight: number;
//   sprites: Sprint;
// };


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
  // private baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  private baseUrl = 'https://pokeapi.co/api/v2';
  // pokemonService: any;
  

  constructor(private http: HttpClient) { }
  
  // getPokemonList(): Observable<Pokemon[]> {
  //   return this.http.get<any>(`${this.baseUrl}/pokemon`).pipe(
  //     switchMap((response: any) => {
  //       const pokemonList = response.results.map((pokemon: any) => {
  //         return {
  //           id: pokemon.url.split('/')[6],
  //           name: pokemon.name,
  //           height: 0,
  //           weight: 0,
  //           sprites: {
  //             front_default: ''
  //           }
  //         };
  //       });

  //       const requests = pokemonList.map((pokemon: Pokemon) =>
  //         this.getPokemonData(pokemon.name)
  //       );

  //       return forkJoin(requests).pipe(
  //         map((data: any[]) => {
  //           return data.map((pokemon: Pokemon, index: number) => {
  //             return {
  //               ...pokemonList[index],
  //               height: pokemon.height,
  //               weight: pokemon.weight,
  //               sprites: pokemon.sprites
  //             };
  //           });
  //         })
  //       );
  //     })
  //   ) as Observable<Pokemon[]>
  // }

  
  // async getPokemonList(): Promise<Pokemon[]> {
  //     const response = await this.http.get<any>(`${this.baseUrl}/pokemon`).toPromise();
  //     // (
  //     // map((response: any) => {
  //     //   console.log("vindo de onde?", response.results)
  //     //   console.log("vindo de onde?")
  //       return response.results.map((response: any) => ({

  //         id: response.url.split('/')[6],
  //         name: response.name,
  //         height: response.height,
  //         weight: 0,
  //         sprite: { front_default: ''},

  //       }));

    //   })
    // );
    
  
  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<any>(`${this.baseUrl}/pokemon`).pipe(
      map((response: any) => {
        console.log("vindo de onde?", response.results)
        return response.results.map((pokemon: any) => ({

          id: pokemon.url.split('/')[6],
          name: pokemon.name,
          height: pokemon.height,
          weight: 0,
          sprite: { front_default: ''},

        }));

      })
    );
  }

  // getPokemonList(): Observable<Pokemon[]> {
  //   const url = `${this.baseUrl}/pokemon?limit=10`; // Obtém uma lista de 10 pokémons
  //   return this.http.get<Pokemon[]>(url);
  // }

  // getPokemonById(id: number): Observable<Pokemon> {
  //   const url = `${this.baseUrl}/pokemon/${id}`;
  //   return this.http.get<Pokemon>(url);
  // }

  //

  // getPokemonList(): Observable<Pokemon[]> {
  //   return this.http.get<any>(`${this.baseUrl}/pokemon`).pipe(
  //     map((response: any) => {
  //       return response.results.map((pokemon: any) => {
  //         const pokemonId = pokemon.url.split('/')[6];
  //         return this.getPokemonData(pokemonId);
  //       });
  //     })
  //   );
  // }

    // getPokemonData(pokemonId: number): Observable<Pokemon> {
    //   return this.http.get<any>(`${this.baseUrl}/pokemon/${pokemonId}`).pipe(
    //     map((response: any) => {
    //       return {
    //         id: response.id,
    //         name: response.name,
    //         height: response.height / 10, // Convertendo para metros
    //         weight: response.weight / 10, // Convertendo para quilogramas
    //         sprites: {
    //           front_default: response.sprites.front_default
    //         }
    //       };
    //     })
    //   );
    // }

  getPokemonData(pokemonName: string): Observable<Pokemon> {
    return this.http.get<any>(`${this.baseUrl}/pokemon/${pokemonName}`).pipe(
      map((response: any) => {
        console.log('card Unitario por nome:', response.height)
        return {
          id: response.id,
          name: response.name,
          height: response.height/10,
          weight: response.weight/10,
          sprites: {
            front_default: response.sprites.front_default
          }
        };
      })
    );
  }

  // getPokemonInfo(name: string): Observable<any> {
  //   const url = `${this.baseUrl}/${name}`;
  //   return this.http.get<any>(url);
  // }

  // getPokemonList(): Observable<any> {
  //   const url = `${this.baseUrl}`;
  //   return this.http.get<any>(url);
  // }

  // getPokemonInfo(id: string): Observable<any> {
  //   const url = `${this.baseUrl}/${id}`;
  //   return this.http.get<any>(url);
  // }


}



