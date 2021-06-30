using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace COMMON
{
  public  class DriveC
    {
        public int DriveId { get; set; }
        public int UserId { get; set; }
       
        public int? PackageId { get; set; }
        public string OriginCity { get; set; }
        public string OriginStreet { get; set; }
        public string OriginNumBuild { get; set; }
        public string OriginArea { get; set; }
        public string DestinationCity { get; set; }
        public string DestinationStreet { get; set; }
        public string DestinationNumBuild { get; set; }
        public string DestinationArea { get; set; }
        public System.DateTime Date { get; set; }
        public Nullable<System.TimeSpan> ExitTime { get; set; }
        public Nullable<System.TimeSpan> ArrivedTime { get; set; }
        public string PackageType { get; set; }
        public string Remarks { get; set; }
        public virtual UsersC Users { get; set; }
        public DriveC()
        {

        }
        public DriveC(DriveC drive)
        {
            this.DriveId = drive.DriveId;
            this.UserId = drive.UserId;
            this.PackageId = drive.PackageId;
            this.OriginCity = drive.OriginCity;
            this.OriginStreet = drive.OriginStreet;
            this.OriginNumBuild = drive.OriginNumBuild;
            this.OriginArea = drive.OriginArea;
            this.DestinationCity = drive.DestinationCity;
            this.DestinationStreet = drive.DestinationStreet;
            this.DestinationNumBuild = DestinationNumBuild;
            this.DestinationArea = drive.DestinationArea;
            this.Date = drive.Date;
            this.ExitTime = drive.ExitTime;
            this.ArrivedTime = drive.ArrivedTime;
            this.PackageType = drive.PackageType;
            this.Remarks = drive.Remarks;
        }
    }
}

