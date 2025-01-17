import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart;
  userId: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCart(this.userId);
  }

  getCart(userId: number): void {
    this.cartService.getCart(userId).subscribe((cart) => {
      this.cart = cart;
    });
  }
}
