using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public static class Mapper
    {
        //המרת אוביקט נסיעה  מסוג קמן לסוג  נסיעה
        //#region ConvertCommonToDal
        public static Drive ConvertComDriveToDrive(COMMON.DriveC drive)
        {
            if (drive == null)
            { return null; }
            Drive d = new Drive();
            //d.DriveId = drive.DriveId;
            //d.UserId = drive.UserId;
            d.UserId = drive.UserId; /*ConvertComUserToUser(drive.Users);*/
            //d.PackageId = drive.PackageId;
            d.OriginCity = drive.OriginCity;
            d.OriginStreet = drive.OriginStreet;
            d.OriginNumBuild = drive.OriginNumBuild;
            d.OriginArea = drive.OriginArea;
            d.DestenitationCity = drive.DestinationCity;
            d.DestenitationStreet = drive.DestinationStreet;
            d.DestenitationNumBuild = drive.DestinationNumBuild;
            d.DestenitationArea = drive.DestinationArea;
            d.Date = drive.Date;
            //d.ExitTime = drive.ExitTime;
            //d.ArrivedTime = drive.ArrivedTime;
            d.PackageType = drive.PackageType;
            d.Remarks = drive.Remarks;
            return d;
        }
         //המרת אוביקט נסיעה  מסוג דל לסוג  נסיעה
          public static COMMON.DriveC ConvertDalDriveToDrive(Drive drive)
        {
            if (drive == null)
            { return null; }
            COMMON.DriveC d = new COMMON.DriveC();                     
            d.DriveId = drive.DriveId;
            d.UserId = drive.UserId;
            d.PackageId = drive.PackageId;
            d.OriginCity = drive.OriginCity;
            d.OriginStreet = drive.OriginStreet;
            d.OriginNumBuild = drive.OriginNumBuild;
            d.OriginArea = drive.OriginArea;
            d.DestinationCity = drive.DestenitationCity;
            d.DestinationStreet = drive.DestenitationStreet;
            d.DestinationNumBuild = drive.DestenitationNumBuild;
            d.DestinationArea = drive.DestenitationArea;
            d.Date = drive.Date;
            d.ExitTime = drive.ExitTime;
            d.ArrivedTime = drive.ArrivedTime;
            d.PackageType = drive.PackageType;
            d.Remarks = drive.Remarks;
            return d;
        }
        public static List<COMMON.DriveC> ConvertListDalDriveToDrive(List<Drive> drive)
        {
            if (drive == null)
            { return null; }
            List<COMMON.DriveC> ds = new List<COMMON.DriveC>();
            foreach (Drive item in drive)
            {
                ds.Add(ConvertDalDriveToDrive(item));
            }
            return ds;
        }
        //המרת אוביקט חבילה  מסוג קמן לסוג חבילה
        public static Packages ConvertComPackToPack(COMMON.PackagesC package)
        {
            if (package == null)
            { return null; }
            Packages p = new Packages();
            p.Id = package.Id;
            p.UserId = package.UserId;
            p.OriginCity = package.OriginCity;
            p.OriginStreet = package.OriginStreet;
            p.OriginNumBuild = package.OriginNumBuild;
            p.OriginArea = package.OriginArea;
            p.DestinationCity = package.DestinationCity;
            p.DestinationStreet = package.DestinationStreet;
            p.DestinationNumBuild = package.DestinationNumBuild;
            p.DestinationArea = package.DestinationArea;
            p.Date = package.Date;
            p.ExitTime = package.ExitTime;
            p.ArrivedTime = package.ArrivedTime;
            p.PackageType = package.PackageType;
            p.Remarks = package.Remarks;
            return p;
        }
         //המרת אוביקט חבילה  מסוג דל לסוג חבילה
        public static COMMON.PackagesC ConvertDalPackToPack(Packages package)
        {
            if (package == null)
            { return null; }
            COMMON.PackagesC p = new COMMON.PackagesC();
            p.Id = package.Id;
            p.UserId = package.UserId;
            p.OriginCity = package.OriginCity;
            p.OriginStreet = package.OriginStreet;
            p.OriginNumBuild = package.OriginNumBuild;
            p.OriginArea = package.OriginArea;
            p.DestinationCity = package.DestinationCity;
            p.DestinationStreet = package.DestinationStreet;
            p.DestinationNumBuild = package.DestinationNumBuild;
            p.DestinationArea = package.DestinationArea;
            p.Date = package.Date;
            p.ExitTime = package.ExitTime;
            p.ArrivedTime = package.ArrivedTime;
            p.PackageType = package.PackageType;
            p.Remarks = package.Remarks;
            return p;
        }
        public static List<COMMON.PackagesC> ConvertListDalPackToPack(List<Packages> package)
        {
            if (package == null)
            { return null; }
            List<COMMON.PackagesC> ps = new List<COMMON.PackagesC>();
            foreach (Packages item in package)
            {
                ps.Add(ConvertDalPackToPack(item));
            }
            return ps;
        }




        //המרת אובייקט travel מסוג dal לסוג traval
        public static Travels ConvertComTravelToTravel(COMMON.TravelsC travel)
        {
            if (travel == null)
            { return null; }
            Travels t = new Travels();
            t.Id = travel.Id;
            t.DriveId = travel.DriveId;
            t.PackageId = travel.PackageId;
            t.Date = travel.Date;
            return t;
        }
        // //המרת אובייקט travel מסוג dal לסוג traval
        public static COMMON.TravelsC ConvertDalTravelToTravel(Travels travel)
        {
            if (travel == null)
            { return null; }
            COMMON.TravelsC t = new COMMON.TravelsC();
            t.Id = travel.Id;
            t.DriveId = travel.DriveId;
            t.PackageId = travel.PackageId;
            t.Date = travel.Date;
            return t;
        }

        public static List<COMMON.TravelsC> ConvertListDalTravelToTravel(List<Travels> travel)
        {
            if (travel == null)
            { return null; }
            List<COMMON.TravelsC> ts = new List<COMMON.TravelsC>();
            foreach (Travels item in travel)
            {
                ts.Add(ConvertDalTravelToTravel(item));
            }
            return ts;
        }



        // //המרת אוביקט משתמש  מסוג קמן לסוג משתמש
        public static Users ConvertComUserToUser(COMMON.UsersC user)
        {
            if (user == null)
            { return null; }
            Users u = new Users();
            //u.Id = user.Id;
            u.Name = user.Name;
            u.Tz = user.Tz;
            u.Phone = user.Phone;
            u.Mail = user.Mail;
            u.Password = user.Password;
            return u;
        }
        // //המרת אוביקט משתמש  מסוג דל לסוג חבילה
        public static COMMON.UsersC ConvertDalUserToUser(Users user)
        {
            if (user == null)
            { return null; }
            COMMON.UsersC u = new COMMON.UsersC();
            u.Id = user.Id;
            u.Name = user.Name;
            u.Tz = user.Tz;
            u.Phone = user.Phone;
            u.Mail = user.Mail;
            u.Password = user.Password;
            return u;
        }
        public static List<COMMON.UsersC> ConvertListDalUserToUser(List<Users> user)
        {
            if (user == null)
            { return null; }
            List<COMMON.UsersC> us = new List<COMMON.UsersC>();
            foreach (Users item in user)
            {
                us.Add(ConvertDalUserToUser(item));
            }
            return us;
        }
    }
}