import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Drive } from 'src/app/Classes/drive';
import { Package } from 'src/app/Classes/package';
import { DriveService } from 'src/app/Services/drive.service';
import { PackageService } from 'src/app/Services/package.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-my-drive',
  templateUrl: './show-my-drive.component.html',
  styleUrls: ['./show-my-drive.component.css']
})
export class ShowMyDriveComponent implements OnInit {
  alldrive: any[] = []
  // drive:Drive=new Drive()
  drive: any
  package: Package = new Package()
  drivePackage: any
  to: string = ""
  constructor(private driveS: DriveService, private packages: PackageService, private route: Router) { }

  ngOnInit(): void {
  }
  showMyDrive() {

    debugger;
    let userId = sessionStorage["Id"];
    // let userId=2
    this.driveS.GetDrivesByIdUser(userId).subscribe(data => { this.alldrive = data as any; debugger; });

  }
  deleteDrive() {
    debugger
    this.packages.GetPackagesByIdDrive(this.drive.PackageId).subscribe(data => {
    this.drivePackage = data; debugger;
      if (data != null) {
        debugger;

        let mail = this.drivePackage[0].Mail;
        let name = "Sarah Foox"
        let subject = "Delete drive"
        this.route.navigate(['sendMail/' + mail + '/' + name + '/' + subject])
      }
      this.driveS.DeleteDrives(this.drive.DriveId).subscribe();
      Swal.fire('', 'נסיעה הוסרה', 'success');
      //this.showMyDrive()

      //this.route.navigate(['sendMail/'+this.drive.Mail+'/'+this.drive.Name])


      // לבדיקה כדי שלא ימחק לי 
      // this.driveS.DeleteDrives(this.drive.DriveId).subscribe();

      this.showMyDrive()


    });


    //לשלוח מייל לחבילה ששקשר עמו
    // this.drive.PackageId=null;
    // this.driveS.updateDrive(this.drive).subscribe();

  }
  onSelect(item: Drive) {
    debugger
    this.drive = item;
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
<<<<<<< HEAD
  updateDrive() {
    const queryParams: any = {};
    queryParams.myArray = JSON.stringify(this.drive);
    const navigationExtras: NavigationExtras = {
      queryParams
    };
    this.route.navigate(['addDrive'], navigationExtras);



  }
  showPackage() {
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
=======
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
>>>>>>> origin

}
