import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./components/home/home.component";
import {DetailsPokemonComponent} from "./components/details-pokemon/details-pokemon.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pokemons/:id', component: DetailsPokemonComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
