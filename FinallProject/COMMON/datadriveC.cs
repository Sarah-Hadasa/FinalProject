using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace COMMON
{
    class datadriveC
    {
        public int Id;
        public string city;
        public datadriveC(datadriveC drive)
        {
            this.Id = drive.Id;
            this.city = drive.city;
            
        }
        public datadriveC()
        {
            

        }


    }
}
