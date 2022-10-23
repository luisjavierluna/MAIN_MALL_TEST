using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TestAPI.Entities;

namespace TestAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AreasController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AreasController(ApplicationDbContext _context)
        {
            this._context = _context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAreas()
        {
            var areas = await _context.Areas.Select(p =>
            new {
                Id = p.Id,
                Name = p.Name,
                DepartmentId = p.Department.Id,
                DepartmentName = p.Department.Name
            }).ToListAsync();

            return Ok(areas);
        }

        [HttpPost]
        public async Task<IActionResult> PostArea([FromBody] Area area)
        {
            await _context.Areas.AddAsync(area);
            await _context.SaveChangesAsync();

            return Ok(area);
        }
    }
}
