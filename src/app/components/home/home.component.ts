import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../models/pokemon";
import {PokemonService} from "../../services/pokemon.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Listes des Pokémons';
  pokemonsFeu?: Pokemon[];
  pokemonsElectrique?: Pokemon[];
  pokemonsPlante?: Pokemon[];

  constructor(
    private pokemonService: PokemonService
  ) {
  }

  ngOnInit() {
    this.pokemonsFeu = this.pokemonService.getAll().filter(pokemon => pokemon.type.toLowerCase() === 'feu');
    this.pokemonsElectrique = this.pokemonService.getAll().filter(pokemon => pokemon.type.toLowerCase() === 'electrique');
    this.pokemonsPlante = this.pokemonService.getAll().filter(pokemon => pokemon.type.toLowerCase() === 'plante');
  }
}
