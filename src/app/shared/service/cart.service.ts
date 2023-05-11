import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Cart} from "../Model/Cart";

@Injectable({
    providedIn: 'root'
  })

export class CartService {

    private API_URL = 'http://localhost:8082/cart/all';
    
    private API_URL1 = 'http://localhost:8081/cart';

  constructor(private http: HttpClient) { }

  getAllCarts(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.API_URL);
  }
  addCart(cart : Cart) {
    return this.http.post(`${this.API_URL1}`, cart)
  }
  
  editCart(CartId : any,cart : Cart){
    return this.http.put(`${this.API_URL1}/${CartId}/updateCart`, cart)
  }
  deleteCart(CartId : any){
    return  this.http.delete(`${this.API_URL1}/${CartId}/deleteCart`)
  }
}