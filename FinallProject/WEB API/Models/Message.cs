using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WEB_API.Models
{
    public class Message
    {
        public string from { get; set; }
        public string reciever { get; set; }
        public string subject { get; set; }
        public string mes { get; set; }
    }
}