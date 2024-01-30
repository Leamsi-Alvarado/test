import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  heroNames: string[] = ['SpiderMan', 'Batman', 'Hulk', 'Thor', 'Flash', 'Héctor', 'Joker']
  deletedHero?: string;
  removeLastHero():void {
 this.deletedHero= this.heroNames.pop()
  }
}
