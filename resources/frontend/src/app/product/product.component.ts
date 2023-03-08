import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product.model";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
    products:Product[]=[];

    constructor(private productService: ProductService) { }

    ngOnInit() {

        this.productService.getAll('/api/product').subscribe((data: any)=>{
            console.log(data);
            this.products = data.data.products;
        })
    }
}
