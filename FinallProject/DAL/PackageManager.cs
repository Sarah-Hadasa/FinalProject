using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
  public  class PackageManager
    {
        public static int AddPackage(COMMON.PackagesC p)
        {
            using (ProjectDasiSariEntities1 entity = new ProjectDasiSariEntities1())
            {
                entity.Packages.Add(Mapper.ConvertComPackToPack(p));
                entity.SaveChanges();
                int id = entity.Packages.ToList().Last().Id;
                return id;
            }
        }

        //public static int AddPackageRetId(COMMON.PackagesC p)
        //{
        //    int id=0;
        //    using (ProjectDasiSariEntities1 entity = new ProjectDasiSariEntities1())
        //    {
        //        entity.Packages.Add(Mapper.ConvertComPackToPack(p));
        //        entity.SaveChanges();
        //        id = entity.Packages.ToList().Last().Id;
        //    }
        //    return id;
        //}‏

        public static List<COMMON.PackagesC> GetPackages()
        {
            using (ProjectDasiSariEntities1 entity = new ProjectDasiSariEntities1())
            {
              
                return Mapper.ConvertListDalPackToPack(entity.Packages.ToList());

            }

        }
        public static COMMON.PackagesC GetPackageById(int id)
        {
            using (ProjectDasiSariEntities1 entity = new ProjectDasiSariEntities1())
            {
                foreach (var item in entity.Packages.ToList())
                {
                    if (item.Id == id)
                        return Mapper.ConvertDalPackToPack(item);
                }
                return null;
            }
        }
        //public static List<COMMON.PackagesC> GetAllPackageById(int id)
        //{
        //    using (ProjectDasiSariEntities1 entity = new ProjectDasiSariEntities1())
        //    {
        //        foreach (var item in entity.Packages.ToList())
        //        {
        //            if (item.Id == id)
        //                return Mapper.ConvertListDalPackToPack(item);
        //        }
        //        return null;
        //    }
        //}
        
        public static void UpdatePackage(COMMON.PackagesC package)
        {
            using (ProjectDasiSariEntities1 entity = new ProjectDasiSariEntities1())
            {
                var original = entity.Packages.Find(package.Id);
                if (original != null)
                {

                    entity.Entry(original).CurrentValues.SetValues(package);
                    entity.SaveChanges();
                    original = entity.Packages.Find(package.Id);

                }
               // foreach (var item in entity.Packages.ToList())
               //{
               //     if(item.Id==package.Id)
               //     {
               //         entity.Packages.Remove(item);
               //         entity.SaveChanges();
               //         //entity.Packages.
               //         // AddPackage(package);
               //         item.ArrivedTime = package.ArrivedTime;                        
               //         item.UserId = package.UserId;
               //         item.OriginCity = package.OriginCity;
               //         item.OriginStreet = package.OriginStreet;
               //         item.OriginNumBuild = package.OriginNumBuild;
               //         item.OriginArea = package.OriginArea;
               //         item.DestinationCity = package.DestinationCity;
               //         item.DestinationStreet = package.DestinationStreet;
               //         item.DestinationNumBuild = package.DestinationNumBuild;
               //         item.DestinationArea = package.DestinationArea;
               //         item.Date = package.Date;
               //         item.ExitTime = package.ExitTime;
               //         item.ArrivedTime = package.ArrivedTime;
               //         item.PackageType = package.PackageType;
               //         item.Remarks = package.Remarks;
                        
               //      }
               //} 
            }
        }

        

          public static void DeletePackage(int id)
          {
             using (ProjectDasiSariEntities1 entity = new ProjectDasiSariEntities1())
             {
                foreach (var item in entity.Packages.ToList())
                {
                    if(item.Id==id)
                    {
                      entity.Packages.Remove(item);
                      entity.SaveChanges();

                    }                                         
                }
                
            
             }
          }

    }
}
