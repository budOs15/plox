import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendors } from '../models/vendors';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  private apiUrl = 'http://localhost:8080/api/vendors';

  constructor(private http: HttpClient) { }

  getVendors(): Observable<Vendors[]> {
    return this.http.get<Vendors[]>(this.apiUrl);
  }

  getVendorById(vendorId: number): Observable<Vendors> {
    return this.http.get<Vendors>(`${this.apiUrl}/${vendorId}`);
  }

  createVendor(vendor: Vendors): Observable<Vendors> {
    return this.http.post<Vendors>(this.apiUrl, vendor);
  }

  updateVendor(vendorId: number, vendor: Vendors): Observable<Vendors> {
    return this.http.put<Vendors>(`${this.apiUrl}/${vendorId}`, vendor);
  }

  deleteVendor(vendorId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${vendorId}`);
  }
}