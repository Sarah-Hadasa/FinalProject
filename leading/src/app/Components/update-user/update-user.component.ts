import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  putUser:User= new User()
  flag:boolean= true;
  errorServer:boolean= true;

  constructor(private serviceUser:UserService, private router:Router) { }

  ngOnInit(): void {
    this.serviceUser.getByPassword(sessionStorage["Mail"],sessionStorage["Password"]).subscribe(data => {
      if (data != null)
      {
        debugger;
        this.putUser=data as User;
      }
    });
  }
  UpdateUser()
  {
    debugger;
    this.serviceUser.PutUser(this.putUser).subscribe(data => {
      debugger;
      if (data == true)// succssed to update
      {
        this.flag = false;// הערה גלויה
        //this.router.navigate(['home']);

      }
      else {
        this.flag = true;
        this.errorServer = false;
        
      }

    });
  }  
  }
// }
