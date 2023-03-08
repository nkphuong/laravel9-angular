import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product.model";
import {ProductService} from "../services/product.service";
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-product',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
    product: Product | any;
    id: string | null | undefined
    constructor(private productService: ProductService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id')
        this.productService.getOne('/api/product/'+this.id).subscribe((data: any)=>{
            console.log(data);
            this.product = data.data;
        })
    }
}
