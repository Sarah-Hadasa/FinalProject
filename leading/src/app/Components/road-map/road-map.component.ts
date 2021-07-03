import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { } from 'googlemaps';
import { DataDriveResults } from 'src/app/Classes/data-drive-results';
import { Drive } from 'src/app/Classes/drive';
import { Package } from 'src/app/Classes/package';
import { DriveService } from 'src/app/Services/drive.service';
import { PackageService } from 'src/app/Services/package.service';
import Swal from 'sweetalert2';
let map: google.maps.Map;


@Component({
  selector: 'app-road-map',
  templateUrl: './road-map.component.html',
  styleUrls: ['./road-map.component.css']
})
export class RoadMapComponent implements OnInit {
  // deleteMarkers: any;
  //drivePackage: DataDriveResults = new DataDriveResults()
   drivePackage:DataDriveResults[] = [];
  package: Package = new Package();
  origin: string = ""
  id: number = 0;
  // drive:Drive=new Drive()
  drive:any
  constructor(private route: Router, public active: ActivatedRoute, private PackageService: PackageService, private driveServ: DriveService) {



  }

  // ngOnInit(): void {
  //   this.active.params.subscribe(data => {
  //     const myArray1 = this.active.snapshot.queryParamMap.get('myArray1');
  //     debugger;
  //     if (myArray1 != null) {
  //       this.package = JSON.parse(myArray1);

  //     }
  //     this.driveServ.getIdDrive(this.package.Id).subscribe(data => {
  //       debugger; this.drivePackage = data as DataDriveResults[]; debugger; 
  //       if (this.drivePackage.length==0)
  //       Swal.fire('',"לא נמצא נסיעה",'error');
  //       else
  //       this.initMap();
  //     });
  //   });
  ngOnInit(): void {
    this.active.params.subscribe(data => {
      const myArray1 = this.active.snapshot.queryParamMap.get('myArray1');
      debugger;
      if (myArray1 != null) {
        this.package = JSON.parse(myArray1);
        this.findDrive()
      }
     
      
    });

    this.active.params.subscribe(data => {
      const myArray2 = this.active.snapshot.queryParamMap.get('myArray2');
      debugger;
      if (myArray2 != null) {
        this.drive = JSON.parse(myArray2);
   this.PackageService.GetPackagesByIdDrive(this.drive.PackageId).subscribe(data=>{this.drivePackage = data as DataDriveResults[];debugger;
 const origin1o = this.drivePackage[0].OriginStreet + " " + this.drivePackage[0].OriginNumBuild + ", " + this.drivePackage[0].OriginCity
 debugger
 const   destinationAd= this.drive.OriginStreet + " " + this.drive.OriginNumBuild + ", " + this.drive.OriginCity;
 debugger
 const origin2o = this.drivePackage[0].DestinationStreet + " " + this.drivePackage[0].DestinationNumBuild + ", " + this.drivePackage[0].DestinationCity
 debugger
 const destinationBd = this.drive.DestinationStreet + " " + this.drive.DestinationNumBuild + ", " + this.drive.DestinationCity;
 debugger
        this.initMap(origin1o,destinationAd ,origin2o ,destinationBd)
      });
      }
      
      
    });
  }
    findDrive(){
      this.driveServ.getIdDrive(this.package.Id).subscribe(data => {
      debugger; this.drivePackage = data as DataDriveResults[]; debugger; 
      if (this.drivePackage.length==0)
      Swal.fire('',"לא נמצא נסיעה",'error');
      else
      {
        const origin11 = this.drivePackage[0].OriginStreet + " " + this.drivePackage[0].OriginNumBuild + ", " + this.drivePackage[0].OriginCity
 
 const   destinationAA= this.package.OriginStreet + " " + this.package.OriginNumBuild + ", " + this.package.OriginCity;
 
 const origin22 = this.drivePackage[0].DestinationStreet + " " + this.drivePackage[0].DestinationNumBuild + ", " + this.drivePackage[0].DestinationCity
 
 const destinationBB = this.package.DestinationStreet + " " + this.package.DestinationNumBuild + ", " + this.package.DestinationCity;
 this.initMap(origin11,destinationAA ,origin22 ,destinationBB);
      }
      
    });
    
    

    // this.active.params.subscribe(data=>{
    //       const myArray1 = this.active.snapshot.queryParamMap.get('myArray1');
    //       debugger;
    //       if(myArray1!=null)
    //       {this.drivePackage = JSON.parse(myArray1);
    //        //this.loadata();
    //        //this.origin.push(this.package.OriginStreet + " " +this.package.OriginNumBuild + ", " +this.package.OriginCity);
    //        //this.origin.push(this.package.DestinationStreet + " " + this.package.DestinationNumBuild + ", " + this.package.DestinationCity);

    //       // this.PackageService.getAIdPackages(this.package.Id).subscribe
    //       }
    //       this.PackageService.getAIdPackages(this.drivePackage[0].IdPackage).subscribe
    //       (  data=>{;debugger;this.package=data as Package; }); 

    //       debugger
    //       // this.initMap()     
    //     });
   //;
   }

  show() {
    //  this.initMap()
  }
  //  initMap(): void {
  //   map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
  //     center: { lat: -34.397, lng: 150.644 },
  //     zoom: 8,
  //   });

  // } 
  cancelDrive()
  {
    debugger
    this.driveServ.getIdDriveById(this.drivePackage[0].IdDrive).subscribe(data => {
      debugger; this.drive = data; debugger; this.drive.PackageId=null;debugger;
      this.driveServ.updateDrive(this.drive).subscribe();
      this.ngOnInit();
     // this.drivePackage[0]=new DataDriveResults()    
    // Swal.fire('',"לא נמצא נסיעה",'error');
    });
    
    // this.driveServ.updateDrive(this.drive).subscribe();
    debugger
  }
  initMap(origin11:any,destinationAA:any ,origin22:any ,destinationBB:any): void {




    debugger;
    const bounds = new google.maps.LatLngBounds();
    const markersArray: google.maps.Marker[] = [];

    //const origin1 = { lat: 55.93, lng: -3.118 };
   // const origin1 = this.drivePackage[0].OriginStreet + " " + this.drivePackage[0].OriginNumBuild + ", " + this.drivePackage[0].OriginCity
   const origin1= origin11;
   const destinationA= destinationAA;
   // const origin2 = "Greenwich, England";
   const origin2= origin22;
   const destinationB=destinationBB;
    //const   destinationA= this.package.OriginStreet + " " + this.package.OriginNumBuild + ", " + this.package.OriginCity;
    //const destinationA = "Stockholm, Sweden";
    //const origin2 = this.drivePackage[0].DestinationStreet + " " + this.drivePackage[0].DestinationNumBuild + ", " + this.drivePackage[0].DestinationCity
    // const destinationB = { lat: 50.087, lng: 14.421 };
    //const destinationB = this.package.DestinationStreet + " " + this.package.DestinationNumBuild + ", " + this.package.DestinationCity;

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
        origins: [origin1, origin2],
        destinations: [destinationA, destinationB],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false,
      },
      (response, status) => {
        if (status !== "OK") {
          Swal.fire('',"Error : " + status,'error');
        } else {
          const originList = response.originAddresses;
          const destinationList = response.destinationAddresses;
          const outputDiv = document.getElementById("output") as HTMLDivElement;
          outputDiv.innerHTML = "";
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
                Swal.fire('',"Geocode was not successful due to: " + status,'error');
              }
            };
          };

          for (let i = 0; i < originList.length
            
            ; i++) {debugger;
            const results = response.rows[i].elements;
            geocoder.geocode(
              { address: originList[i] },
              showGeocodedAddressOnMap(false)
            );

            for (let j = 0; j < results.length;
               j++) {debugger;
              geocoder.geocode(
                { address: destinationList[j] },
                showGeocodedAddressOnMap(true)
              );
              outputDiv.innerHTML +=
                originList[i] +
                " to " +
                destinationList[j] +
                ": " +
                results[j].distance.text +
                " in " +
                results[j].duration.text +
                "<br>";
            }
          }
        }
      }
    );
  }
  // deleteMarkers(markersArray: google.maps.Marker[]) {
  //   throw new Error('Method not implemented.');


  deleteMarkers(markersArray: google.maps.Marker[]) {
    for (let i = 0; i < markersArray.length; i++) {
      markersArray[i].setMap(null);
    }
    markersArray = [];
  }
}