import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: any = [];
  beforeDisc: any = 0;
  constructor() {}

  addToCart(product: {
    name: string;
    price: number;
    description: string;
    image: string;
  }) {
    this.items.push(product);
  }

  total() {
    let total = 0;
    for (let val of this.items) {
      total = total + val.productPrice;
    }
    this.beforeDisc = total;
    if (total > 5000) {
      return total * 0.8;
    } else if (total > 3000) {
      return total * 0.9;
    } else {
      return total;
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];

    return this.items;
  }
}
