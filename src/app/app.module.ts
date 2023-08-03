import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatBlogComponent } from './components/cat-blog/cat-blog.component';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NavbarComponent } from './components/navbar/navbar.component';
import { catReducer } from 'src/ngrx/reducers/cat.reducer';
import { CatEffect } from 'src/ngrx/effects/cat.effect';

@NgModule({
  declarations: [AppComponent, CatBlogComponent, CatFactComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({cats :catReducer}, {}),
    EffectsModule.forRoot([CatEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
