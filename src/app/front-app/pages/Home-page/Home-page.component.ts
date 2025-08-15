import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { MoviesService } from '../../../Movies/services/movies.service';
import { MovieCardComponent } from '../../../Movies/components/movieCard/movieCard.component';

@Component({
  selector: 'app-home-page',
  imports: [ MovieCardComponent ],
  templateUrl: './Home-page.component.html',
  styleUrl: './Home-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {

  private movieService = inject(MoviesService);

  query = signal('films');
  movieResource = rxResource({
    request:()=> ({query:this.query() }),
    loader: ({ request }) => this.movieService.getMovies(request.query)
  });



 }
