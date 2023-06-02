import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import {Pokemon} from "../../models/pokemon";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details-pokemon',
  templateUrl: './details-pokemon.component.html',
  styleUrls: ['./details-pokemon.component.css']
})
export class DetailsPokemonComponent implements OnInit {
  title = 'Détails d\'un Pokémon';
  pokemon?: Pokemon;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.pokemonService.getById(+id).subscribe(
          pokemon => this.pokemon = pokemon
        );
      }
    });
  }

  selectedPokemon() {

  }
}
