import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { PokemonsService } from './services/pokemons.service';

import { Pokemon } from './models/pokemon.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public pokemons: Pokemon[]

  constructor(
    private pokemonsService: PokemonsService,
    private menu: MenuController
  ){}

  ngOnInit(){
    this.getAllPokemons()
  }

  getAllPokemons() {
    this.pokemonsService.getAllPokemons().subscribe((pokemons:Pokemon[]) => {
     this.pokemons = pokemons
    })
  }

  
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

}
