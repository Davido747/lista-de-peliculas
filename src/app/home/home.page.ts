import { Component } from '@angular/core';
import { movie, search } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  movies:movie[];

  constructor(private movieService: MovieService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMovies (ev: any) {
    this.movies = [];
    const val = ev.target.value;
    if(val && val.trim() != ''){
      if(val.length <= 2) {
        this.movieService.getMovie(val).subscribe((movies: any) => {
          console.log(movies);
          this.movies[0] = movies;
        });
      }
      else {
        this.movieService.getMovies(val).subscribe((movies: search) => {
          console.log(movies);
          this.movies = movies.Search;
        });
      }
    }
  }
}
