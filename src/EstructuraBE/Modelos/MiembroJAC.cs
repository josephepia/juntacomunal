using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace juntacomunal.EstructuraBE.Modelos{
public class MiembroJAC
    {
       public Persona persona { get; set; }
        [Required]
        public string rolMiembro { get; set; }
       
    }
}