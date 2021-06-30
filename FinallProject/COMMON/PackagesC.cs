using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

 namespace COMMON
{
    public class PackagesC
    {
        public int Id { get; set; }
        public int UserId { get; set; }
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
        public PackagesC()
        {

        }
        public PackagesC(PackagesC package)
        {
            this.Id = package.Id;
            this.UserId = package.UserId;
            this.OriginCity = package.OriginCity;
            this.OriginStreet = package.OriginStreet;
            this.OriginNumBuild = package.OriginNumBuild;
            this.OriginArea = package.OriginArea;
            this.DestinationCity = package.DestinationCity;
            this.DestinationStreet = package.DestinationStreet;
            this.DestinationNumBuild = package.DestinationNumBuild;
            this.DestinationArea = package.DestinationArea;
            this.Date = package.Date;
            this.ExitTime = package.ExitTime;
            this.ArrivedTime = package.ArrivedTime;
            this.PackageType = package.PackageType;
            this.Remarks = package.Remarks;
        }
    }
}

