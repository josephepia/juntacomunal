using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace juntacomunal.EstructuraBE.Modelos{
    public class Comuna
    {
        [Key]
        public string comunaId { get; set; }
        [Required]
        public string nombreComuna { get; set; }
        [Required]
        public string municipioComuna { get; set; }    
    }
}