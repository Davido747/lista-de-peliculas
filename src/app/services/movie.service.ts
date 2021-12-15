import { Injectable } from '@angular/core';
import { movie, search } from '../models/movie.model';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  selectedMovie: movie = JSON.parse(localStorage.getItem("SelectedMovie")) || null;

  constructor(private http:HttpClient) { }

  public getMovies(nombre:String):Observable<search> {
    return this.http.get<search>("http://www.omdbapi.com/?apikey=ec8c902a&s="+nombre+"&type=movie&");
  }

  getMovie(nombre:String): Observable<movie> {
    return this.http.get<movie>("http://www.omdbapi.com/?apikey=ec8c902a&t="+nombre+"&type=movie");
  }

  public setMovie(movie: movie) {
    this.selectedMovie = movie;
    localStorage.setItem("SelectedMovie", JSON.stringify(this.selectedMovie));
  }

}
