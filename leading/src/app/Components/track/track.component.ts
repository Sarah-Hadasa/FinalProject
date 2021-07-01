import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataDriveResults } from 'src/app/Classes/data-drive-results';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  driveAddress:DataDriveResults=new DataDriveResults;
start:string=""
end:string=""
  constructor(public active:ActivatedRoute) { 
    
  }
  // start:string="  הירדן 5 בני ברק";
  // end:string="גניחובסקי 14 בני ברק";
  ngOnInit(): void {
    debugger;
    ///=======================
    this.active.params.subscribe(data=>{
      const myArray = this.active.snapshot.queryParamMap.get('myArray');
      debugger;
      if(myArray!=null)
      {this.driveAddress = JSON.parse(myArray);
       this.start=this.driveAddress.OriginStreet+" "+this.driveAddress.OriginNumBuild+" "+this.driveAddress.OriginCity;
       this.end=this.driveAddress.DestinationStreet+" "+this.driveAddress.DestinationNumBuild+" "+this.driveAddress.DestinationCity;
      }
      debugger     
    });
    ///=======================

  this.initMap();
  }
  initMap(): void {
    const markerArray: google.maps.Marker[] = [];
 debugger; 
    // Instantiate a directions service.
    const directionsService = new google.maps.DirectionsService();
  
    // Create a map and center it on Manhattan.
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 13,
        center: { lat: 32.085674, lng: 34.833913 },
      }
    );
  debugger;
    // Create a renderer for directions and bind it to the map.
    const directionsRenderer = new google.maps.DirectionsRenderer({ map: map });
  
    // Instantiate an info window to hold step text.
    const stepDisplay = new google.maps.InfoWindow();
  
    // Display the route between the initial start and end selections.
    this.calculateAndDisplayRoute(
      directionsRenderer,
      directionsService,
      markerArray,
      stepDisplay,
      map
    );
  
    // Listen to change events from the start and end lists.
    // const onChangeHandler = function () {
    //   this.calculateAndDisplayRoute(
    //     directionsRenderer,
    //     directionsService,
    //     markerArray,
    //     stepDisplay,
    //     map
    //   );
    // };
    // (document.getElementById("start") as HTMLElement).addEventListener(
    //   "change",
    //   onChangeHandler
    // );
    // (document.getElementById("end") as HTMLElement).addEventListener(
    //   "change",
    //   onChangeHandler
    // );
  }
  
   calculateAndDisplayRoute(
    directionsRenderer: google.maps.DirectionsRenderer,
    directionsService: google.maps.DirectionsService,
    markerArray: google.maps.Marker[],
    stepDisplay: google.maps.InfoWindow,
    map: google.maps.Map
  ) {
    // First, remove any existing markers from the map.
    for (let i = 0; i < markerArray.length; i++) {
      markerArray[i].setMap(null);
    }
  
    // Retrieve the start and end locations and create a DirectionsRequest using
    // WALKING directions.
    directionsService.route(
      {
        // origin: (document.getElementById("start") as HTMLInputElement).value,
        // destination: (document.getElementById("end") as HTMLInputElement).value,
        origin: this.start,
        destination:this.end,
        travelMode: google.maps.TravelMode.WALKING,
      },
      (
        result: google.maps.DirectionsResult,
        status: google.maps.DirectionsStatus
      ) => {
        // Route the directions and pass the response to a function to create
        // markers for each step.
        if (status === "OK") {
          (document.getElementById("warnings-panel") as HTMLElement).innerHTML =
            "<b>" + result.routes[0].warnings + "</b>";
          directionsRenderer.setDirections(result);
          this.showSteps(result, markerArray, stepDisplay, map);
        } else {
          Swal.fire('',"Directions request failed due to " + status,'error');
        }
      }
    );
  }
  
   showSteps(
    directionResult: google.maps.DirectionsResult,
    markerArray: google.maps.Marker[],
    stepDisplay: google.maps.InfoWindow,
    map: google.maps.Map
  ) {
    // For each step, place a marker, and add the text to the marker's infowindow.
    // Also attach the marker to an array so we can keep track of it and remove it
    // when calculating new routes.
    const myRoute = directionResult.routes[0].legs[0];
  
    for (let i = 0; i < myRoute.steps.length; i++) {
      const marker = (markerArray[i] =
        markerArray[i] || new google.maps.Marker());
      marker.setMap(map);
      marker.setPosition(myRoute.steps[i].start_location);
      this.attachInstructionText(
        stepDisplay,
        marker,
        myRoute.steps[i].instructions,
        map
      );
    }
  }
  
   attachInstructionText(
    stepDisplay: google.maps.InfoWindow,
    marker: google.maps.Marker,
    text: string,
    map: google.maps.Map
  ) {
    google.maps.event.addListener(marker, "click", () => {
      // Open an info window when the marker is clicked on, containing the text
      // of the step.
      stepDisplay.setContent(text);
      stepDisplay.open(map, marker);
    });
  }
  


}
