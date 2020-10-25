using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using watersaver.Models;

namespace watersaver.Controllers
{
    [AllowAnonymous]
    public class LoginController : Controller
    {

        // GET: Login
        [HttpGet]
        public ActionResult Login()
        {
            return View();
        }

        // Post: login
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Login(login login)
        {
            string message = "";

            if (string.Compare(login.Password, "ma14") == 0)
            {


                var ticket = new FormsAuthenticationTicket("CreekTech", false, 60);
                string encrypted = FormsAuthentication.Encrypt(ticket);
                var cookie = new HttpCookie(FormsAuthentication.FormsCookieName, encrypted);
                cookie.Expires = DateTime.Now.AddMinutes(60);
                cookie.HttpOnly = true;
                Response.Cookies.Add(cookie);
                if (Url.IsLocalUrl(""))
                {
                    return Redirect("");
                }
                else
                {
                    return RedirectToAction("Index", "Home");
                }

            }



            ViewBag.Message = message;
            return View();
        }
    }
}