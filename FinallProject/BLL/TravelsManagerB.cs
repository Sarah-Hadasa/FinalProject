using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class TravelsManagerB
    {
        

        public static void addTravel(COMMON.TravelsC travel)
        {
            DAL.TravelsManager.AddTravel(travel);
        }

        public static List<COMMON.TravelsC> getTravels()
        {
            return DAL.TravelsManager.GetTravels();
        }

        public static COMMON.TravelsC getTravelById(int id)
        {
            return DAL.TravelsManager.GetTravelById(id);
        }

        public static List<COMMON.TravelsC> getTravelsId(int id)
        {
            List<COMMON.TravelsC> lt = DAL.TravelsManager.GetTravels();
            //List<COMMON.DriveC> lt1 = lt.AsEnumerable().Where(data =>
            //data.DriveId == id).ToList();

            return lt;
        }
        

        public static void updateTravel(COMMON.TravelsC travel)
        {
            DAL.TravelsManager.UpdateTravel(travel);
        }
        public static void deleteTravel(int id)
        {
            DAL.TravelsManager.DeleteTravel(id);
        }
    }
}
