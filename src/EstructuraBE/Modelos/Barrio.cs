using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace juntacomunal.EstructuraBE.Modelos{

    public class Barrio
    {
        [Key]
        public string barrioId { get; set; }
        [Required]
        public string NombreBarrio { get; set; }
        [Required]
        public string estratoBarrio { get; set; }    
        public int comunaId { get; set; }
        public Comuna comuna { get; set; }
    }
}