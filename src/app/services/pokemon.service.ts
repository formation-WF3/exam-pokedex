import { Injectable } from '@angular/core';
import {Pokemon} from "../models/pokemon";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private URL = '';
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>(this.URL);
  }

  getById(id: number): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(this.URL + 'pokemons/' + id);
  }
}
