import { Component, OnInit } from '@angular/core';
import { DriveService } from 'src/app/Services/drive.service';
import { PackageService } from 'src/app/Services/package.service';
import { TravelService } from 'src/app/Services/travel.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  alldrives:any[]=[];
  allPackages:any[]=[];
  allTravels:any[]=[];
  allUsers:any[]=[];
name:String="";
  constructor(private drives:DriveService,
    private packages:PackageService ,
    private travels:TravelService ,
    private users:UserService) { }
 
  ngOnInit(): void {
    this.drives.getalldrive().subscribe(data=>{this.alldrives=data ;this.name =this.alldrives[0]["UserId"]  }  );
    this.packages.getAllPackages().subscribe(data=>{this.allPackages=data;this.name=this.allPackages[0]["UserId"]});
    this.travels.getAllTravels().subscribe(data=>{this.allTravels=data;this.name=this.allTravels[0]["UserId"]});
    this.users.getallusers().subscribe(data=>{this.allUsers=data;this.name=this.allUsers[0]["UserId"]});


  }



  
}
