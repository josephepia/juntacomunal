using Microsoft.EntityFrameworkCore;
namespace juntacomunal.EstructuraBE.Modelos{

     public class Contex : DbContext
    {
        public Contex(DbContextOptions<Contex> options) :
        base(options)
        {
        }
        public DbSet<Barrio> Barrio { get; set; }
        public DbSet<Comuna> Comuna { get; set; }
        public DbSet<Habitante> Habitante { get; set; }
         public DbSet<MiembroJAC> MiembroJAC { get; set; }
        public DbSet<Persona> Persona { get; set; }
        public DbSet<PQRS> PQRS { get; set; }
        public DbSet<Publicaciones> Publicaciones { get; set; }
        public DbSet<RespuestaPQRS> RespuestaPQRS { get; set; }

    }
}
