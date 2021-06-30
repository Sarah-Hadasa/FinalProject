import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Package } from '../Classes/package';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  url: string = "http://localhost:60320/api/";
  //p:any;
  constructor(private http: HttpClient) { }

  getAllPackages(): Observable<any> {
    return this.http.get(this.url + "GetPackages");
  }

  addPackage(p: Package): Observable<any> {

    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    debugger;
    return this.http.post(this.url + 'PostPackages', p, { withCredentials: true });
  }
  addPackageId(p: Package): Observable<any> {

    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    debugger;
    return this.http.post(this.url + 'InsertProject', p, { withCredentials: true });
  }
  
  getAllIdPackages(id:number): Observable<any> {

    return this.http.get(this.url + "GetAllPackagesById?id="+id);
  }

  getAIdPackages(id:number)
  {
   
    return this.http.get(this.url + "GetPackagesById?id="+id);
  }

  deletePackages(id:number): Observable<any>
  {
    return this.http.delete(this.url + "DeletePackages?id="+id);
  }
  updatePackage(p: Package): Observable<any>
  {
    return this.http.put(this.url + "PutPackages", p);
  }
  
}
