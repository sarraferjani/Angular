import { Component, OnInit } from '@angular/core';
import {DeviceUnitService} from "../shared/service/deviceunit.service";
import {DeviceUnit} from "../shared/Model/DeviceUnit";

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-deviceunit',
  templateUrl: './deviceunit.component.html',
  styleUrls: ['./deviceunit.component.css']
})
export class DeviceunitComponent implements OnInit {

  public tableData1: TableData;
  public tableData2: TableData;
  isUpdate:boolean=false;
  deviceUnitList : any;
  deviceUnit:DeviceUnit = new DeviceUnit();

  constructor(private deviceUnitService:DeviceUnitService) { }

  showModal=false;

  ngOnInit(): void {
    this.getAllDeviceUnits();
    this.closePopupForUpdate();
    this.closePopupForCreate();
  }

  getAllDeviceUnits(){
    return this.deviceUnitService.getAllDeviceUnits().subscribe(res => this.deviceUnitList = res);
    }

    public deleteDeviceUnit(id:number) {
      this.deviceUnitService.deleteDeviceUnit(id).subscribe(() => {
          console.log("DeviceUnit deleted");
          this.getAllDeviceUnits();

      });
  }

  openPopupForUpdate(deviceUnittoupdate:any){
    this.isUpdate=true;
    this.deviceUnit=deviceUnittoupdate;
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
  this.deviceUnitService.addDeviceUnit(this.deviceUnit).subscribe((data) =>{

      console.log(data);

  } );
}

  exportToCsv(): void {
    this.deviceUnitService.exportToCsv();
  }

}
