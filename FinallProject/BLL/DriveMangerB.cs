using COMMON;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
 public  class DriveMangerB
    {

        public static void addDrive(COMMON.DriveC drive)
        {
          DAL.DriveManager.AddDrive(drive);
        }

        public static List<COMMON.DriveC> getDrive()
        {
            return DAL.DriveManager.GetDrives();
        }
        //public static List<COMMON.DriveC> getFindDrive(string Time, string destinitioncity)
        //{ 
        //    List<COMMON.DriveC> lc = DAL.DriveManager.GetDrives();

        //    //List<COMMON.DriveC> lc1=lc.Select(data => data.DestinationCity = destinitioncity) as List<COMMON.DriveC> ;

        //    return lc;
        //}

        public static List<COMMON.dataDriveResultC> getFindDrive(PackagesC p)
        {// שאילתה שמסננת לפי מוצא יעד זמן  
            List<COMMON.DriveC> lc = DAL.DriveManager.GetDrives();
            List<COMMON.UsersC> lu = DAL.UserManager.GetUsers();
            var matchDrive = from d in lc // outer sequence
                             join u in lu //inner sequence 
                             on d.UserId equals u.Id // key selector 
                             select new dataDriveResultC
                             { // result selector 
                               //city = d.DestinationCity,
                               //Id = u.Id   
                                 IdDrive = d.DriveId,
                                 IdPackage=p.Id, 
                                 Iduser=d.UserId,
                                 Name = u.Name,
                                 Phone = u.Phone,
                                 Mail = u.Mail,
                                 OriginCity = d.OriginCity,
                                 OriginStreet = d.OriginStreet,
                                 OriginNumBuild = d.OriginNumBuild,
                                 //this.OriginArea = drive.OriginArea;
                                 DestinationCity = d.DestinationCity,
                                 DestinationStreet = d.DestinationStreet,
                                 DestinationNumBuild =d.DestinationNumBuild,
                                 //this.DestinationArea = drive.DestinationArea;
                                 Date = d.Date,
                                 ExitTime = d.ExitTime,
                                 ArrivedTime = d.ArrivedTime,
                                 PackageType = d.PackageType,
                                 Remarks = d.Remarks
                             };
            matchDrive = matchDrive.AsEnumerable().Where(data =>
                data.DestinationCity.ToString() == p.DestinationCity.ToString()
             && data.OriginCity.ToString() == p.OriginCity.ToString()
             //&&Convert.ToDateTime(data.Date) <= Convert.ToDateTime(p.Date) &&
             //data.ExitTime>=p.ExitTime&&
            //Convert.ToInt32(data.PackageType) >= Convert.ToInt32(p.PackageType)
            ).ToList();//שעה//

            return matchDrive as List<COMMON.dataDriveResultC>;

            //var matchDrive = from d in lc // outer sequence
            //                 join u in lu //inner sequence 
            //                 on d.UserId equals u.Id // key selector 
            //                 select new
            //                 { // result selector 
            //                     city = d.DestinationCity,
            //                     Id = u.Id
            //                 };
            //List<COMMON.x> x;
            //   List<COMMON.DriveC> lc1 = lc.AsEnumerable().Where(data =>
            //   data.DestinationCity.ToString() == p.DestinationCity.ToString()

            //&& data.OriginCity.ToString() == p.OriginCity.ToString()
            //// &&Convert.ToDateTime(data.Date) <= Convert.ToDateTime(p.Date) &&
            ////Convert.ToInt32(data.PackageType) >= Convert.ToInt32(p.PackageType)
            //).ToList();
            //return lc1;
        }

        //public static List<COMMON.DriveC> getFindDrive(PackagesC p)
        //{//לכתוב שאילתה שמסננת לפי מוצא יעד זמן  
        //    List<COMMON.DriveC> lc = DAL.DriveManager.GetDrives();
        //    List<COMMON.UsersC> lu = DAL.UserManager.GetUsers();

        //    List<COMMON.DriveC> lc1 = lc.AsEnumerable().Where(data =>
        //    data.DestinationCity.ToString() == p.DestinationCity.ToString()

        // && data.OriginCity.ToString() == p.OriginCity.ToString()
        // // &&Convert.ToDateTime(data.Date) <= Convert.ToDateTime(p.Date) &&
        // //Convert.ToInt32(data.PackageType) >= Convert.ToInt32(p.PackageType)
        // ).ToList();
        //    return lc1;
        //}
        public static List<COMMON.dataDriveResultC> getDriveByIdPackage(int id)
        {

          
            List<COMMON.DriveC> lc = DAL.DriveManager.GetDrives();
            List<COMMON.UsersC> lu = DAL.UserManager.GetUsers();
            var matchDrive = from d in lc // outer sequence
                             join u in lu //inner sequence 
                             on d.UserId equals u.Id
                             where d.PackageId == id// key selector 
                             select new dataDriveResultC
                             { // result selector 
                               //city = d.DestinationCity,
                               //Id = u.Id   
                                 IdDrive = d.DriveId,
                                 IdPackage = id,
                                 Iduser = d.UserId,
                                 Name = u.Name,
                                 Phone = u.Phone,
                                 Mail = u.Mail,
                                 OriginCity = d.OriginCity,
                                 OriginStreet = d.OriginStreet,
                                 OriginNumBuild = d.OriginNumBuild,
                                 //this.OriginArea = drive.OriginArea;
                                 DestinationCity = d.DestinationCity,
                                 DestinationStreet = d.DestinationStreet,
                                 DestinationNumBuild = d.DestinationNumBuild,
                                 //this.DestinationArea = drive.DestinationArea;
                                 Date = d.Date,
                                 ExitTime = d.ExitTime,
                                 ArrivedTime = d.ArrivedTime,
                                 PackageType = d.PackageType,
                                 Remarks = d.Remarks
                             };
            matchDrive = matchDrive.AsEnumerable().Where(data =>
                data.IdPackage == id
            ).ToList();

            return matchDrive as List<COMMON.dataDriveResultC>;
            
            //).ToList();//שעה//
            //List<COMMON.DriveC> lc1 = lc.AsEnumerable().Where(data =>
            //data.DriveId == p.DestinationCity.ToString()
            //var lc1 = from c in lc // outer sequence
            //          join t in lt //inner sequence 
            //          on c.DriveId equals t.DriveId
            //          where t.PackageId == id
            //          select new
            //          {
            //              c.DriveId,
            //              c.UserId,
            //              c.OriginCity,
            //              c.OriginStreet,
            //              c.OriginNumBuild,
            //              c.DestinationCity,
            //              c.DestinationStreet,
            //              c.DestinationNumBuild
            //          };// key selector 

            //return lc1 as List<COMMON.DriveC>;
        }
        
        public static COMMON.DriveC getDriveByIdP(int id)
        {
            return DAL.DriveManager.GetDrivesByIdP(id);
        }

        public static COMMON.DriveC getDriveById(int id)
        {
            return DAL.DriveManager.GetDrivesById(id);
        }

        public static void updateDrive(COMMON.DriveC drive)
        {
            DAL.DriveManager.UpdateDrive(drive);
        }
        public static void deleteDrive(int id)
        {
           DAL.DriveManager.DeleteDrive(id);
        }

    }
}
