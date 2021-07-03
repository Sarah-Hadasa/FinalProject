import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Drive } from 'src/app/Classes/drive';
import { Package } from 'src/app/Classes/package';
import { DriveService } from 'src/app/Services/drive.service';
import { PackageService } from 'src/app/Services/package.service';

@Component({
  selector: 'app-show-my-drive',
  templateUrl: './show-my-drive.component.html',
  styleUrls: ['./show-my-drive.component.css']
})
export class ShowMyDriveComponent implements OnInit {
  alldrive:any[]=[]
  // drive:Drive=new Drive()
  drive:any
  package:Package=new Package()
  constructor(private driveS:DriveService,private packages:PackageService, private route: Router) { }

  ngOnInit(): void {
  }
  showMyDrive()
  {
  
    debugger;
    let userId=6
    this.driveS.GetDrivesByIdUser(userId).subscribe(data=>{this.alldrive=data as any;debugger;}); 
  
  }
  deleteDrive()
  {
    debugger
    this.driveS.DeleteDrives(this.drive.DriveId).subscribe();
    //לשלוח מייל לחבילה ששקשר עמו
    // this.drive.PackageId=null;
    // this.driveS.updateDrive(this.drive).subscribe();

  }
  onSelect(item:Drive)
  {
   debugger
   this.drive=item;
  }

//   searchPackages()
//   {
//      // Create our query parameters object
//      const queryParams: any = {};
//      queryParams.myArray = JSON.stringify(this.package);
//      const navigationExtras: NavigationExtras = {
//        queryParams
//      };
//      this.route.navigate(['addPackage'], navigationExtras);
     
//   }
  updateDrive()
  {
   const queryParams: any = {};
     queryParams.myArray = JSON.stringify(this.drive);
   const navigationExtras: NavigationExtras = {
      queryParams
    };
    this.route.navigate(['addDrive'], navigationExtras);

  
   
  }
  showPackage()
   {
     debugger;
    // this.packages.getAIdPackages(this.drive.PackageId).subscribe(data=>{this.package=data as Package;debugger;
    
    const queryParams: any = {};
      queryParams.myArray2 = JSON.stringify(this.drive);
      const navigationExtras: NavigationExtras = {
        queryParams
      };
      this.route.navigate(['road_map'], navigationExtras);
    
    // }); 
  
   }

}
