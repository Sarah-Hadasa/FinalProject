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
    [RoutePrefix("api/users")]
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
        public COMMON.UsersC GetUsersByPassword(string password, int id)
        {
            if (UserManagerB.getUserByPassword(password, id) == null)
                return null;
            else
                return UserManagerB.getUserByPassword(password, id);
        }
        [ResponseType(typeof(COMMON.UsersC))]
        [HttpGet]
        [Route("GetUsersByUserNameAndPassword/{password}/{username}")]
        public COMMON.UsersC GetUsersByUserNameAndPassword(string password, string username)
        {
           return UserManagerB.GetUsersByUserNameAndPassword(password, username);
         
        }
        // PUT: api/Users/5
        [ResponseType(typeof(void))]
        [HttpPut]
        [Route("api/PutUsers")]
        public IHttpActionResult PutUsers(COMMON.UsersC user)
        {
            try
            {
                UserManagerB.updateUser(user);
                return Ok();
            }
            catch (Exception ex)
            {

                return NotFound();
            }
        }

        // POST: api/Users
        [ResponseType(typeof(void))]
        [HttpPost]
        [Route("api/PostUsers")]
        public IHttpActionResult PostUsers(COMMON.UsersC user)
        {
            try
            {
                UserManagerB.addUser(user);
                return Ok();
            }
            catch (Exception ex)
            {

                return NotFound();
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