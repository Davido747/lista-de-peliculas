import { Component, Input, OnInit } from '@angular/core';
import { movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  @Input() movie: movie;

  constructor(private movieService:MovieService) { }

  ngOnInit() {
  }

  setMovie() {
    this.movieService.setMovie(this.movie);

  }

}
