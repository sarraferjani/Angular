import { Component, OnInit } from '@angular/core';
import {CartService} from "../shared/service/cart.service";
import {Cart} from "../shared/Model/Cart";

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public tableData1: TableData;
  public tableData2: TableData;
  isUpdate:boolean=false;
  cartList : any;
  cart:Cart = new Cart();
  

  constructor(private cartService:CartService) { }

  showModal=false;

  ngOnInit(): void {
    this.getAllCarts();
    this.closePopupForUpdate();
    this.closePopupForCreate();
  }

  getAllCarts(){
    return this.cartService.getAllCarts().subscribe(res => this.cartList = res);
    }

    public deleteCart(id:any) {
      this.cartService.deleteCart(id).subscribe(() => {
          console.log("Cart canceled");
          this.getAllCarts();

      });
  }

  openPopupForUpdate(deviceUnittoupdate:any){
    this.isUpdate=true;
    this.cart=deviceUnittoupdate;
    this.showModal = true;
}
closePopupForUpdate(){
    this.showModal = false;
}
openPopupForCreate(){
    this.isUpdate=false;
    this.showModal = true;
}
closePopupForCreate(){
    this.showModal = false;
}

onSubmit() {
  this.cartService.addCart(this.cart).subscribe((data) =>{

      console.log(data);

  } );
}

}
