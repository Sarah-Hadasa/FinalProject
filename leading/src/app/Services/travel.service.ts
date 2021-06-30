import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Travel } from '../Classes/travel';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  url:string="http://localhost:60320/api/";
  
    constructor(private http:HttpClient) { }
  getAllTravels():Observable<any>
  {
    return this.http.get(this.url+"GetTravels");
  }
  addTravel(t:Travel):Observable<any>
  {
//this.t={Id:200,DriveId:1, PackageId:3};
const httpOptions={headers:new HttpHeaders({'Content-Type': 'application/json'})};
return this.http.post(this.url+'PostTravels',t,{withCredentials:true});
  }

  getIdTravel(id:number):Observable<any>
  {
    return this.http.get(this.url + "GetTravelsById?id="+id);
  }
}
