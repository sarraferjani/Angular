import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Block } from '../../models/Block';
import { Room } from '../../models/Room';
import { BlockService } from './block.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private apiServerUrl = environment.apiBaseUrl;
  private Block = BlockService ;

  constructor(private http: HttpClient){}
  public AjouterRoometAffecterToBlock(room : Room,id :any): Observable<any> {
    
    return this.http.post<any>(`${this.apiServerUrl}/ajouterRoom/${id}`,room);
  }
  public getRoom(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.apiServerUrl}/Rooms`);
}
deleteRoom(idR : any){
  return  this.http.delete(`${this.apiServerUrl}/deleteRoom/${idR}`)
}
updateRoom(room : Room, idR : any){
  return this.http.put(`${this.apiServerUrl}/updateRoom/${idR}`,room )
}

 }
