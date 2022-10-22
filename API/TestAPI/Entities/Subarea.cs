using System.ComponentModel.DataAnnotations;

namespace TestAPI.Entities
{
    public class Subarea
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int AreaId { get; set; }
        public Area Area { get; set; }
        public int DepartmentId { get; set; }
        public Department Department { get; set; }
    }
}
