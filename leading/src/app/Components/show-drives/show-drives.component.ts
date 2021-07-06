import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import {} from 'googlemaps';
import { DataDriveResults } from 'src/app/Classes/data-drive-results';
import { DataTrack } from 'src/app/Classes/data-track';
import { Drive } from 'src/app/Classes/drive';
import { Package } from 'src/app/Classes/package';
import { Travel } from 'src/app/Classes/travel';
import { DriveService } from 'src/app/Services/drive.service';
import { PackageService } from 'src/app/Services/package.service';
import { TravelService } from 'src/app/Services/travel.service';
import Swal from 'sweetalert2';
let map: google.maps.Map;
@Component({
  selector: 'app-show-drives',
  templateUrl: './show-drives.component.html',
  styleUrls: ['./show-drives.component.css'],
})
export class ShowDrivesComponent implements OnInit {
  // resultsOrigionSort: DataTrack[] = [];//========
addPackage:Package = new Package();
//resultsDesttionSort: DataTrack[] = [];//=========
driveChoose: Drive = new Drive();
package: Package = new Package();
drive: DataDriveResults = new DataDriveResults();
//resultsalldrives=[];
Package: any[] = [];
travel: Travel = new Travel();
packageIdSEarch:number=0;
itemSelect: DataDriveResults = new DataDriveResults();

alldrives: DataDriveResults[] = [];
destention: string[] = [];
origin: string[] = [];//=========
name: String = "";
Originaddress: String = "";//=========
destentionaddress: String = "";//=========
// results1: string[] = [];//===========
results1: DataTrack[] = [];//===========
// resultsOrigion: string[] = [];//========
resultsOrigion: DataTrack[] = [];//========
// resultsDesttion: string[] = [];//=========
resultsDesttion: DataTrack[] = [];//=========
ifsave:boolean=false
// drivefoundpackage:Drive= new Drive();
drivefoundpackage:any
  constructor(
    public active: ActivatedRoute,
    private packageService: PackageService,
    private TravelService: TravelService,
    private driveServe: DriveService,
    private route: Router
  ) {}

  ngOnInit(): void {
    debugger;
    // this.active.params.subscribe((data) => {
    //   const myArray = this.active.snapshot.queryParamMap.get('myArray');
    //   debugger;
    //   if (myArray != null) {
    //     this.Package = JSON.parse(myArray);
    //     this.packageIdSEarch= this.Package[0].IdPackage
    //     this.Package.sort((a, b) => (a.OriginDuration > b.OriginDuration ? 1 : -1));
    //   }
    
    // });
debugger;
    this.active.params.subscribe(data=>{
      const myArray1 = this.active.snapshot.queryParamMap.get('myArray1');
      debugger;
      if(myArray1!=null)
      {this.addPackage = JSON.parse(myArray1);
        this.package=this.addPackage
       this.loadata();
      }
      debugger     
    });
    // this.initMap();
  }

  loadata()
  {
    this.driveServe.getFindDrive(this.package).subscribe(data => {
      debugger;
      ; this.alldrives = data;////====
      if(this.alldrives.length==0)
      {
        Swal.fire('', " לא נמצא נסיעה מתאימה עבור פרטי החבילה נסה לחפש עבור מוצא /יעד/תאריך/שעה/סוג גודל חבילה אחר ",'error');
      }
      else{
        this.Originaddress = this.package.OriginStreet + " " + this.package.OriginNumBuild + ", " + this.package.OriginCity;
  
      this.destentionaddress = this.package.DestinationStreet + " " + this.package.DestinationNumBuild + ", " + this.package.DestinationCity ///=======
      // debugger;
      this.alldrives.forEach(element => {        
        this.origin.push(element['OriginStreet'] + " " + element['OriginNumBuild'] + ", " + element['OriginCity'])
        
      });
      this.alldrives.forEach(element => {
        this.origin.push(element['DestinationStreet'] + " " + element['DestinationNumBuild'] + ", " + element['DestinationCity']);
     
      });
     this.initMap();
      }
      
  
    });
  
  
  }

  initMap(): void {
    debugger;
    const bounds = new google.maps.LatLngBounds();
    const markersArray: google.maps.Marker[] = [];
    const origin2 = this.Originaddress;
    const destinationIcon =
      "https://chart.googleapis.com/chart?" +
      "chst=d_map_pin_letter&chld=D|FF0000|000000";
    const originIcon =
      "https://chart.googleapis.com/chart?" +
      "chst=d_map_pin_letter&chld=O|FFFF00|000000";
  
    map = new google.maps.Map(
  
      document.getElementById("map") as HTMLElement,
      {
        center: { lat: 55.53, lng: 9.4 },
        zoom: 10,
      }
    );
    const geocoder = new google.maps.Geocoder();
    const service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [this.Originaddress.toString(), this.destentionaddress.toString()],
        destinations: this.origin,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false,
      },
      (response, status) => {
        if (status !== "OK") {
          Swal.fire('',"Error: " + status,'error');
        } else {
          const originList = response.originAddresses;
          const destinationList = response.destinationAddresses;
          const outputDiv = document.getElementById("output") as HTMLDivElement;
          outputDiv.innerHTML = "";
          // //arry with userid
          // let userIdpackage = [];
          this.deleteMarkers(markersArray);
  
          const showGeocodedAddressOnMap = function (asDestination: boolean) {
            const icon = asDestination ? destinationIcon : originIcon;
  
            return function (
              results: google.maps.GeocoderResult[],
              status: google.maps.GeocoderStatus
            ) {
              if (status === "OK") {
                map.fitBounds(bounds.extend(results[0].geometry.location));
                markersArray.push(
                  new google.maps.Marker({
                    map,
                    position: results[0].geometry.location,
                    icon: icon,
                  })
                );
              } else {
                // Swal.fire('',"Geocode was not successful due to: " + status);
              }
            };
          };
  
          for (let i = 0; i < originList.length; i++) {
            const results = response.rows[i].elements;
            geocoder.geocode(
              { address: originList[i] },
              showGeocodedAddressOnMap(false)
            );
            //  let dataresult:DataTrack=new DataTrack();
  
            for (let j = 0; j < results.length; j++) {
              geocoder.geocode(
                { address: destinationList[j] },
                showGeocodedAddressOnMap(true)
              );
              // debugger             
              // this.results1.push(//this
  
              //   "" + originList[i] +
              //   " to " +
              //   destinationList[j] +
              //   ": " +
              //   results[j].distance.text +
              //   " in " +
              //   results[j].duration.text +
              //   "")
              let dataresult: DataTrack = new DataTrack();
              dataresult.origin = originList[i];
              dataresult.destination = destinationList[j];
              //if i want type number
              //  let distancenumber:string[]=[];
              //  distancenumber=results[j].distance.text.split(" ",1);
              //  dataresult.distance= Number(distancenumber);
  
              //if i want type string
              dataresult.distance = results[j].distance.text;//distance string
              dataresult.duration = results[j].duration.text;///duration string
  
              //// duration minutes number 
              let duringdrive: string[] = [];//string all during with split
              duringdrive = results[j].duration.text.split(" ", 3);
              if (duringdrive.length > 2) {
                dataresult.durationminutes = Number(duringdrive[0]) * 60 + Number(duringdrive[2]);
              }
              else
                dataresult.durationminutes = Number(duringdrive[0]);
              // dataresult.duration=results[j].duration.text;
              this.results1.push(dataresult);
            }
          }
          debugger;
          let countPlace = this.alldrives.length;
          for (var i = 0; i < countPlace; i++) {
            this.resultsOrigion.push(this.results1[i]);
            //debugger;
          }
  
          for (var i = this.results1.length - countPlace; i < this.results1.length; i++) {
            this.resultsDesttion.push(this.results1[i]);
  
          }
  
          //sortarry         
          this.resultsOrigion.sort((a, b) => (a.durationminutes > b.durationminutes) ? 1 : -1)
  
  
  
          //sortarry         
          this.resultsDesttion.sort((a, b) => (a.durationminutes > b.durationminutes) ? 1 : -1)
  
  
  
          this.resultData();
          debugger;
          // Create our query parameters object
          // const queryParams: any = {};
          // queryParams.myArray = JSON.stringify(this.alldrives);
          // const navigationExtras: NavigationExtras = {
          //   queryParams
          // };
          // this.route.navigate(['showDrives'], navigationExtras);
        }
  
      }
    );
  
  }

  resultData() {

    this.alldrives.forEach(element => {
      element.IdPackage=this.package.Id
      this.resultsOrigion.forEach(element1 => {
        debugger;
        let o = element['OriginStreet'] + " " + element['OriginNumBuild'] + ", " + element['OriginCity'] + "," + " ישראל";
       
        if (element1.destination == o) {
          element.OriginDuration = element1.durationminutes;
          element.OriginDistance = element1.distance;
        }
      });
      this.resultsDesttion.forEach(element2 => {
       // debugger;
        let d = element['DestinationStreet'] + " " + element['DestinationNumBuild'] + ", " + element['DestinationCity'] + "," + " ישראל";
        if (element2.destination == d) {
          element.DestinationDuration = element2.durationminutes;
          element.DestinationDistance = element2.distance
        }
      });
    });
  }



  showAllTrack() {
    // this.driveServe.getalldrive().subscribe((data) => {
    //   debugger;
    //   this.Package = data;
    // });
    debugger;
    const queryParams: any = {};
    queryParams.myArray1 = JSON.stringify(this.package);
    const navigationExtras: NavigationExtras = {
      queryParams
    };
    this.route.navigate(['alldrives'], navigationExtras);

    // const queryParams: any = {};
    // queryParams.myArray1 = JSON.stringify(this.package);
    // const navigationExtras: NavigationExtras = {
    //   queryParams
    // };
    // this.route.navigate(['alldrives'], navigationExtras);
    // this.driveServe.getalldrive().subscribe((data) => {
    //   debugger;
    //   this.alldrives = data ;
      
    // });
    // this.loadata();
  }

  onSelect(item: DataDriveResults) {
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
  showTrack() {
    debugger;
    const queryParams: any = {};
    queryParams.myArray = JSON.stringify(this.drive);
    const navigationExtras: NavigationExtras = {
      queryParams,
    };
    this.route.navigate(['track'], navigationExtras);
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
    
    
    
      
  
  // debugger;
  // this.driveChoose.DriveId = this.drive.DriveId;//==========
  // this.driveChoose.UserId = this.drive.Iduser;
  // this.driveChoose.PackageId = this.package.Id;
  // // this.driveChoose.PackageId = this.packageIdSEarch; 
  // this.driveChoose.OriginCity = this.drive.OriginCity;
  // this.driveChoose.OriginStreet = this.drive.OriginStreet;
  // this.driveChoose.OriginNumBuild = this.drive.OriginNumBuild;
  // // this.driveChoose.OriginArea =this.drive.
  // this.driveChoose.DestinationCity = this.drive.DestinationCity;
  // this.driveChoose.DestinationStreet = this.drive.DestinationStreet;
  // this.driveChoose.DestinationNumBuild = this.drive.DestinationNumBuild;
  // // this.driveChoose.DestinationArea =this.drive.
  // this.driveChoose.Date = this.drive.Date;
  // this.driveChoose.ExitTime = this.drive.ExitTime;
  // this.driveChoose.ArrivedTime = this.drive.ArrivedTime;
  // this.driveChoose.PackageType = this.drive.PackageType;
  // this.driveChoose.Remarks = this.drive.Remarks;
  // debugger;
  // this.driveServe.updateDrive(this.driveChoose).subscribe();
  // Swal.fire('', 'נסיעה נבחרה', 'success');
  
  
  // this.savePackage();
}




  // savePackage()
  // {
  //   this.packageService.getAIdPackages(this.drive.IdPackage).subscribe(data=>{debugger; this.package=data as Package;});
  //   this.package.
  // }

  // save()
  // {
  //   this.travel.Id=2
  //     this.travel.DriveId=this.itemSelect.IdDrive
  //     // this.travel.PackageId=item. IdPackage
  //     this.travel.PackageId=26
  //     this.travel.Date=new Date()
  //     this.TravelService.addTravel(this.travel).subscribe();
  // }

  //  initMap(): void {

  //    debugger;
  //   const bounds = new google.maps.LatLngBounds();
  //   const markersArray: google.maps.Marker[] = [];

  //   const origin1 = { lat: 55.93, lng: -3.118 };
  //   const origin2 = "Greenwich, England";
  //   const destinationA = "Stockholm, Sweden";
  //   const destinationB = { lat: 50.087, lng: 14.421 };

  //   const destinationIcon =
  //     "https://chart.googleapis.com/chart?" +
  //     "chst=d_map_pin_letter&chld=D|FF0000|000000";
  //   const originIcon =
  //     "https://chart.googleapis.com/chart?" +
  //     "chst=d_map_pin_letter&chld=O|FFFF00|000000";

  //     map = new google.maps.Map(

  //     document.getElementById("map") as HTMLElement,
  //     {
  //       center: { lat: 55.53, lng: 9.4 },
  //       zoom: 10,
  //     }
  //   );
  //   const geocoder = new google.maps.Geocoder();

  //   const service = new google.maps.DistanceMatrixService();
  //   service.getDistanceMatrix(
  //     {
  //       origins: [origin1, origin2],
  //       destinations: [destinationA, destinationB],
  //       travelMode: google.maps.TravelMode.DRIVING,
  //       unitSystem: google.maps.UnitSystem.METRIC,
  //       avoidHighways: false,
  //       avoidTolls: false,
  //     },
  //     (response, status) => {
  //       if (status !== "OK") {
  //         Swal.fire('',"Error was: " + status);
  //       } else {
  //         const originList = response.originAddresses;
  //         const destinationList = response.destinationAddresses;
  //         const outputDiv = document.getElementById("output") as HTMLDivElement;
  //         outputDiv.innerHTML = "";
  //        this.deleteMarkers(markersArray);

  //         const showGeocodedAddressOnMap = function (asDestination: boolean) {
  //           const icon = asDestination ? destinationIcon : originIcon;

  //           return function (
  //             results: google.maps.GeocoderResult[],
  //             status: google.maps.GeocoderStatus
  //           ) {
  //             if (status === "OK") {
  //               map.fitBounds(bounds.extend(results[0].geometry.location));
  //               markersArray.push(
  //                 new google.maps.Marker({
  //                   map,
  //                   position: results[0].geometry.location,
  //                   icon: icon,
  //                 })
  //               );
  //             } else {
  //               Swal.fire('',"Geocode was not successful due to: " + status);
  //             }
  //           };
  //         };

  //         for (let i = 0; i < originList.length; i++) {
  //           const results = response.rows[i].elements;
  //           geocoder.geocode(
  //             { address: originList[i] },
  //             showGeocodedAddressOnMap(false)
  //           );

  //           for (let j = 0; j < results.length; j++) {
  //             geocoder.geocode(
  //               { address: destinationList[j] },
  //               showGeocodedAddressOnMap(true)
  //             );
  //             outputDiv.innerHTML +=
  //               originList[i] +
  //               " to " +
  //               destinationList[j] +
  //               ": " +
  //               results[j].distance.text +
  //               " in " +
  //               results[j].duration.text +
  //               "<br>";
  //           }
  //         }
  //       }
  //     }
  //   );
  // }

  //מיין לפי נקודת יעד
  DestinationOrder() {
    this.Package.sort((a, b) =>
      a.DestinationDuration > b.DestinationDuration ? 1 : -1
    );
    debugger;
  }

  //מיין לפי נקודת מוצא
  OriginOrder() {
    debugger;
    this.Package.sort((a, b) => (a.OriginDuration > b.OriginDuration ? 1 : -1));
  }
  deleteMarkers(markersArray: google.maps.Marker[]) {
    for (let i = 0; i < markersArray.length; i++) {
      markersArray[i].setMap(null);
    }
    markersArray = [];
  }
}
