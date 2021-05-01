using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace juntacomunal.EstructuraBE.Modelos{
    public class Publicaciones
    {
        [Key]
        public string publicacionId { get; set; }
        [Required]
        public string tituloPublicacion { get; set; }
        [Required]
        public string descripcionPublicacion  { get; set; } 
        public string anexosPublicacion  { get; set; }
    }
}