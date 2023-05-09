import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Block } from '../../models/Block';

@Injectable({
  providedIn: 'root'
})
export class BlockService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}
  public AddBlock(block : Block): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/ajouterBlock`,block);
  }
  public getBlock(): Observable<Block[]> {
    return this.http.get<Block[]>(`${this.apiServerUrl}/Blocks`);
}
public getBlockbn(): Observable<any> {
  return this.http.get<any>(`${this.apiServerUrl}/BlocksNames`);
}
public getBlockbname(name:any): Observable<any> {
  return this.http.get<any>(`${this.apiServerUrl}/BlockByName/${name}`);
}
public deleteBlock(idB : any){
  return  this.http.delete(`${this.apiServerUrl}/deleteBlock/${idB}`)
}
public updateBlock(block : Block, idB : any): Observable<any>{
  return this.http.put<any>(`${this.apiServerUrl}/updateBlock/${idB}`,block )
}

}
