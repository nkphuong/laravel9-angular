import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {Product} from '../models/product.model';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";


@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private httpClient:HttpClient) { }

    getAll(apiUrl: string):Observable<Product[]>{
        return this.httpClient.get<Product[]>(environment.apiUrl + apiUrl).pipe()
    }
}
