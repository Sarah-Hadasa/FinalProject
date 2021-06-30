using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace COMMON
{
   public class dataDriveResultC
    {
        //    public int Id;
        //    public string city;
        //    public dataDriveResult(dataDriveResult x)
        //    {
        //        this.Id = x.Id;
        //        this.city = x.city;

        //    }
        //    public dataDriveResult()
        //    {


        //    }
        //}
        public int IdDrive { get; set; }
        public int IdPackage { get; set; }
        public int Iduser { get; set; }
        public string Name { get; set; }
        //public string Tz { get; set; }
        public string Phone { get; set; }
        public string Mail { get; set; }
       

        public string OriginCity { get; set; }
        public string OriginStreet { get; set; }
        public string OriginNumBuild { get; set; }
        public int OriginDistance { get; set; }
        public int OriginDuration { get; set; }
         
        //public string OriginArea { get; set; }
        public string DestinationCity { get; set; }
        public string DestinationStreet { get; set; }
        public string DestinationNumBuild { get; set; }
        public int DestinationDistance { get; set; }
        public int DestinationDuration { get; set; }
         
        //public string DestinationArea { get; set; }
        public System.DateTime Date { get; set; }
        public Nullable<System.TimeSpan> ExitTime { get; set; }
        public Nullable<System.TimeSpan> ArrivedTime { get; set; }
        public string PackageType { get; set; }
        public string Remarks { get; set; }
        public virtual UsersC Users { get; set; }
        public dataDriveResultC()
        {

        }
        public dataDriveResultC(dataDriveResultC drive)
        {
            //this.Id = drive.Id;
            this.Name = drive.Name;         
            this.Phone = drive.Phone;
            this.Mail = drive.Mail;
            
            this.OriginCity = drive.OriginCity;
            this.OriginStreet = drive.OriginStreet;
            this.OriginNumBuild = drive.OriginNumBuild;
            //this.OriginArea = drive.OriginArea;
            this.DestinationCity = drive.DestinationCity;
            this.DestinationStreet = drive.DestinationStreet;
            this.DestinationNumBuild = DestinationNumBuild;
            //this.DestinationArea = drive.DestinationArea;
            this.Date = drive.Date;
            //this.ExitTime = drive.ExitTime;
            //this.ArrivedTime = drive.ArrivedTime;
            this.PackageType = drive.PackageType;
            this.Remarks = drive.Remarks;
        }
    }
}
