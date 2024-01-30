import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'
@Injectable({ providedIn: 'root' })
export class DbzService {
  constructor() { }
  characters: Character[] = [{
    id: uuid(),
    name: "Trunks",
    power: 1500
  }, {
    id: uuid(),
    name: "Salamandra",
    power: 1200
  }];

  onNewCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), name: character.name, power: character.power }
    this.characters = [...this.characters, newCharacter];
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id)
    alert("Character with the ID: " + id +" will be deleted")
  }
}
