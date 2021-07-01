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
let map: google.maps.Map;
@Component({
  selector: 'app-show-drives',
  templateUrl: './show-drives.component.html',
  styleUrls: ['./show-drives.component.css'],
})
export class ShowDrivesComponent implements OnInit {
  // resultsOrigionSort: DataTrack[] = [];//========

  //resultsDesttionSort: DataTrack[] = [];//=========
  driveChoose: Drive = new Drive();
  package: Package = new Package();
  drive: DataDriveResults = new DataDriveResults();
  //resultsalldrives=[];
  Package: any[] = [];
  travel: Travel = new Travel();
  itemSelect: DataDriveResults = new DataDriveResults();
  constructor(
    public active: ActivatedRoute,
    private packageService: PackageService,
    private TravelService: TravelService,
    private driveServe: DriveService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.active.params.subscribe((data) => {
      const myArray = this.active.snapshot.queryParamMap.get('myArray');
      debugger;
      if (myArray != null) {
        this.Package = JSON.parse(myArray);
      }
    
    });

    // this.initMap();
  }
  showAllTrack() {
    this.driveServe.getalldrive().subscribe((data) => {
      debugger;
      this.Package = data;
    });
  }

  onSelect(item: DataDriveResults) {
    debugger;
    this.travel.Id = 2;
    this.travel.DriveId = item.IdDrive;
    // this.travel.PackageId=item. IdPackage
    this.travel.PackageId = 26;
    this.travel.Date = new Date();
    this.TravelService.addTravel(this.travel).subscribe();

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
    debugger;
    this.driveChoose.DriveId = this.drive.IdDrive;
    this.driveChoose.UserId = this.drive.Iduser;
    this.driveChoose.PackageId = this.drive.IdPackage;
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
