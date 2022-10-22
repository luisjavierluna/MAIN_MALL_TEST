using Microsoft.EntityFrameworkCore;
using TestAPI.Entities;

namespace TestAPI
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Department> Departments { get; set; }
        public DbSet<Area> Areas { get; set; }
        public DbSet<Subarea> Subareas { get; set; }

        public ApplicationDbContext(DbContextOptions options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Department>(department =>
            {
                department.ToTable("Departments");

                department.HasKey(d => d.Id);

                department.Property(d => d.Name).IsRequired();
            });

            modelBuilder.Entity<Area>(area =>
            {
                area.ToTable("Areas");

                area.HasKey(a => a.Id);

                area.Property(a => a.Name).IsRequired();

                area.HasOne(a => a.Department)
                    .WithMany(d => d.Areas)
                    .HasForeignKey(a => a.DepartmentId)
                    .IsRequired()
                    .OnDelete(DeleteBehavior.Restrict);
            });

            modelBuilder.Entity<Subarea>(subarea =>
            {
                subarea.ToTable("Subarea");

                subarea.HasKey(s => s.Id);

                subarea.Property(s => s.Name).IsRequired();

                subarea.HasOne(s => s.Area)
                .WithMany(a => a.Subareas)
                .HasForeignKey(s => s.AreaId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Restrict);

                subarea.HasOne(s => s.Department)
                .WithMany(d => d.Subareas)
                .HasForeignKey(s => s.DepartmentId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Restrict);
            });

            base.OnModelCreating(modelBuilder);
        }
    }
}
