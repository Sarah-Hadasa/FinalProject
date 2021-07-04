import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DataDriveResults } from 'src/app/Classes/data-drive-results';
import { Drive } from 'src/app/Classes/drive';
import { Package } from 'src/app/Classes/package';
import { DriveService } from 'src/app/Services/drive.service';
import { PackageService } from 'src/app/Services/package.service';
import { TravelService } from 'src/app/Services/travel.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-packages',
  templateUrl: './show-packages.component.html',
  styleUrls: ['./show-packages.component.css']
})
export class ShowPackagesComponent implements OnInit {
  myDrive:Drive[]=[];
  allPackages:any[]=[];
  PackageCheck:any[]=[];
  PackageDataDrive:DataDriveResults[] = [];
  // PackageDataDrive:any[]=[];
  //package:Package=new Package()
  package:any
  drive:any
  constructor(private route: Router, private packages:PackageService,private travelService:TravelService,private driveS:DriveService ) { }

  ngOnInit(): void {
    // this.packages.getAllPackages().subscribe(data=>{this.allPackages=data;});
    debugger;
  }
  showMyPackage()
  {
    debugger;
    let userId=2
// this.package.UserId = sessionStorage["IDUser"];
    this.packages.getAllIdPackages(userId).subscribe(data=>{this.allPackages=data;}); 
  }
  // showMyDrives()
  // {
  //   debugger;
  //   let userId=6
  //   this.driveS.GetDrivesByIdUser(userId).subscribe(data=>{this.allPackages=data as any;debugger;}); 
  // }
  
  onSelect(item:Package)
  {
    //this.travelService.getIdTravel(id).subscribe();
    //this.driveS.getIdDrive(id).subscribe(data=>{this.myDrive=data;});
   // this.PackageCheck.push(item)
   debugger
   this.package=item;
  }
  deletePackages()
  {
    debugger
  
    this.packages.deletePackages(this.package.Id).subscribe();
    this.driveS.getIdDriveByIdP(this.package.Id).subscribe(data=>{
      this.drive=data;debugger
      Swal.fire('', 'נסיעה הוסרה  ', 'success');
      if(data!=null)
      {
        ;this.drive.PackageId=0;
      this.driveS.updateDrive(this.drive).subscribe();
      } 
    });
   
  }
  searchPackages()
  {
     // Create our query parameters object
     const queryParams: any = {};
     queryParams.myArray = JSON.stringify(this.package);
     const navigationExtras: NavigationExtras = {
       queryParams
     };
     this.route.navigate(['addPackage'], navigationExtras);

  }
  updatePackages()
  {
    const queryParams: any = {};
     queryParams.myArray = JSON.stringify(this.package);
     const navigationExtras: NavigationExtras = {
       queryParams
     };
     this.route.navigate(['addPackage'], navigationExtras);

    //this.packages.updatePackage(this.package).subscribe();
  }
  showDrive()
  {
    debugger;
    //this.package.Id=153;
    const queryParams: any = {};
      queryParams.myArray1 = JSON.stringify(this.package);
      const navigationExtras: NavigationExtras = {
        queryParams
      };
      this.route.navigate(['road_map'], navigationExtras);

     //this.route.navigate(['road_map' ,{myArray1:this.package.Id}]);}

    // this.driveS.getIdDrive(this.package.Id).subscribe(data=>{debugger; this.PackageDataDrive=data as DataDriveResults[];debugger;
    
    //   const queryParams: any = {};
    //   queryParams.myArray1 = JSON.stringify(this.PackageDataDrive);
    //   const navigationExtras: NavigationExtras = {
    //     queryParams
    //   };
    //   this.route.navigate(['road_map'], navigationExtras);
    
    
    
    // }); 
    
     
    //  // Create our query parameters object
    //  const queryParams: any = {};
    //  queryParams.myArray = JSON.stringify(this.PackageDataDrive);
    //  const navigationExtras: NavigationExtras = {
    //    queryParams
    //  };
    //  this.route.navigate(['showDrives'], navigationExtras);

    // const queryParams: any = {};
    //  queryParams.myArray1 = JSON.stringify(this.PackageDataDrive);
    //  const navigationExtras: NavigationExtras = {
    //    queryParams
    //  };
    //  this.route.navigate(['road_map'], navigationExtras);
  }
}

 