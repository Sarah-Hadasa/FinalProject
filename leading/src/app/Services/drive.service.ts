import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drive } from '../Classes/drive';
import { Package } from '../Classes/package';

@Injectable({
  providedIn: 'root'
})
export class DriveService {

  url:string="http://localhost:60320/api/";

  constructor(private http:HttpClient) {}
  getalldrive():Observable<any>
  {
  return this.http.get(this.url+"GetDrives");
  // this.url+"Drives?id="+5+"&parmetr2"+"hjhjhj"
  }
  
  addDrive(drive:Drive):Observable<any>
  {
    
    const httpOptions={headers:new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post(this.url+'PostDrives',drive,{withCredentials:true});
  }
  // addPackage(p:Package):Observable<any>
  //   {

  // const httpOptions={headers:new HttpHeaders({'Content-Type': 'application/json'})};
  // debugger;
  // return this.http.post(this.url+'PostPackages',p,{withCredentials:true});
  //   }
  getFindDrive(package1:Package):Observable<any>
  {
    const httpOptions={headers:new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post(this.url+"getFindDrive",package1);
  }

  getIdDrive(id:number)
  {
    return this.http.get(this.url + "GetDrivesByIdPackage?id="+id);
  }
  
  // getIdDrivePackage(id:number)
  // {
  //   return this.http.get(this.url + "GetDrivesByIdPackage?id="+id);
  // }
  updateDrive(d: Drive): Observable<any>
  {
    return this.http.put(this.url + "PutDrives", d);
  }
  getIdDriveById(id:number)
  {
    return this.http.get(this.url + "GetDrivesById?id="+id);
  }
  getIdDriveByIdP(id:number)
  {
    debugger
    return this.http.get(this.url + "GetDrivesByIdP?id="+id);
  }
  GetDrivesByIdUser(id:number)
  {
    return this.http.get(this.url + "GetDrivesByIdUser?id="+id);
  }
  // getFindDrive():Observable<any>
  // {
  //   return this.http.get(this.url+"getFindDrive?time=bbb&city=בני ברק");
  // }
  DeleteDrives(id:number): Observable<any>
  {
    return this.http.delete(this.url + "DeleteDrives?id="+id);
  }
  
}
