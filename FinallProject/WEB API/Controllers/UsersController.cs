
  
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using DAL;
using BLL;


namespace WEB_API.Controllers
{
    public class UsersController : ApiController
    {
        private ProjectDasiSariEntities1 db = new ProjectDasiSariEntities1();

        // GET: api/Users
        [HttpGet]
        [Route("api/GetUsers")]
        public List<COMMON.UsersC> GetUsers()
        {
            return UserManagerB.getUsers();
        }

        // GET: api/Users/5
        [ResponseType(typeof(COMMON.UsersC))]
        [HttpGet]
        [Route("api/GetUsersById")]
        public COMMON.UsersC GetUsers(int id)
        {
            if (UserManagerB.getUserById(id) == null)
                return null;
            else
                return UserManagerB.getUserById(id);
        }
        ///get user by arry
        //[ResponseType(typeof(COMMON.UsersC))]
        //[HttpGet]
        //[Route("api/GetUsersPackageById")]
        //public COMMON.UsersC GetUsersIdPackage(int[] id)
        //{
        //    if (UserManagerB.getUsersIdPackage(id) == null)
        //        return null;
        //    else
        //        return UserManagerB.getUsersIdPackage(id);
        //}

        [ResponseType(typeof(COMMON.UsersC))]
        [HttpGet]
        [Route("api/GetUsersByPassword")]
        public COMMON.UsersC GetUsersByPassword(string name, string password)
        {
            if (UserManagerB.getUserByPassword(name, password) == null)
                return null;
            else
                return UserManagerB.getUserByPassword(name, password);
        }


        [HttpGet]
        [Route("api/GetDrivesByIdUser")]
        public List<COMMON.DriveC> GetDriveU(int id)
        {
            if (DriveMangerB.getDriveByIdU(id) == null)
                return null;
            else
                return DriveMangerB.getDriveByIdU(id);
        }




        // PUT: api/Users/5
        [ResponseType(typeof(void))]
        [HttpPut]
        [Route("api/PutUsers")]
        public bool PutUsers(COMMON.UsersC user)
        {
            try
            {
                UserManagerB.updateUser(user);
                return true;
            }
            catch (Exception ex)
            {

                return false;
            }
        }

        // POST: api/Users
        [ResponseType(typeof(void))]
        [HttpPost]
        [Route("api/PostUsers")]
        public bool PostUsers(COMMON.UsersC user)
        {
            try
            {
                UserManagerB.addUser(user);
                return true;
            }
            catch (Exception ex)
            {

                return false;
            }
        }

        // DELETE: api/Users/5
        [ResponseType(typeof(void))]
        [HttpDelete]
        [Route("api/DeleteUsers")]
        public IHttpActionResult DeleteUsers(int id)
        {
            try
            {
                UserManagerB.deleteUser(id);
                return Ok();
            }
            catch (Exception)
            {
                return NotFound();
            }
        }

    }
}
