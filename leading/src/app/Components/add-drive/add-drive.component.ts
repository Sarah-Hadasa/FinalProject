import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drive } from 'src/app/Classes/drive';
import { DriveService } from 'src/app/Services/drive.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-drive',
  templateUrl: './add-drive.component.html',
  styleUrls: ['./add-drive.component.css']
})


export class AddDriveComponent implements OnInit {
  
  drive:Drive=new Drive();
  
  typepackage:string[]=["1","2","3"];
  autocomplete: any;



 


  constructor(private service:DriveService,public active:ActivatedRoute) { 
     

  }

  ngOnInit(): void {
    this.active.params.subscribe(data=>{
      const myArray = this.active.snapshot.queryParamMap.get('myArray');
      debugger;
      if(myArray!=null)
      {this.drive = JSON.parse(myArray);
       
       //this.loadata();
      }
    
    });
  }

  ngAfterViewInit() {
    var address1Field = document.querySelector("#ship-address") as HTMLInputElement;
    this.autocomplete = new google.maps.places.Autocomplete(address1Field, {
      componentRestrictions: { country: ["ISR"] },
      fields: ["address_components", "geometry"],
      types: ["address"],
    });
    address1Field.focus();
    this.autocomplete.addListener("place_changed", () => {
      const place =  this.autocomplete.getPlace();
      if (!place.geometry || !place.geometry.location) {

        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }
    });
  }








  submit2()
  {
    this.drive.OriginCity;  
    // this.drive.UserId=sessionStorage["Id"];
    this.drive.DriveId=6;
    // this.drive.OriginCity="בני ברק"
    // this.drive.OriginStreet="נחמיה"
    // this.drive.OriginNumBuild="6"
    // this.drive.DestinationCity="ירושלים"
    // this.drive.DestinationStreet="פרי חדש"
    // this.drive.DestinationNumBuild="6"
    debugger;
    this.service.addDrive(this.drive).subscribe();
    Swal.fire('', 'שמירה בוצעה בהצלחה ', 'success');
  }
  submitupdate()
  {
    this.service.updateDrive(this.drive).subscribe();
    Swal.fire('', 'עדכון בוצע בהצלחה ', 'success');
  }



  
}