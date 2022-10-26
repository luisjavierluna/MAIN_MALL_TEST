using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TestAPI.Entities;

namespace TestAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public DepartmentsController(ApplicationDbContext _context)
        {
            this._context = _context;
        }

        [HttpGet]
        public async Task<IActionResult> GetDepartments()
        {
            var departments = await _context.Departments
                .Select(x =>
                new
                {
                    Id = x.Id,
                    Name = x.Name,
                    Areas = x.Areas.Select(x =>
                    new
                    {
                        Id = x.Id,
                        Name = x.Name,
                    })
                }).ToListAsync();

            return Ok(departments);
        }

        [HttpGet("navbarMenuItems")]
        public async Task<IActionResult> GetAllMenuItems()
        {
            var departments = await _context.Departments
                .Select(x =>
                new
                {
                    Id = x.Id,
                    Name = x.Name,
                    Areas = x.Areas.Select(x =>
                    new
                    {
                        Id = x.Id,
                        Name = x.Name,
                        Subareas = x.Subareas.Select(x =>
                        new {
                            Id = x.Id,
                            Name = x.Name
                        })
                    })
                }).ToListAsync();

            return Ok(departments);
        }

        [HttpPost]
        public async Task<IActionResult> PostDepartments([FromBody] Department department)
        {
            await _context.Departments.AddAsync(department);
            await _context.SaveChangesAsync();

            return Ok(department);
        }

        [HttpGet("{Id:int}")]
        public async Task<IActionResult> GetDepartment(int Id)
        {
            var existingDepartment = await _context.Departments.FirstOrDefaultAsync(x => x.Id == Id);

            if (existingDepartment == null)
            {
                return NotFound("Department not found");
            }

            return Ok(existingDepartment);
        }

        [HttpPut("{Id:int}")]
        public async Task<IActionResult> PutDepartment(int Id, [FromBody] Department newDepartment)
        {
            var departmentToEdit = await _context.Departments.FirstOrDefaultAsync(x => x.Id == Id);

            if (departmentToEdit == null)
            {
                return NotFound("Department not found");
            }

            departmentToEdit.Name = newDepartment.Name;

            await _context.SaveChangesAsync();

            return Ok(departmentToEdit);
        }

        [HttpDelete("{Id:int}")]
        public async Task<IActionResult> DeleteDepartment(int Id)
        {
            var departmentToDelete = await _context.Departments.FirstOrDefaultAsync(x => x.Id == Id);

            if (departmentToDelete == null)
            {
                return NotFound("Department not found");
            }

            _context.Departments.Remove(departmentToDelete);
            await _context.SaveChangesAsync();

            return Ok(departmentToDelete);
        }
    }
}
