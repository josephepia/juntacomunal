using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace juntacomunal.EstructuraBE.Modelos{
    public class PQRS
    {
        [Key]
        public string pqrsId { get; set; }
        [Required]
        public string tituloPQRS { get; set; }
        [Required]
        public string descripcionPQRS { get; set; } 
        [Required]
        public string autorPQRS { get; set; }    
        [Required]
        public string estadoPQRS { get; set; }   
        public string fechaCreacion { get; set; }
    }
}