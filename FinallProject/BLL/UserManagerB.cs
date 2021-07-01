using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
  public  class UserManagerB
    {
        public static void addUser(COMMON.UsersC user)
        {
            DAL.UserManager.AddUser(user);
        }

        public static List<COMMON.UsersC> getUsers()
        {
            return DAL.UserManager.GetUsers();
        }

        public static COMMON.UsersC getUserById(int id)
        {
            return DAL.UserManager.GetUserById(id);
        }
       

        //=========================================
        //public static COMMON.UsersC getUsersIdPackage(int[] id)
        //{
        //    return DAL.UserManager.GetUserByIdPackage(id);
        //}
        //אני רוצה לעשות לפי id השאלה אם זה לא הרבה קריאות שרת אם אשתמש בפונקציה get id
        //public static List<COMMON.UsersC> getUsersIdPackage(int[] id)
        //{  
        //    List<COMMON.UsersC> lu = DAL.UserManager.GetUsers();

        //    List<COMMON.UsersC> lu1 = lu.AsEnumerable().Where(data =>
        //    data.Id ==        
        // ).ToList();




        //    return lu1;
        //}

        public static COMMON.UsersC getUserByPassword(string password, int id)
        {
            return DAL.UserManager.GetUserByPassword(password, id);
        }
        public static COMMON.UsersC GetUsersByUserNameAndPassword(string password, string username)
        {
            return DAL.UserManager.GetUsersByUserNameAndPassword(password, username);
        }


        
        public static void updateUser(COMMON.UsersC user)
        {
            DAL.UserManager.UpdateUser(user);
        }
        public static void deleteUser(int id)
        {
            DAL.UserManager.DeleteUser(id);
        }
    }
}
