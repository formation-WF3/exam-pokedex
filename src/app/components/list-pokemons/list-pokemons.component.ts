import {Component, Input} from '@angular/core';
import {Pokemon} from "../../models/pokemon";

@Component({
  selector: 'app-list-pokemons',
  templateUrl: '/list-pokemons.component.html',
  styleUrls: ['/list-pokemons.component.css']
})
export class ListPokemonsComponent {
  @Input()
  pokemons?: Pokemon[];

  @Input()
  pokemonsType?: string;
}
