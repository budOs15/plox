import { Component, OnInit } from '@angular/core';
import { Vendors } from '../../models/vendors';
import { VendorService } from '../../services/vendor.service';


@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  vendors: Vendors[] = [];

  constructor(private vendorService: VendorService) { }

  ngOnInit(): void {
    this.getVendors();
  }

  getVendors(): void {
    this.vendorService.getVendors().subscribe((vendors) => {
      this.vendors = vendors;
    });
  }
}