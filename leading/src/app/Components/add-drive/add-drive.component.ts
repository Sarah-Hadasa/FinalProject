import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drive } from 'src/app/Classes/drive';
import { DriveService } from 'src/app/Services/drive.service';

@Component({
  selector: 'app-add-drive',
  templateUrl: './add-drive.component.html',
  styleUrls: ['./add-drive.component.css']
})


export class AddDriveComponent implements OnInit {
  drive:Drive=new Drive();
  
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

  submit2()
  {
    this.drive.OriginCity;  
    this.drive.UserId=6;
    // this.drive.DriveId=6;
    // this.drive.OriginCity="בני ברק"
    // this.drive.OriginStreet="נחמיה"
    // this.drive.OriginNumBuild="6"
    // this.drive.DestinationCity="ירושלים"
    // this.drive.DestinationStreet="פרי חדש"
    // this.drive.DestinationNumBuild="6"
    debugger;
    this.service.addDrive(this.drive).subscribe();
  }
  submitupdate()
  {
    this.service.updateDrive(this.drive).subscribe();
  }



  
}