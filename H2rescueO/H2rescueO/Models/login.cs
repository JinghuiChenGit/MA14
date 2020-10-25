



namespace watersaver.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.Data.Entity;
    using System.Linq;
    public class login
    {
        [Display(Name = "Account id")]
        
        public String Account_id { get; set; }

        [Display(Name = "Password")]
        [DataType(DataType.Password)]
        [Required(AllowEmptyStrings = false)]
        public String Password { get; set; }

        [Display(Name = "Remember me")]
        public bool Remember { get; set; }
    }



}