import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  pokemonList = ['Bulbizarre', 'Salamèche', 'Carapuce'];

  ngOnInit() {
    console.table(this.pokemonList);
    this.selectPokemon('Pikachu');
  }

  selectPokemon(pokemonName: String) {
    console.log(`Vous avez cliqué sur le pokémon ${pokemonName}`);
  }
}
