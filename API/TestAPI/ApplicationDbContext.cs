using Microsoft.EntityFrameworkCore;
using TestAPI.Entities;

namespace TestAPI
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Department> Departments { get; set; }
    }
}
