import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/products';
import { ProductService } from '../../services/product.services';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Products[] = [];

  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getProducts().subscribe((product) => {
      this.products = product;
    });
  }
}