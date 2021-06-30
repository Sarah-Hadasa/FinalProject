using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace COMMON
{
  public  class TravelsC
    {
        public int Id { get; set; }
        public int DriveId { get; set; }
        public int PackageId { get; set; }
        public System.DateTime Date { get; set; }
        public TravelsC()
        {

        }
        public TravelsC(TravelsC drive)
        {
            this.Id = drive.Id;
            this.DriveId = drive.DriveId;
            this.PackageId = drive.PackageId;
            this.Date = drive.Date;
        }
    }
}
