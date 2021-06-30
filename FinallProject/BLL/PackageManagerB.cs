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
