import { HttpClient } from '@angular/common/http';
import { inject, Injectable, linkedSignal, signal } from '@angular/core';
import { environment } from '../../../.env/enviroment';
import { Movies, Movie } from '../interfaces/movies.interface';
import { map, Observable, tap } from 'rxjs';


const baseUrl = environment.baseUrl;
const apiKey = environment.apiKey;

interface MoviesResponse {
  movies: Movie[];
}

@Injectable({providedIn: 'root'})
export class MoviesService {

    private http = inject(HttpClient);
    private movie = signal<Movie[]>([]);
    // private movie = signal<Movie | null>(null);


    // getMovies(query: string): Observable<Movie[]> {
    //   return this.http.get<Movie[]>(baseUrl, {
    //     params: {
    //       q: query,
    //     },
    //     headers: {
    //       'x-rapidapi-host': 'ai-movie-recommender.p.rapidapi.com',
    //       'x-rapidapi-key': apiKey
    //     }
    //   }).pipe(
    //     tap(list => this.movie.set(list)),
    //     tap(data => console.log('API response:', data))
    //   );
    // };


    getMovies(query: string): Observable<Movie[]> {
      return this.http.get<MoviesResponse>(baseUrl, {
        params: { q: query },
        headers: {
          'x-rapidapi-host': 'ai-movie-recommender.p.rapidapi.com',
          'x-rapidapi-key': apiKey
        }
      }).pipe(
        map(response => response.movies),
        tap(list => this.movie.set(list)),
        tap(data => console.log('API response:', data))
      );
    }
}
