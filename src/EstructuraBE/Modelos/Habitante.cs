using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace juntacomunal.EstructuraBE.Modelos{
public class Habitante
    {
       public Persona persona { get; set; }
        [Required]
        public string tipoPersona { get; set; }
       
    }
}
