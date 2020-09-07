using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using watersaver.Models;

namespace watersaver.Controllers
{
    public class TipsController : Controller
    {
        private DatabaseEntities db = new DatabaseEntities();

        // GET: Tips
        public ActionResult Index()
        {
            return View(db.Tips.ToList());
        }

        // GET: Tips/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Tip tip = db.Tips.Find(id);
            if (tip == null)
            {
                return HttpNotFound();
            }
            return View(tip);
        }

        // GET: Tips/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Tips/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Name,Description,Addition")] Tip tip, HttpPostedFileBase
postedFile)
        {
            ModelState.Clear();
            var myUniqueFileName = string.Format(@"{0}", Guid.NewGuid());
            tip.Path = myUniqueFileName;
            TryValidateModel(tip);

            if (ModelState.IsValid)
            {
                string serverPath = Server.MapPath("~/Uploads/");
                string fileExtension = System.IO.Path.GetExtension(postedFile.FileName);
                string filePath = tip.Path + fileExtension;
                tip.Path = filePath;
                postedFile.SaveAs(serverPath + tip.Path);
                db.Tips.Add(tip);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(tip);
        }

        // GET: Tips/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Tip tip = db.Tips.Find(id);
            if (tip == null)
            {
                return HttpNotFound();
            }
            return View(tip);
        }

        // POST: Tips/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Path,Name,Description,Addition")] Tip tip)
        {
            if (ModelState.IsValid)
            {
                db.Entry(tip).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(tip);
        }

        // GET: Tips/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Tip tip = db.Tips.Find(id);
            if (tip == null)
            {
                return HttpNotFound();
            }
            return View(tip);
        }

        // POST: Tips/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Tip tip = db.Tips.Find(id);
            db.Tips.Remove(tip);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
