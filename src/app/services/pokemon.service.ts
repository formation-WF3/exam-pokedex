import { Injectable } from '@angular/core';
import {Pokemon} from "../models/pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: Pokemon[] = [
    { id: 1, nom: 'Salamèche', taille: 60, evolution: 'Reptincel, Dracaufeu', faiblesses: 'Eau, Terre', attaque: 52, type: 'Feu' },
    { id: 2, nom: 'Goupix', taille: 60, evolution: 'Feunard', faiblesses: 'Eau, Terre', attaque: 41, type: 'Feu' },
    { id: 3, nom: 'Reptincel', taille: 110, evolution: 'Dracaufeu', faiblesses: 'Eau, Terre', attaque: 64, type: 'Feu' },
    { id: 4, nom: 'Pikachu', taille: 40, evolution: 'Raichu', faiblesses: 'Plante, Electrique', attaque: 55, type: 'Electrique' },
    { id: 5, nom: 'Magneti', taille: 30, evolution: 'Magnéton', faiblesses: 'Plante, Electrique', attaque: 35, type: 'Electrique' },
    { id: 6, nom: 'Voltorbe', taille: 50, evolution: 'Electrode', faiblesses: 'Plante, Electrique', attaque: 30, type: 'Electrique' },
    { id: 7, nom: 'Bulbizarre', taille: 70, evolution: 'Herbizarre, Florizarre', faiblesses: 'Feu, Poison', attaque: 49, type: 'Plante' },
    { id: 8, nom: 'Ortide', taille: 80, evolution: 'Mystherbe, Rafflesia', faiblesses: 'Feu, Poison', attaque: 85, type: 'Plante' },
    { id: 9, nom: 'Paras', taille: 98, evolution: 'Parasect', faiblesses: 'Feu, Poison', attaque: 70, type: 'Plante' }
  ];
  constructor() {
  }

  getAll(): Pokemon[] {
    return this.pokemons;
  }

  getById(id: number): Pokemon {
    return this.pokemons[id - 1];
  }
}
