using System.ComponentModel.DataAnnotations;

namespace TestAPI.Entities
{
    public class Department
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Area> Areas { get; set; }
        public ICollection<Subarea> Subareas { get; set; }
    }
}
