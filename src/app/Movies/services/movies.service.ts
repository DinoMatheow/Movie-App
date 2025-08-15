import { HttpClient } from '@angular/common/http';
import { inject, Injectable, linkedSignal, signal } from '@angular/core';
import { environment } from '../../../.env/enviroment';
import { Movies, Description } from '../interfaces/movies.interface';
import { map, Observable, tap } from 'rxjs';


const baseUrl = environment.baseUrl;

interface MoviesResponse {
  movies: Description[];
}

@Injectable({providedIn: 'root'})
export class MoviesService {

    private http = inject(HttpClient);
    private movie = signal<Description[]>([]);
    // private movie = signal<Movie | null>(null);





    getMovies(query: string): Observable<Description[]> {
      return this.http.get<MoviesResponse>(baseUrl, {
        params: { q: query },
      }).pipe(
        map(response => response.movies),
        tap(list => this.movie.set(list)),
        tap(data => console.log('API response:', data))
      );
    }
}
