using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace watersaver.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Game()
        {

            ViewBag.Message = "Game page.";

            return View();


        }


        public ActionResult Quiz()
        {

            ViewBag.Message = "Quiz page.";

            return View();


        }

        public ActionResult WaterJourney()
        {

            ViewBag.Message = "Water Journey page.";

            return View();


        }


        public ActionResult Calculator()
        {

            ViewBag.Message = "Calculator page.";

            return View();


        }


        public ActionResult MoreInfo()
        {

            ViewBag.Message = "More information page.";

            return View();


        }


        public ActionResult Video()
        {

            ViewBag.Message = "video page.";

            return View();


        }
    }
}