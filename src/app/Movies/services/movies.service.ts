import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../.env/enviroment';
import { Movie, Movies } from '../interfaces/movies.interface';
import { Observable, tap } from 'rxjs';


const baseUrl = environment.baseUrl

@Injectable({providedIn: 'root'})
export class MoviesService {

    private http = inject(HttpClient);
    private movie = signal<Movies[]>([]);


    getMovies(limit: number, offset: number = 0): Observable<Movies[]> {
      return this.http.get<Movies[]>(baseUrl, {
        params: {
          limit: limit.toString(),
          offset: offset.toString()
        }
      }).pipe(
        tap(resp => this.movie.set(resp))
      );
    };

}
