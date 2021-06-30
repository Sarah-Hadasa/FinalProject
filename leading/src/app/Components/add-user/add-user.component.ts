import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Classes/user';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  newUser = new User()
  flag: boolean = true;
  errorServer: boolean = true;
  constructor(private serviceUser: UserService, private router: Router) { }

  ngOnInit(): void {
    
  }
  AddNewUser() {
    return this.serviceUser.addUser(this.newUser).subscribe(data => {
      debugger;
      if (data == true)//succssed
      {
        this.flag = false;
        // save details of user in session storage
        sessionStorage["Name"] = this.newUser.Name;
        sessionStorage["Password"] = this.newUser.Password;
        alert("Wellcome");
        this.router.navigate(['home']);

      }
      else {
        this.flag = true;
        alert("not good");
        this.errorServer = false;
        this.router.navigate(['register']);
      }

    });
  }
}
// import { Component, OnInit, ViewEncapsulation, Output } from '@angular/core';
// import { Users } from 'src/app/Classes/users';
// import { UsersService } from 'src/app/Services/users.service';
// import { ok } from 'assert';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css'],
//   encapsulation: ViewEncapsulation.None
// })
// export class RegisterComponent implements OnInit {
//   NewUser = new Users("", "", "", 0, "", "", "");
//   flag: boolean = true;
//   errorServer: boolean = true;
//   constructor(private serviceUser: UsersService, private router: Router) { }

//   ngOnInit(): void {
//   }
  // AddNewUser() {
  //   return this.serviceUser.AddNewUser(this.NewUser).subscribe(data => {
  //     debugger;
  //     if (data == false)//succssed
  //     {
  //       this.flag = false;
  //       // save details of user in session storage
  //       sessionStorage["UserName"] = this.NewUser.UserName;
  //       sessionStorage["UserFamilyName"] = this.NewUser.UserFamilyName;
  //       sessionStorage["UserCode"] = this.NewUser.UserCode;
  //       this.router.navigate(['currentLocation']);

  //     }
  //     else {
  //       this.flag = true;
  //       alert("not good");
  //       this.errorServer = false;
  //       this.router.navigate(['register']);
  //     }

  //   });
  // }
// }
