import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../Classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public loginUser = new Subject<string>();
  //url: string = "http://localhost:60320/api/";
  // u: any;
  // constructor(private http: HttpClient) { }

  // getallusers(): Observable<any> {
  //   return this.http.get(this.url + "GetUsers");
  // }
  // addUser(): Observable<any> {

  //   this.u = { Id: 1, Name: 'AAA', Tz: '123456789', Phone: '0123456789', Mail: '1234AAA@gmail.com' };

  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  //   return this.http.post(this.url + "PostUsers", this.u);
  // }
  // getByPassword(password: string, mail: string): Observable<any> {
  //   return this.http.get(this.url + "GetUsersByPassword?password=" + password + "&id=" + mail);
  // }
  // // getById(userIdpackage:any):Observable<any>//========
  // // {
  // //   return this.http.get(this.url+"GetUsersPackageById",userIdpackage)
  // // }
  url: string = "http://localhost:60320/api/";
  u: any;
  constructor(private http: HttpClient) { }

  getallusers(): Observable<any> {
    return this.http.get(this.url + "GetUsers");
  }
  addUser(u:User): Observable<any> {

    // this.u = { Id: 1, Name: 'AAA', Tz: '123456789', Phone: '0123456789', Mail: '1234AAA@gmail.com' };

    // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    const httpOptions:object={
      headers:new HttpHeaders({
        'Accept':'text/html',
        'Content-Type':'text/plain; charset=utf-8'
      }),
      responseType:'text'
    } 
    debugger;
    u.Id=13
    return this.http.post(this.url + "PostUsers", u);
  }
  getByPassword(name:string, password: string): Observable<any> {
    return this.http.get(this.url + "GetUsersByPassword?name=" + name + "&password=" + password);
  }
  GetUsersByUserNameAndPassword(password: string, mail: string): Observable<User> {
    return this.http.get<User>(this.url + "GetUsersByPassword?password=" + password + "&username=" + mail);
  }
  // getById(userIdpackage:any):Observable<any>//========
  // {
  //   return this.http.get(this.url+"GetUsersPackageById",userIdpackage)
  // }

  PutUser(UpdateUser:User)
  {
    const httpOptions : Object = {
        headers: new HttpHeaders({
          'Accept': 'text/html',
          'Content-Type': 'text/plain; charset=utf-8'
        }),
        responseType: 'text'
      };
      return this.http.put(this.url+"PutUsers",UpdateUser);
  }



}
