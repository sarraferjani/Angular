import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from "../Model/Product";

@Injectable({
    providedIn: 'root'
})

export class ProductService{
    private API_URL = 'http://localhost:8082/product/all' ;

    private API_URL1 = 'http://localhost:8081/product' ;

    constructor(private http: HttpClient) { }

    getAllProduct(): Observable<Product[]> {
        return this.http.get<Product[]>(this.API_URL);
    }

    addProduct(product : Product) {
        return this.http.post(`${this.API_URL1}`, product)
    }

    editProduct(productName : any ,product : Product){
        return this.http.put(`${this.API_URL1}/${productName}`, product)
    }
    deleteProduct(productId : number){
        return  this.http.delete(`${this.API_URL1}/${productId}/deleteProduct`)
    }
}