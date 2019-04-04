import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(
    private db : AngularFireDatabase
  ) { }

  getAllPokemons() : Observable<any[]> {
    return this.db.list('pokemons').valueChanges()
  }

}
