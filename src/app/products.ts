export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Miércoles 2 - La Masó 18:30 (90 mins)',
    price: 8.00,
    description: 'Pista cubierta 5' 
  },
  {
    id: 2,
    name: 'Jueves 3 - Vim Padel 19:00 (90 mins)',
    price: 7.50,
    description: 'Pista Indoor 7'
  },
  {
    id: 3,
    name: 'Sábado 5 -Olivar H. 10:00 (90 mins)',
    price: 6,
    description: 'Pista Descubierta 4'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/