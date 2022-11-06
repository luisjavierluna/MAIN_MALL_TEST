using TestAPI.Entities;

namespace TestAPI.DTOs
{
    public class SubareaCreationDTO
    {
        public string Name { get; set; }
        public IFormFile Image { get; set; }
        public int AreaId { get; set; }
        public int DepartmentId { get; set; }
    }
}
