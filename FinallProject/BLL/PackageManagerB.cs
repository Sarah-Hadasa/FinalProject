using COMMON;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
  public  class PackageManagerB
    {


        public static int addPackage(COMMON.PackagesC package)
        {
            return DAL.PackageManager.AddPackage(package);
        }
        //public static int addPackageRetId(COMMON.PackagesC package)
        //{

        //    int x = DAL.PackageManager.AddPackageRetId(package);
        //    return x;
        //}‏

        public static List<COMMON.PackagesC> getPackages()
        {
            return DAL.PackageManager.GetPackages();
        }
        
        public static COMMON.PackagesC getPackageById(int id)
        {
            return DAL.PackageManager.GetPackageById(id);
        }
        public static List<COMMON.dataDriveResultC> getPackageByIdDrive(int id)
        {
            List<COMMON.PackagesC> lp = DAL.PackageManager.GetPackages();
            List<COMMON.UsersC> lu = DAL.UserManager.GetUsers();
            var matchDrive = from p in lp // outer sequence
                             join u in lu //inner sequence 
                             on p.UserId equals u.Id
                             where p.Id == id// key selector 
                             select new dataDriveResultC
                             { // result selector 
                               //city = d.DestinationCity,
                                // Id = u.Id,   
                                // IdDrive = d.DriveId,
                                 IdPackage = id,
                               //  Iduser = p.UserId,
                                 UserId = p.UserId,
                                 Name = u.Name,
                                 Phone = u.Phone,
                                 Mail = u.Mail,
                                 OriginCity = p.OriginCity,
                                 OriginStreet = p.OriginStreet,
                                 OriginNumBuild = p.OriginNumBuild,
                                 //this.OriginArea = drive.OriginArea;
                                 DestinationCity = p.DestinationCity,
                                 DestinationStreet = p.DestinationStreet,
                                 DestinationNumBuild = p.DestinationNumBuild,
                                 //this.DestinationArea = drive.DestinationArea;
                                 Date = p.Date,
                                 ExitTime = p.ExitTime,
                                 ArrivedTime = p.ArrivedTime,
                                 PackageType = p.PackageType,
                                 Remarks = p.Remarks
                             };
            matchDrive = matchDrive.AsEnumerable().Where(data =>
                data.IdPackage == id
            ).ToList();

            return matchDrive as List<COMMON.dataDriveResultC>;
            //return DAL.PackageManager.GetPackageById(id);
        }
        
        public static List<COMMON.PackagesC> getAllPackageById(int id)
        {
            // return DAL.PackageManager.GetAllPackageById(id);

            List<COMMON.PackagesC> lp = DAL.PackageManager.GetPackages();
            List<COMMON.PackagesC> lp1 = lp.AsEnumerable().Where(data =>
             data.UserId == id).ToList();
            return lp1;
        }

        public static void updatePackage(COMMON.PackagesC package)
        {
            DAL.PackageManager.UpdatePackage(package);
        }
        public static void deletePackage(int id)
        {
            DAL.PackageManager.DeletePackage(id);
        }
    }
}
