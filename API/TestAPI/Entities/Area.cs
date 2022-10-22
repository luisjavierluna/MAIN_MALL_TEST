using System.ComponentModel.DataAnnotations;

namespace TestAPI.Entities
{
    public class Area
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int DepartmentId { get; set; }
        public Department Department { get; set; }
        public ICollection<Subarea> Subareas { get; set; }
    }
}
