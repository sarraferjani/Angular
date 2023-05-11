import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Invoice} from "../Model/Invoice";

@Injectable({
  providedIn: 'root'
})

export class InvoiceService {

  private API_URL = 'http://localhost:8082/invoice/all';

  private API_URL1 = 'http://localhost:8081/invoice';

  constructor(private http: HttpClient) { }

  getAllInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.API_URL);
  }
  addInvoice(invoice : Invoice) {
    return this.http.post(`${this.API_URL1}`, invoice)
  }

  editInvoice(quantity : any ,invoice : Invoice){
    return this.http.put(`${this.API_URL1}/${quantity}`, invoice)
  }
  deleteInvoice(invoiceId : number){
    return  this.http.delete(`${this.API_URL1}/${invoiceId}/deleteInvoice`)
  }


}