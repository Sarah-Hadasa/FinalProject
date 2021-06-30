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
    public class PackagesController : ApiController
    {
        private ProjectDasiSariEntities1 db = new ProjectDasiSariEntities1();

        //    // GET: api/Packages
        [HttpGet]

        [Route("api/GetPackages")]
        public List<COMMON.PackagesC> GetPackages()
        {
            return PackageManagerB.getPackages();
        }

        //GET: api/Packages/5
        [ResponseType(typeof(COMMON.PackagesC))]
        [HttpGet]
        [Route("api/GetPackagesById")]
        public COMMON.PackagesC GetPackages(int id)
        {          
            if (PackageManagerB.getPackageById(id)==null)           
                return null;            
            else
               return PackageManagerB.getPackageById(id);
        }

        //GET: api/Packages/5
        [ResponseType(typeof(COMMON.PackagesC))]
        [HttpGet]
        [Route("api/GetAllPackagesById")]
        public List<COMMON.PackagesC> GetPackagesId(int id)
        {
            if (PackageManagerB.getAllPackageById(id) == null)
                return null;
            else
                return PackageManagerB.getAllPackageById(id);
        }

        // PUT: api/Packages/5
        [ResponseType(typeof(void))]
        [HttpPut]
        [Route ("api/PutPackages")]
        public IHttpActionResult PutPackages(COMMON.PackagesC packages)
        {
            try
            {
                PackageManagerB.updatePackage(packages);
                return Ok();
            }
            catch (Exception)
            {

                return NotFound();
            }
        }

        //POST: api/Packages
       [ResponseType(typeof(int))]
       [HttpPost]
       [Route("api/PostPackages")]
        public int PostPackages(COMMON.PackagesC packages)
        {

            try
            {
                int id=PackageManagerB.addPackage(packages);
                return id;
                //return Ok();
            }
            catch (Exception ex)
            {
                throw;
                //return NotFound();
            }
        }

        //[HttpPost]
        //[Route("api/InsertProject")]
        //public int PostPackagesRetId(COMMON.PackagesC packages)
        //{
        //    try
        //    {
        //        return PackageManagerB.addPackageRetId(packages);
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //}‏



        // DELETE: api/Packages/5
        [ResponseType(typeof(void))]
        [HttpDelete]
        [Route("api/DeletePackages")]
        public IHttpActionResult DeletePackages(int id)
        {
            try
            {
                PackageManagerB.deletePackage(id);
                return Ok();
            }
            catch (Exception)
            {
                return NotFound();
            }
            
        }

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        db.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}

        //private bool PackagesExists(int id)
        //{
        //    return db.Packages.Count(e => e.Id == id) > 0;
        //}
    }
}
