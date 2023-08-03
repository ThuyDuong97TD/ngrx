import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  increment(count: number, step : number) {
    return count + step;
  }
}
