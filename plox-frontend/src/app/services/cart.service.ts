import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:8080/api/carts';

  constructor(private http: HttpClient) { }

  getCart(userId: number): Observable<Cart> {
    return this.http.get<Cart>(`${this.apiUrl}/user/${userId}`);
  }

  addToCart(cart: Cart): Observable<Cart> {
    return this.http.post<Cart>(this.apiUrl, cart);
  }

  updateCart(cartId: number, cart: Cart): Observable<Cart> {
    return this.http.put<Cart>(`${this.apiUrl}/${cartId}`, cart);
  }

  deleteCart(cartId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${cartId}`);
  }
}