import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drive } from 'src/app/Classes/drive';
import { Package } from 'src/app/Classes/package';
import { DriveService } from 'src/app/Services/drive.service';
import { PackageService } from 'src/app/Services/package.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alldrives',
  templateUrl: './alldrives.component.html',
  styleUrls: ['./alldrives.component.css']
})
export class AlldrivesComponent implements OnInit {

  addPackage: Package = new Package();
  package: Package = new Package();
  // alldrives:Drive=new Drive();
  alldrives: any
  // drive: Drive = new Drive();
  drive:any
  driveChoose: Drive = new Drive();

  drivefoundpackage:any
  
  constructor(public active: ActivatedRoute,
    private packageService: PackageService,

    private driveServe: DriveService,
    private route: Router) { }

    ngOnInit(): void {
      this.active.params.subscribe(data => {
        const myArray1 = this.active.snapshot.queryParamMap.get('myArray1');
        debugger;
        if (myArray1 != null) {
          this.addPackage = JSON.parse(myArray1);
          this.package = this.addPackage;
          this.showAllTrack();
        }
        debugger
      });
    }

    showAllTrack() {
      debugger;
      this.driveServe.getalldrive().subscribe((data) => {
        debugger;
        this.alldrives = data;
  
      });
    }

    onSelect(item: any) {
      // debugger;
      // this.travel.Id = 2;
      // this.travel.DriveId = item.IdDrive;
      // // this.travel.PackageId=item. IdPackage
      // this.travel.PackageId = 26;
      // this.travel.Date = new Date();
      // this.TravelService.addTravel(this.travel).subscribe();
      // this.drive.IdPackage=
      this.drive = item;
    }

    saveDrive() {
   
      this.driveServe.getIdDriveByIdP(this.package.Id).subscribe(data=>{debugger; this.drivefoundpackage=data;
      if (data!=null)
    {
      debugger;
      this.drivefoundpackage.PackageId=null;
      this.driveServe.updateDrive(this.drivefoundpackage).subscribe();
      Swal.fire('', 'נסיעה הנוכחית נבחרה ושמירת הנסיעה  הקודמת הוסרה ', 'success');
    }
    else
  {
    Swal.fire('', 'נסיעה נבחרה', 'success');
  }
    
    debugger;
    this.driveChoose.DriveId = this.drive.DriveId;//==========
    // this.driveChoose.UserId = this.drive.Iduser;
    this.driveChoose.UserId = this.drive.UserId;
    this.driveChoose.PackageId = this.package.Id;
    // this.driveChoose.PackageId = this.packageIdSEarch; 
    this.driveChoose.OriginCity = this.drive.OriginCity;
    this.driveChoose.OriginStreet = this.drive.OriginStreet;
    this.driveChoose.OriginNumBuild = this.drive.OriginNumBuild;
    // this.driveChoose.OriginArea =this.drive.
    this.driveChoose.DestinationCity = this.drive.DestinationCity;
    this.driveChoose.DestinationStreet = this.drive.DestinationStreet;
    this.driveChoose.DestinationNumBuild = this.drive.DestinationNumBuild;
    // this.driveChoose.DestinationArea =this.drive.
    this.driveChoose.Date = this.drive.Date;
    this.driveChoose.ExitTime = this.drive.ExitTime;
    this.driveChoose.ArrivedTime = this.drive.ArrivedTime;
    this.driveChoose.PackageType = this.drive.PackageType;
    this.driveChoose.Remarks = this.drive.Remarks;
    debugger;
    this.driveServe.updateDrive(this.driveChoose).subscribe();
    // Swal.fire('', 'נסיעה נבחרה', 'success');
  });
      
   
  }
}
