import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  // route2 = new ActivatedRoute();
  product: {
    productName: string;
    productPrice: number;
    productDetails: string;
    productImage: string;
    startDate: string;
    duration: string;
  } = {
    productName: '',
    productPrice: 0,
    productDetails: '',
    productImage: '',
    startDate: '',
    duration: '',
  };
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart(product: any) {
    alert('This item is added to the cart');
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id: number = Number(params.get('id'));
      this.product = products[id];
      // console.log(this.product);
    });
  }
}
