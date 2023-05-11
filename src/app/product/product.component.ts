import { Component, OnInit } from '@angular/core';
import {ProductService} from "../shared/service/product.service";
import {Product} from "../shared/Model/Product";

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public tableData1: TableData;
  public tableData2: TableData;
  isUpdate:boolean=false;
  productList : any;

  product:Product = new Product();

  constructor(private productService:ProductService) { }

  showModal=false;

  ngOnInit(): void {
    this.getAllProduct();
    this.closePopupForUpdate();
    this.closePopupForCreate();
  }

  getAllProduct(){
    return this.productService.getAllProduct().subscribe(res => this.productList = res);
    }

    public deleteProduct(id:number) {
      this.productService.deleteProduct(id).subscribe(() => {
          console.log("Product deleted");
          this.getAllProduct();

      });
  }

  openPopupForUpdate(producttoupdate:any){
    this.isUpdate=true;
    this.product=producttoupdate;
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
  this.productService.addProduct(this.product).subscribe((data) =>{

      data = new Product();
      console.log(data);

  } );
}

}
