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
    public class TravelsController : ApiController
    {
        private ProjectDasiSariEntities1 db = new ProjectDasiSariEntities1();

        // GET: api/Travels
        [HttpGet]
        [Route("api/GetTravels")]
        public List<COMMON.TravelsC> GetTravels()
        {
            return TravelsManagerB.getTravels();
                
        }

        //// GET: api/Travels
        //[HttpGet]
        //[Route("api/GetAllTravelsId")]
        //public List<COMMON.TravelsC> GetTravelsId(int id)
        //{
        //    return TravelsManagerB.getTravelsId();

        //}

        // GET: api/Travels/5
        [ResponseType(typeof(COMMON.TravelsC))]
        [HttpGet]
        [Route("api/GetTravelsById")]
        public COMMON.TravelsC GetTravels(int id)
        {
            if (TravelsManagerB.getTravelById(id) == null)
                return null;
            else
                return TravelsManagerB.getTravelById(id);
        }

        // PUT: api/Travels/5
        [ResponseType(typeof(void))]
        [HttpPut]
        [Route("api/PutTravels")]
        public IHttpActionResult PutTravels(COMMON.TravelsC travel)
        {
            try
            {
                TravelsManagerB.updateTravel(travel);
                return Ok();
            }
            catch (Exception)
            {

                return NotFound();
            }
        }

        // POST: api/Travels
        [ResponseType(typeof(void))]
        [HttpPost]
        [Route("api/PostTravels")]
        public IHttpActionResult PostTravels(COMMON.TravelsC travel)
        {
            try
            {
                TravelsManagerB.addTravel(travel);
                return Ok();
            }
            catch 
            {

                return NotFound();
            }
        }

        // DELETE: api/Travels/5
        [ResponseType(typeof(void))]
        [HttpDelete]
        [Route ("api/DeleteTravels")]
        public IHttpActionResult DeleteTravels(int id)
        {
            try
            {
                TravelsManagerB.deleteTravel(id);
                return Ok();
            }
            catch (Exception)
            {

                return NotFound();
            }
        }
    }
}