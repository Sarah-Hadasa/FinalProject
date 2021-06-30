import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://localhost:60320/api/";
  u: any;
  constructor(private http: HttpClient) { }

  getallusers(): Observable<any> {
    return this.http.get(this.url + "GetUsers");
  }
  addUser(): Observable<any> {

    this.u = { Id: 1, Name: 'AAA', Tz: '123456789', Phone: '0123456789', Mail: '1234AAA@gmail.com' };

    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post(this.url + "PostUsers", this.u);
  }
  getByPassword(password: string, mail: string): Observable<any> {
    return this.http.get(this.url + "GetUsersByPassword?password=" + password + "&id=" + mail);
  }
  // getById(userIdpackage:any):Observable<any>//========
  // {
  //   return this.http.get(this.url+"GetUsersPackageById",userIdpackage)
  // }


}
