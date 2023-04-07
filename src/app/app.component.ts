import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectPokemon(event: MouseEvent) {
    const index: number = +(event.target as HTMLInputElement).value;
    console.log(`Vous avez cliqué sur le pokémon ${this.pokemonList[index].name}`);
  }
}
