import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  count : number = 0;
  increment() {
    this.count++;
  }
  decrement() {
    if (this.count > 0){
      this.count--;

    }
    return;
    }
    reset() {
      this.count = 0;
    }
  
}
