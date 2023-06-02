import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListPokemonsComponent} from "./components/list-pokemons/list-pokemons.component";
import {DetailsPokemonComponent} from "./components/details-pokemon/details-pokemon.component";

const routes: Routes = [
  { path: 'pokemons', component: ListPokemonsComponent },
  { path: 'pokemons/:id', component: DetailsPokemonComponent },
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
  { path: '**', redirectTo: 'pokemons' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
