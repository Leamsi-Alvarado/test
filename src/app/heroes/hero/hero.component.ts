import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "Iron man"
  public age: number = 45


  get CapitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeName(): void {
    this.name = "Spider-man"
  }
  changeAge(): void {
    this.age = 12
  }

  reset(): void {
    this.name = "Iron man"
    this.age = 45
  }
}
