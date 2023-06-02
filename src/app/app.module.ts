import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HomeComponent} from './components/home/home.component';
import {ListPokemonsComponent} from './components/list-pokemons/list-pokemons.component';
import {DetailsPokemonComponent} from './components/details-pokemon/details-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListPokemonsComponent,
    DetailsPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
