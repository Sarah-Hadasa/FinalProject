import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Classes/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User();
  name1: string = '';
  pass: string = '';

  constructor(private service: UserService) {}
  ngOnInit(): void {
    // this.myUser.Mail="";
    //this.myUser.="";//add
    //  debugger;
    //  this.service.getallusers().subscribe();
    // sessionStorage["Hidden"]="false";
    // if(sessionStorage["Hidden"]==="false")
    // {
    //   (document.getElementById("map") as HTMLElement).style.visibility="hidden";
    // }
    // this.service.addUser().subscribe();
  }
  submit1() {
    //  debugger;

    this.service
      .addUser()
      .subscribe((data) => (sessionStorage['IDUser'] = data));
  }
  login(){

    this.service
    .GetUsersByUserNameAndPassword(this.user.Password, this.user.Name)
    .subscribe((data) => (sessionStorage['IDUser'] = data.Id));
  }
}
