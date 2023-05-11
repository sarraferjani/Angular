import { OrderStatus } from "./OrderStatus";

export class Order {
    orderId: any;
    totalCost : any;
    status:OrderStatus;
    deliveryAdresse : any;
    date = new Date();
}