import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Order} from "../Model/Order";

@Injectable({
    providedIn: 'root'
  })

export class OrderService {

    private API_URL = 'http://localhost:8082/orders/all';
    
    private API_URL1 = 'http://localhost:8081/order';

  constructor(private http: HttpClient) { }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.API_URL);
  }
  addOrder(order : Order) {
    return this.http.post(`${this.API_URL1}`, order)
  }
  
  editOrder(deliveryAdresse : any,order : Order){
    return this.http.put(`${this.API_URL1}/${deliveryAdresse}`, order)
  }
  deleteOrder(orderId : number){
    return  this.http.delete(`${this.API_URL1}/${orderId}/deleteOrder`)
  }
}