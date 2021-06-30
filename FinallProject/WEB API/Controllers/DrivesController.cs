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
using COMMON;

namespace WEB_API.Controllers
{
    public class DrivesController : ApiController
    {
 
        private ProjectDasiSariEntities1 db = new ProjectDasiSariEntities1();

        // GET: api/Drives
        [HttpGet]
        [Route("api/GetDrives")]
        public List<COMMON.DriveC> GetDrive()
        {

            return DriveMangerB.getDrive();
        }

        //[HttpGet]
        //[Route("api/getFindDrive")]
        //public List<COMMON.DriveC> getFindDrive(string time, string city)
        //{

        //    return DriveMangerB.getFindDrive(time, city);
        //}

        [HttpGet]
        [HttpPost]
        [Route("api/getFindDrive")]
        public List<COMMON.dataDriveResultC> getFindDrive(PackagesC p)
        {

            return DriveMangerB.getFindDrive(p);
        }
        //[HttpPost]
        //[Route("api/getFindDrive")]
        //public List<COMMON.DriveC> getFindDrive(PackagesC p)
        //{

        //    return DriveMangerB.getFindDrive(p);
        //}
        

        // GET: api/Drives/5
        [ResponseType(typeof(COMMON.DriveC))]
        [HttpGet]
        [Route("api/GetDrivesById")]
        public COMMON.DriveC GetDrive(int id)
        {
            if (DriveMangerB.getDriveById(id) == null)
                return null;
            else
                return DriveMangerB.getDriveById(id);
        }
        // GET: api/Drives/5
        //[ResponseType(typeof(COMMON.dataDriveResultC))]
        [HttpGet]
        [Route("api/GetDrivesByIdPackage")]
        public List<COMMON.dataDriveResultC> GetDriveId(int id)
        {
            
                return DriveMangerB.getDriveByIdPackage(id);
        }


        // PUT: api/Drives/5
        [ResponseType(typeof(void))]
        [HttpPut]
        [Route("api/PutDrives")]
        public IHttpActionResult PutDrive( COMMON.DriveC drive)
        {
            try
            {
                DriveMangerB.updateDrive(drive);
                return Ok();
              
            }
            catch (Exception)
            {

                return NotFound();
            }
        }
       

        // POST: api/Drives-הוספה 
        [ResponseType(typeof(void))]
        [HttpPost]
        [Route("api/PostDrives")]
        public IHttpActionResult PostDrive(COMMON.DriveC drive)
        {
            try
            {
               
                DriveMangerB.addDrive(drive);
                return Ok();
            }
            catch(Exception e)
            {
                Console.WriteLine(e.InnerException.Message);
                return NotFound();
            }            
    }




        // DELETE: api/Drives/5
        [ResponseType(typeof(void))]
        [HttpDelete]
        [Route("api/DeleteDrives")]
        public IHttpActionResult DeleteDrive(int id)
        {
            try
            {
                DriveMangerB.deleteDrive(id);
                return Ok();
            }
            catch
            {
                return NotFound();
            }
        }
        //Drive drive = db.Drive.Find(id);
        //if (drive == null)
        //{
        //    return NotFound();
        //}

        //db.Drive.Remove(drive);
        //db.SaveChanges();

        //return Ok(drive);
    }   
    //protected override void Dispose(bool disposing)
    //    {
    //        if (disposing)
    //        {
    //            db.Dispose();
    //        }
    //        base.Dispose(disposing);
    //    }

    //    private bool DriveExists(int id)
    //    {
    //        return db.Drive.Count(e => e.UserId == id) > 0;
    //    }
    //}
}
