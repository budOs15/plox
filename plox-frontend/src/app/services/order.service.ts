import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orders } from '../models/orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:8080/api/orders';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Orders[]> {
    return this.http.get<Orders[]>(this.apiUrl);
  }

  getOrderById(orderId: number): Observable<Orders> {
    return this.http.get<Orders>(`${this.apiUrl}/${orderId}`);
  }

  createOrder(order: Orders): Observable<Orders> {
    return this.http.post<Orders>(this.apiUrl, order);
  }

  updateOrder(orderId: number, order: Orders): Observable<Orders> {
    return this.http.put<Orders>(`${this.apiUrl}/${orderId}`, order);
  }

  deleteOrder(orderId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${orderId}`);
  }
}