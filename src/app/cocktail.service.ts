import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor() {}

  public getCocktails() {
    return [
      {
        name: 'Bloddy Mary',
        price: '12$',
        img: '/assets/img/BloodyMary.jpg',
      },
      {
        name: 'Moscow Mule',
        price: '12$',
        img: 'assets/img/MoscowMule.jpeg',
      },
      {
        name: 'Gin to',
        price: '12$',
        img: '/assets/img/GinTonic.jpeg',
      },
    ];
  }
}
