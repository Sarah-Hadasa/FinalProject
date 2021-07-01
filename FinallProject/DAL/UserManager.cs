
  
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class UserManager
    {
        public static void AddUser(COMMON.UsersC user)
        {

            using (ProjectDasiSariEntities1 entity = new ProjectDasiSariEntities1())
            {
                entity.Users.Add(Mapper.ConvertComUserToUser(user));
                entity.SaveChanges();
            }
        }
        public static List<COMMON.UsersC> GetUsers()
        {
            using (ProjectDasiSariEntities1 entity = new ProjectDasiSariEntities1())
            {

                return Mapper.ConvertListDalUserToUser(entity.Users.ToList());

            }

        }
        public static COMMON.UsersC GetUserById(int id)
        {
            using (ProjectDasiSariEntities1 entity = new ProjectDasiSariEntities1())
            {
                foreach (var item in entity.Users.ToList())
                {
                    if (item.Id == id)
                        return Mapper.ConvertDalUserToUser(item);
                }
                return null;
            }
        }
        //=================================
        //public static COMMON.UsersC GetUserByIdPackage(int[] id)
        //{
        //    using (ProjectDasiSariEntities1 entity = new ProjectDasiSariEntities1())
        //    {
        //        //foreach (var item in entity.Users.ToList())
        //        //{
        //        //    if (item.Id == id)
        //        //        return Mapper.ConvertDalUserToUser(item);
        //        //}
        //        List<COMMON.DriveC> lc = DAL.DriveManager.GetDrives();

        //        List<COMMON.DriveC> lc1 = lc.AsEnumerable().Where(data =>
        //        data.DestinationCity.ToString() == p.DestinationCity.ToString()

        //     && data.OriginCity.ToString() == p.OriginCity.ToString()
        //     // &&Convert.ToDateTime(data.Date) <= Convert.ToDateTime(p.Date) &&
        //     //Convert.ToInt32(data.PackageType) >= Convert.ToInt32(p.PackageType)
        //     ).ToList();




        //        return lc1;
        //        return null;
        //    }
        //}

        public static COMMON.UsersC GetUserByPassword(string name, string password)
        {
            using (ProjectDasiSariEntities1 entity = new ProjectDasiSariEntities1())
            {
                /*Users u = entity.Users.First(da => da.Password == password&& da.Id==id );
                if( u!=null)
                    return Mapper.ConvertDalUserToUser(u);
                return null;*/
                foreach (var item in entity.Users.ToList())
                {
                    if (item.Mail == name && item.Password == password)
                        return Mapper.ConvertDalUserToUser(item);
                }
                return null;
            }
        }




        public static void UpdateUser(COMMON.UsersC user)
        {
            using (ProjectDasiSariEntities1 entity = new ProjectDasiSariEntities1())
            {

                Users u = entity.Users.First(da => da.Id == user.Id);
                u = Mapper.ConvertComUserToUser(user);
                entity.SaveChanges();

            }
        }
        public static void DeleteUser(int id)
        {
            using (ProjectDasiSariEntities1 entity = new ProjectDasiSariEntities1())
            {
                foreach (var item in entity.Users.ToList())
                {
                    if (item.Id == id)
                    {
                        entity.Users.Remove(item);
                        entity.SaveChanges();
                    }
                }


            }
        }
    }
}
