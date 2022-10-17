namespace TestAPI.Entities
{
    public class Department
    {
        public int Id { get; set; }
        public string DepartmentName { get; set; }
        public DepartmentArea[] DepartmentAreas { get; set; }
    }
}
