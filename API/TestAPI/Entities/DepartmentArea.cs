using System.ComponentModel.DataAnnotations;

namespace TestAPI.Entities
{
    public class DepartmentArea
    {
        [Key]
        public int Id { get; set; }
        public string AreaName { get; set; }
        public string[] SubAreas{ get; set; }
    }
}
