import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
<p>{{counter}}</p>
<button (click)="restar(25)">-1</button>
<button (click)="sumar(25)">+1</button>
<button (click)="reset()">reset</button>



  `
})

export class CounterComponent {
  constructor() { }
  public counter: number = 10;

  sumar(value: number) {
    this.counter += value
  };
  restar(value: number) {
    this.counter -= value
  };
  reset() {
    this.counter = 10
  }



  ngOnInit() { }
}


