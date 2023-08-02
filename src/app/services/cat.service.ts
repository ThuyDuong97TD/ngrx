import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatFact } from '../models/cat-fact.model';
import { MaxLengthValidator } from '@angular/forms';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  title = 'Project';
  listCatFact: CatFact[] = [];
  constructor(protected httpClient: HttpClient) {}

  async getCatFact() {
    let result: CatFact;
    let response = this.httpClient.get('https://catfact.ninja/fact');
    let promise = await new Promise((resolve, reject) => {
      response.subscribe({
        next: (data) => {
          result = data as CatFact;
          result.id = Date.now().toString();
          resolve(result);
        },
        error: (error) => {
          reject(error);
        },
      });
    });

    return promise;
  }

  async getCatImage() {
    let result: string;
    let response = this.httpClient.get(
      'https://api.thecatapi.com/v1/images/search'
    );

    let promise = await new Promise((resolve, reject) => {
      response.subscribe({
        next: (data: any) => {
          result = data[0].url;
          resolve(result);
        },
        error: (error) => {
          reject(error);
        },
      });
    });

    return promise;
  }
}
