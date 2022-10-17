using System.ComponentModel.DataAnnotations;

namespace TestAPI.Entities
{
    public class DepartmentSubArea
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }

        public int AreaId { get; set; }
        public int DepartmentId { get; set; }
    }
}
