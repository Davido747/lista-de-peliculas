import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.page.html',
  styleUrls: ['./movie-view.page.scss'],
})
export class MovieViewPage implements OnInit {
  movie: movie;
  idioma: string;
  sinopsis: string;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movie = this.movieService.selectedMovie;
    if(this.movie.Plot){ this.sinopsis = this.movie.Plot;}
    else{this.sinopsis = "No Disponible"}
    if(this.movie.Language){ this.idioma = this.movie.Language;}
    else{this.idioma = "No Disponible"}
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Lista de peliculas' : '';
  }

}
