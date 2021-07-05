import { Time } from "@angular/common";

export class DataDriveResults {
  DriveId:number=0;
  

  
  UserId:number=0;

 //IdDrive:number=0;
 IdPackage:number=0;
//  Iduser:number=0;
 Name:string="";
 Tz:string=""; 
 Phone:string="";
 Mail:string="";
   
 
  OriginCity:string="";
  OriginStreet:string="";
  OriginNumBuild:string="";
  OriginDistance :string="";
  OriginDuration :number=0;
  // OriginArea:string=""; 
  DestinationCity:string="";
  DestinationStreet:string=""; 
  DestinationNumBuild:string="";
  DestinationDistance :string="";
   DestinationDuration :number=0;
  // DestinationArea:string="";
  Date:Date=new Date(); 
  ExitTime:Time={hours:0,minutes:0};
  ArrivedTime:Time={hours:0, minutes:0};
  PackageType:string="";
  Remarks:string="";
  
  constructor()
  {

  }

public DataDriveResults()
{

}
// public dataDriveResult(dataDriveResult drive)
// {
//     //this.Id = drive.Id;
//     this.Name = drive.Name;         
//     this.Phone = drive.Phone;
//     this.Mail = drive.Mail;
  
//     this.OriginCity = drive.OriginCity;
//     this.OriginStreet = drive.OriginStreet;
//     this.OriginNumBuild = drive.OriginNumBuild;
//     //this.OriginArea = drive.OriginArea;
//     this.DestinationCity = drive.DestinationCity;
//     this.DestinationStreet = drive.DestinationStreet;
//     this.DestinationNumBuild =drive.DestinationNumBuild;
//     //this.DestinationArea = drive.DestinationArea;
//     this.Date = drive.Date;
//     //this.ExitTime = drive.ExitTime;
//     //this.ArrivedTime = drive.ArrivedTime;
//     this.PackageType = drive.PackageType;
//     this.Remarks = drive.Remarks;
// }
}
// }
