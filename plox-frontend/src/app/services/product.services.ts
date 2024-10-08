import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.apiUrl);
  }

  getProductById(prodId: number): Observable<Products> {
    return this.http.get<Products>(`${this.apiUrl}/${prodId}`);
  }

  createProduct(product: Products): Observable<Products> {
    return this.http.post<Products>(this.apiUrl, product);
  }

  updateProduct(prodId: number, product: Products): Observable<Products> {
    return this.http.put<Products>(`${this.apiUrl}/${prodId}`, product);
  }

  deleteProduct(prodId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${prodId}`);
  }
}