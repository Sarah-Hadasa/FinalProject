import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { HttpClient } from '@angular/common/http';
import { Message } from '../Classes/message';


@Injectable({
  providedIn: 'root'
})
export class SendEmailService {
  baseUrl:string= "http://localhost:60320/api"
  url:string = this.baseUrl+"/Mail"

  constructor(private http:HttpClient) { }
  send(m:Message){
    
    return this.http.post(this.url+"/semdEmail", m)
  }
}
