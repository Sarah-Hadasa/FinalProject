using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace COMMON
{
  public  class UsersC
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Tz { get; set; }
        public string Phone { get; set; }
        public string Mail { get; set; }
        public string Password { get; set; }

        public UsersC()
        {

        }
        public UsersC(UsersC user)
        {
            this.Id = user.Id;
            this.Name = user.Name;
            this.Tz = user.Tz;
            this.Phone = user.Phone;
            this.Mail = user.Mail;
            this.Password = user.Password;
        }

    }
}

