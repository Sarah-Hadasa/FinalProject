import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Classes/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User=new User();
  name1:string="";
  pass:string="";
  IsHidden:boolean=true;
  Hide:boolean=true;
 
   constructor( private service:UserService, private router:Router) { 


 }
  ngOnInit(): void {
    // this.myUser.Mail="";
    //this.myUser.="";//add
    debugger;
    this.service.getallusers().subscribe();
    // sessionStorage["Hidden"]="false";
    // if(sessionStorage["Hidden"]==="false")
    // {
    //   (document.getElementById("map") as HTMLElement).style.visibility="hidden";
    // }
    // this.service.addUser().subscribe();
  }
  checkUser()
  {
    this.service.getByPassword(this.user.Name, this.user.Password).subscribe(data=>{
      if(data==null)
        {alert("הירשם")
        this.IsHidden=false
        this.router.navigate(['addUser'])
      }
      else{
        alert("משתמש קיים")
        sessionStorage["Name"]=data["Name"];
        sessionStorage["Password"]=data["Password"];
        this.IsHidden=true
        this.router.navigate(['home'])
      } 
      });
    //this.service.addUser().subscribe();
  }
  //isExist(){
 // this.service.getByPassword(this.user.Password, this.user.Mail).subscribe(x=>{
 // if(x==true)
 // alert("משתמש קיים")
  //else
 // alert("הירשם")
 // })
//}
NewUser(){
  this.service.getByPassword(this.user.Password, this.user.Mail).subscribe(data=>{
    if(data==null)
    this.router.navigate(['register'])
    else{
      this.IsHidden=true
      this.Hide=false
    } 
    });
}
  //   // this.myUser.Mail="";
  //   //this.myUser.="";//add
  //   debugger;
  //   this.service.getallusers().subscribe();
  //   // sessionStorage["Hidden"]="false";
  //   // if(sessionStorage["Hidden"]==="false")
  //   // {
  //   //   (document.getElementById("map") as HTMLElement).style.visibility="hidden";
  //   // }
  //   // this.service.addUser().subscribe();
  // }
  // submit1()
  // {
  //   debugger;
  
  //   //this.service.addUser().subscribe(data=> sessionStorage["IDUser"]=data);
  // }
  

}
