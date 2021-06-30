using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
   public class TravelsManager
    {
       public static void AddTravel(COMMON.TravelsC t)
        {

            using (ProjectDasiSariEntities1 entity = new ProjectDasiSariEntities1())
            {
                entity.Travels.Add(Mapper.ConvertComTravelToTravel(t));
                entity.SaveChanges();
            }
        }
        public static List<COMMON.TravelsC> GetTravels()
        {
            using (ProjectDasiSariEntities1 entity = new ProjectDasiSariEntities1())
            {
                
                return Mapper.ConvertListDalTravelToTravel(entity.Travels.ToList());

            }

        }
        
        //    public static List<COMMON.TravelsC> GetAllTravelById()
        //{

        //}
        public static COMMON.TravelsC GetTravelById(int id)
        {
            using (ProjectDasiSariEntities1 entity = new ProjectDasiSariEntities1())
            {
                foreach (var item in entity.Travels.ToList())
                {
                    if (item.Id == id)
                        return Mapper.ConvertDalTravelToTravel(item);
                }
                return null;
            }
        }

        public static void UpdateTravel(COMMON.TravelsC travel)
        {
            using (ProjectDasiSariEntities1 entity = new ProjectDasiSariEntities1())
            {
               foreach (var item in entity.Travels.ToList())
               {
                    if(item.Id==travel.Id)
                    {
                     entity.Travels.Remove(item);
                     AddTravel(travel);
                    }
               } 
            }
        }
          public static void DeleteTravel(int id)
          {
             using (ProjectDasiSariEntities1 entity = new ProjectDasiSariEntities1())
             {
                foreach (var item in entity.Travels.ToList())
                {
                    if(item.Id==id)
                    {
                      entity.Travels.Remove(item);
                      entity.SaveChanges();
                    }                                         
                } 
             }
          }
    }
}
