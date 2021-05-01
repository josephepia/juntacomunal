using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace juntacomunal.EstructuraBE.Modelos{
    public class RespuestaPQRS
    {
        [Key]
        public string respuestaId { get; set; }
        [Required]
        public string tituloRespuesta { get; set; }
        [Required]
        public string descripcionRespuesta { get; set; } 
        [Required]
        public string autorRespuesta { get; set; }    
        [Required]
        public string estadoRespuesta { get; set; }   
        public string fechaCreacion { get; set; }
        public string destinatarioRespuesta { get; set; }
    }
}