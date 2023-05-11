import { Component, OnInit } from '@angular/core';
import {OrderService} from "../shared/service/order.service";
import {Order} from "../shared/Model/Order";
import { OrderStatus } from "../shared/Model/OrderStatus";

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public tableData1: TableData;
  public tableData2: TableData;
  isUpdate:boolean=false;
  orderList : any;

  selectedOrderStatus: String[] = [
    "OPEN",
    "PENDING",
    "PAID",
    "SHIPPED",
    "DELIVERED",
    "CANCELLED",
    "REFUNDED"
];
  OrderStatusOptions: String[] = [
    "OPEN",
    "PENDING",
    "PAID",
    "SHIPPED",
    "DELIVERED",
    "CANCELLED",
    "REFUNDED"
];

  order:Order = new Order();

  constructor(private orderService:OrderService) { }

  showModal=false;

  ngOnInit(): void {
    this.getAllOrders();
    this.closePopupForUpdate();
    this.closePopupForCreate();
  }

  getAllOrders(){
    return this.orderService.getAllOrders().subscribe(res => this.orderList = res);
    }

    public deleteOrder(id:number) {
      this.orderService.deleteOrder(id).subscribe(() => {
          console.log("Order deleted");
          this.getAllOrders();

      });
  }

  openPopupForUpdate(ordertoupdate:any){
    this.isUpdate=true;
    this.order=ordertoupdate;
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
  this.orderService.addOrder(this.order).subscribe((data) =>{

      console.log(data);

  } );
}

}
