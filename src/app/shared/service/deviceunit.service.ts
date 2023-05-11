import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {DeviceUnit} from "../Model/DeviceUnit";

@Injectable({
    providedIn: 'root'
  })

export class DeviceUnitService {

    private API_URL = 'http://localhost:8082/deviceUnit/all';
    
    private API_URL1 = 'http://localhost:8081/deviceUnit';

    private API_URL2 = 'http://localhost:8082';

  constructor(private http: HttpClient) { }

  getAllDeviceUnits(): Observable<DeviceUnit[]> {
    return this.http.get<DeviceUnit[]>(this.API_URL);
  }
  addDeviceUnit(deviceUnit : DeviceUnit) {
    return this.http.post(`${this.API_URL1}`, deviceUnit)
  }
  
  editDeviceUnit(name : any,deviceUnit : DeviceUnit){
    return this.http.put(`${this.API_URL1}/deviceUnit//${name}`, deviceUnit)
  }
  deleteDeviceUnit(deviceId : any){
    return  this.http.delete(`${this.API_URL1}/${deviceId}/deleteDeviceUnit`)
  }

  exportToCsv(): void {
    this.http.get(`${this.API_URL2}/deviceUnits/export/csv`, { responseType: 'text' }).subscribe(csv => {
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'deviceUnits.csv';
      a.click();
      window.URL.revokeObjectURL(url);
    }, error => console.error(error));
  }
}