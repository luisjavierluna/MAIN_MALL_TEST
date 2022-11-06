using TestAPI.Entities;

namespace TestAPI.DTOs
{
    public class SubareaCreationDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int AreaId { get; set; }
        public Area Area { get; set; }
        public int DepartmentId { get; set; }
        public Department Department { get; set; }
        //public string Image { get; set; }
    }
}
