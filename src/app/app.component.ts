import { Component, NgModule, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { CatState } from 'src/ngrx/states/cat.state';
import { Observable } from 'rxjs';
import * as CatAction from 'src/ngrx/actions/cat.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'ngrx';
  // numberOfCats: number = 10;
  cats$ = new Observable<CatState>();
  constructor(private store: Store<{ cats: CatState }>) {}

  ngOnInit() {
    this.cats$ = this.store.select('cats');
    this.store.dispatch(CatAction.getCats({ limit: 5 }));
  }
}
