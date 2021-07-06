import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from 'src/app/Classes/user';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User();
  name1: string = '';
  pass: string = '';

  constructor(private service: UserService, private router: Router) {}
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
  checkUser() {
    debugger
    this.service
      .getByPassword(this.user.Mail, this.user.Password)
      .subscribe((data) => {
        if (data == null) {
          Swal.fire('', 'המשתמש לא קיים במערכת', 'error');

          //this.router.navigate(['addUser'])
        } else {
          Swal.fire('', 'הכניסה בוצעה בהצלחה', 'success');
          debugger;
          sessionStorage['Name'] = data['Name'];
          sessionStorage['Mail'] = data['Mail'];
          sessionStorage['Password'] = data['Password'];
          sessionStorage['Id'] = data['Id'];
          sessionStorage['Tz'] = data['Tz'];
          sessionStorage['Phone'] = data['Phone'];
          this.service.loginUser.next();
          this.router.navigate(['home']);
        }
      });
    //this.service.addUser().subscribe();
  }
  //isExist(){
  // this.service.getByPassword(this.user.Password, this.user.Mail).subscribe(x=>{
  // if(x==true)
  // Swal.fire('',"משתמש קיים")
  //else
  // Swal.fire('',"הירשם")
  // })
  //}
  NewUser() {
    this.service
      .getByPassword(this.user.Password, this.user.Mail)
      .subscribe((data) => {
        if (data == null) this.router.navigate(['addUser']);
        else {
          Swal.fire('', 'המשתמש לא קיים במערכת', 'error');
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
