import { Component, OnInit } from '@angular/core';
import { from, observable } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Package } from 'src/app/Classes/package';
import { DriveService } from 'src/app/Services/drive.service';
import { PackageService } from 'src/app/Services/package.service';
import { } from 'googlemaps';
import { element } from 'protractor';
// import { dataDriveResult } from 'src/app/Classes/dataDriveResult';
import { DataDriveResults } from 'src/app/Classes/data-drive-results'
import { DataTrack } from 'src/app/Classes/data-track';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import Swal from 'sweetalert2';
let map: google.maps.Map;
@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent implements OnInit {
  package: Package = new Package();
  // alldrives:any[]=[];
  // alldrives: dataDriveResult[] = []; //============
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
  // countPlace:number=0;//============change num 
  //arry with userid
  // userIdpackage:any=[];//==========
  // dataresult1:DataTrack[]=[];
  //  dataresult:DataTrack =new DataTrack();
  // dataresult:DataTrack | undefined ;
typepackage:string[]=["1","2","3"];

  constructor(public active:ActivatedRoute,
     private route: Router,
      private PackageService: PackageService,
       private DriveService: DriveService) { }
  searchDrive()
  {
    debugger;
    const queryParams: any = {};
     queryParams.myArray1 = JSON.stringify(this.package);
     const navigationExtras: NavigationExtras = {
       queryParams
     };
     this.route.navigate(['showDrives'], navigationExtras);

     
    // this.loadata();

  }

  savePackage() {
    // this.package.OriginCity = "בני ברק"
    // this.package.OriginStreet = "גיבורי ישראל"
    // this.package.OriginNumBuild = "6"
    // this.package.DestinationCity = "ירושלים"
    // this.package.DestinationStreet = "יצחק אלחנן"
    // this.package.DestinationNumBuild = "7"
    // this.package.UserId = sessionStorage["IDUser"];
    debugger
    //this.service.addUser().subscribe(data=> sessionStorage["IDUser"]=data);
    // ngOnInit(): void {
  //   // this.myUser.Mail="";
  //   //this.myUser.="";//add
  //   debugger;
  //   this.service.getallusers().subscribe();
  //   // sessionStorage["Hidden"]="false";
  //   // if(sessionStorage["Hidden"]==="false")
  //   // {
  //   //   (document.getElementById("map") as HTMLElement).style.visibility="hidden";
  //   // }
  //   // this.service.addUser().subscribe();
  // }
  // submit1()
  // {
  //   debugger;
  
  //   //this.service.addUser().subscribe(data=> sessionStorage["IDUser"]=data);
  // }
    this.package.UserId = 2;
    this.PackageService.addPackage(this.package).subscribe(data=>{debugger; this.package.Id=Number(data);
    Swal.fire('', 'שמירה בוצעה בהצלחה ', 'success');
    }); 
    //this.loadata();
    
    //this.DriveService.getalldrive().subscribe(data=>{this.alldrives=data ;this.name =this.alldrives[0]["UserId"]  } );
    //  this.DriveService.getFindDrive().subscribe(data=>{this.alldrives=data ; this.alldrives.push(this.package);this.name =this.alldrives[0]["UserId"] ;
    //  this.DriveService.getFindDrive(this.package).subscribe(data=>{ ; this.alldrives=data ; this.alldrives.push(this.package) ;////======= 
  //   this.DriveService.getFindDrive(this.package).subscribe(data => {
  //     debugger;
  //     ; this.alldrives = data;////====
  //     this.Originaddress = this.package.OriginStreet + " " + this.package.OriginNumBuild + ", " + this.package.OriginCity;

  //     this.destentionaddress = this.package.DestinationStreet + " " + this.package.DestinationNumBuild + ", " + this.package.DestinationCity ///=======
  //     // debugger;
  //     this.alldrives.forEach(element => {        
  //       this.origin.push(element['OriginStreet'] + " " + element['OriginNumBuild'] + ", " + element['OriginCity'])
        
  //     });
  //     this.alldrives.forEach(element => {
  //       this.origin.push(element['DestinationStreet'] + " " + element['DestinationNumBuild'] + ", " + element['DestinationCity']);
     
  //     });
  //     this.initMap();
  //   });
  // }
  }
  updatePackages()
  {
    debugger;
    this.PackageService.updatePackage(this.package).subscribe();
    Swal.fire('', 'עדכון בוצע בהצלחה ', 'success');
    debugger
    
  }
// loadata()
// {
//   this.DriveService.getFindDrive(this.package).subscribe(data => {
//     debugger;
//     ; this.alldrives = data;////====
//     this.Originaddress = this.package.OriginStreet + " " + this.package.OriginNumBuild + ", " + this.package.OriginCity;

//     this.destentionaddress = this.package.DestinationStreet + " " + this.package.DestinationNumBuild + ", " + this.package.DestinationCity ///=======
//     // debugger;
//     this.alldrives.forEach(element => {        
//       this.origin.push(element['OriginStreet'] + " " + element['OriginNumBuild'] + ", " + element['OriginCity'])
      
//     });
//     this.alldrives.forEach(element => {
//       this.origin.push(element['DestinationStreet'] + " " + element['DestinationNumBuild'] + ", " + element['DestinationCity']);
   
//     });
//     this.initMap();
//   });


// }




  ngOnInit(): void {
    this.active.params.subscribe(data=>{
      const myArray = this.active.snapshot.queryParamMap.get('myArray');
      debugger;
      if(myArray!=null)
      {this.package = JSON.parse(myArray);
       
       //this.loadata();
      }
    
    });

  //   this.active.params.subscribe(data=>{
  //     const myArray1 = this.active.snapshot.queryParamMap.get('myArray1');
  //     debugger;
  //     if(myArray1!=null)
  //     {this.package = JSON.parse(myArray1);
  //      //this.loadata();
  //      this.origin.push(this.package.OriginStreet + " " +this.package.OriginNumBuild + ", " +this.package.OriginCity);
  //      this.origin.push(this.package.DestinationStreet + " " + this.package.DestinationNumBuild + ", " + this.package.DestinationCity);
       
  //      this.PackageService.getAIdPackages(this.package.Id).subscribe
  //     }
  //     debugger     
  //   });
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

  //   resultData()
  //   {
  //     this.alldrives.forEach(element => {
  //       element.DestinationDuration=this.resultsDesttion.filter(function (student) {
  //             return resultsDesttion.DestinationStreet === "Basketball";
  //         }).map(function (student) {
  //             return this.resultsDesttion.durationminutes;
  //         })
  //     });

  //   //   let basketballPlayers = students.filter(function (student) {
  //   //     return student.sports === "Basketball";
  //   // }).map(function (student) {
  //   //     return student.name;
  //   // })

  // this.alldrives.forEach(element => {
  //   element.DestinationDuration=this.resultsDesttion.map(val=>val.destination=element['DestinationStreet'] + " " + element['DestinationNumBuild'] + ", " + element['DestinationCity']
  //   return this.resultsDesttion.duration)
  // });
  // }
  // let result = array.map(val => val +10);
  // this.origin.push();
  // element['OriginStreet'] + " " + element['OriginNumBuild'] + ", " + element['OriginCity']


  // resultsOrigion=results1.sub(4);
  // resultsDesttion=results1.sub
  // resultsOrigion.push(results1.pop(3));
  // let id=0;
  // let countPlace=3;
  // for (let index = 0; index < countPlace; index++) {
  //   resultsOrigion[id]=results1[index];
  //   resultsDesttion[id]=results1[results1.length-index];
  //   id++;
  //   debugger;
  // }




  //sort arry
  // resultsOrigion.sort((a,b) => a.title.rendered.localeCompare(b.title.rendered));
  // resultsOrigion.sort(function (a, b) {
  //   return a.duration.text - b.duration.text;
  // });

  // resultsOrigion.sort(function(a, b) {
  //   return a.duration.localeCompare(b.duration);
  // });

  // //arry with userid
  // let userIdpackage=[];
  // userIdpackage
  // for(let i=0;i<resultsOrigion.length;i++)
  //  {
  //   userIdpackage.push(resultsOrigion[i]);
  //  }
  //call serner to get data f userid
  //  this.UserService.getFindDrive(this.package).subscribe(data=>{ ; this.alldrives=data ; this.alldrives.push(this.package) ;////======= 


  deleteMarkers(markersArray: google.maps.Marker[]) {
    for (let i = 0; i < markersArray.length; i++) {
      markersArray[i].setMap(null);
    }
    markersArray = [];
  }



}





