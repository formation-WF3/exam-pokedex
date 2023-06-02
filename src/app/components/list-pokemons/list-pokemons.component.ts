import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import {Pokemon} from "../../models/pokemon";

class Pokemons {
}

@Component({
  selector: 'app-list-pokemons',
  templateUrl: '/list-pokemons.component.html',
  styleUrls: ['/list-pokemons.component.css']
})
export class ListPokemonsComponent implements OnInit {
  title = 'Liste des Pokémons';
  pokemons?: Pokemon[];
  constructor(
    private pokemonService: PokemonService
  ) {
  }

  ngOnInit() {
    this.pokemonService.getAll().subscribe(
      pokemons => this.pokemons = pokemons
    );
  }
}
