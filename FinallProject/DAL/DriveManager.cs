using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
  public  class DriveManager
    {
        public static void AddDrive(COMMON.DriveC dr)
        {

            using (ProjectDasiSariEntities1 entity = new ProjectDasiSariEntities1())
            {
                
                entity.Drive.Add(Mapper.ConvertComDriveToDrive(dr));
                entity.SaveChanges();

            }
        }
        public static List<COMMON.DriveC> GetDrives()
        {
            using (ProjectDasiSariEntities1 entity = new ProjectDasiSariEntities1())
            {
                return Mapper.ConvertListDalDriveToDrive(entity.Drive.ToList());

            }

        }
        public static COMMON.DriveC GetDrivesById(int id)
        {
            using (ProjectDasiSariEntities1 entity = new ProjectDasiSariEntities1())
            {
                foreach (var item in entity.Drive.ToList())
                {
                    if (item.DriveId == id)
                        return Mapper.ConvertDalDriveToDrive(item);
                }
                return null;
            }
        }
        public static COMMON.DriveC GetDrivesByIdP(int id)
        {
            using (ProjectDasiSariEntities1 entity = new ProjectDasiSariEntities1())
            {
                foreach (var item in entity.Drive.ToList())
                {
                    if (item.PackageId == id)
                        return Mapper.ConvertDalDriveToDrive(item);
                }
                return null;
            }
        }

        //public static List<COMMON.DriveC> GetDrivesByIdU(int id)
        //{
        //    using (ProjectDasiSariEntities1 entity = new ProjectDasiSariEntities1())
        //    {
        //        foreach (var item in entity.Drive.ToList())
        //        {
        //            if (item.PackageId == id)
        //                return Mapper.ConvertDalDriveToDrive(item);
        //        }
        //        return null;
        //    }
        //}
        
        public static void UpdateDrive(COMMON.DriveC drive)
        {
            using (ProjectDasiSariEntities1 entity = new ProjectDasiSariEntities1())
            {
                var original = entity.Drive.Find(drive.DriveId);
                if (original != null)
                {

                    entity.Entry(original).CurrentValues.SetValues(drive);
                    entity.SaveChanges();
                    original = entity.Drive.Find(drive.DriveId);

                }
               // foreach (var item in entity.Drive.ToList())
               //{
               //     if(item.DriveId==drive.DriveId)
               //     {
               //      entity.Drive.Remove(item);
               //      AddDrive(drive);
               //     }
               //} 
            }
        }
          public static void DeleteDrive(int id)
          {
             using (ProjectDasiSariEntities1 entity = new ProjectDasiSariEntities1())
             {
                foreach (var item in entity.Drive.ToList())
                {
                    if(item.DriveId==id)
                    {
                      entity.Drive.Remove(item);
                      entity.SaveChanges();
                    }                                         
                }
                
            
             }
          }

    }

}




