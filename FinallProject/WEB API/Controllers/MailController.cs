using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Net.Mail;
using WEB_API.Models;

namespace WEB_API.Controllers
{
    public class MailController : ApiController
    {
        [HttpPost]
        [ActionName("SendEmail")]
        public string sendMail(Message m)
        {
            try
            {
                var senderEmail = new MailAddress("leading.service.messages@gmail.com");
                var recieverEmail = new MailAddress(m.reciever);
                var password = "";
                var sub = "hkjk";
                var body = "lkl";
                var smtp = new SmtpClient
                {
                    Host = "smtp.gmail.com",
                    Port = 587,
                    EnableSsl = true,

                    DeliveryMethod = SmtpDeliveryMethod.Network,
                    UseDefaultCredentials = true,
                    Credentials = new NetworkCredential(senderEmail.Address, password)
                };
                using (var mess = new MailMessage(senderEmail, recieverEmail)
                {
                    IsBodyHtml = true,
                    Subject = sub,
                    Body = "<div style = 'font-family:font-family:Segoe UI Light, Helvetica, sans-serif'> Dear   : " + "משרשרת שם כל שהוא " + "  To View your request click <br /><a href='localhost:4200'>here</a>  <br /><br /><br />Thank you <br />F28 IS Team </div>"
                })
                {
                    smtp.Send(mess);
                }
                return "ok";
            }
            catch (Exception ex)
            {

            }
            return "ERROR";
        }
    }
}
