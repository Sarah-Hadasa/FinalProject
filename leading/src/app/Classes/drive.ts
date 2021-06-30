import { Time } from "@angular/common";

export class Drive {
    DriveId:number=0;
    UserId:number=0;
    PackageId:number=0;
    OriginCity:string="";
    OriginStreet:string="";
    OriginNumBuild:string="";
    OriginArea:string=""; 
    DestinationCity:string="";
    DestinationStreet:string=""; 
    DestinationNumBuild:string="";
    DestinationArea:string="";
    Date:Date=new Date(); 
    ExitTime:Time={hours:0,minutes:0};
    ArrivedTime:Time={hours:0, minutes:0};
    PackageType:string="";
    Remarks:string="";
    constructor()
    {

    }
//      constructor(driveid:number,
//                  userId:number,
//                   packegeId:number,
//                    originCity:string,
//                    originStreet:string ,
//                    originNumBuild:string,
//                    originArea:string,
//                    destinationCity:string,
//                    destinationStreet:string,
//                    destinationnumBuild:string,
//                    destinationArea:string,
//                     date:Date,
//                     exitTime:Time,
//                     arrivedTime:Time,
//                     packageType:string,
//                     remarks:string)
//    {
//        this.DriveId=driveid;
//        this.UserId=userId;
//        this.PackageId=packegeId;
//        this.OriginCity=originCity;
//        this.OriginStreet=originStreet;
//        this.OriginNumBuild=originNumBuild;
//        this.OriginArea=originArea;
//        this.DestinationCity=destinationCity;
//        this.DestinationStreet=destinationStreet;
//        this.DestinationNumBuild=destinationnumBuild;
//        this.DestinationArea=destinationArea;
//        this.Date=date;
//        this.ExitTime=exitTime;
//        this.ArrivedTime=arrivedTime;
//        this.PackageType=packageType;
//        this.Remarks=remarks;
//    }
}
