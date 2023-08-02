import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { CatFact } from './models/cat-fact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  numberOfCats: number = 10;
  catArray = Array(this.numberOfCats).fill(0);
}
