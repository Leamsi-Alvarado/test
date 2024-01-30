import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',

  templateUrl: 'list.component.html',
  styleUrl: './list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Input() charactersList: Character[] = []
  @Output() deletedCharacterID: EventEmitter<string> = new EventEmitter();


  onDeleteCharacter(id: string): void{
    console.log(id)
    this.deletedCharacterID.emit(id)
  }
}
