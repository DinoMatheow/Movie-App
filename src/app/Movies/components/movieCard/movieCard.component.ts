import { ChangeDetectionStrategy, Component,input } from '@angular/core';
import { Movie } from '../../interfaces/movies.interface';

@Component({
  selector: 'app-movie-card',
  imports: [],
  template: `


  <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <h2 class="text-xl font-semibold text-gray-800 mb-4"> {{movie().title}} </h2>
        <p class="text-gray-600"> {{ movie().overview }} </p>
        <button class="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
          Ver más
        </button>
      </div>



  `,
  styleUrl: './movieCard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieCardComponent {
  movie = input.required<Movie>();



}
