using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TestAPI.Entities;

namespace TestAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubareasController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public SubareasController(ApplicationDbContext _context)
        {
            this._context = _context;
        }

        [HttpGet]
        public async Task<IActionResult> GetSubareas()
        {
            IEnumerable<Subarea> subAreas = await _context.Subareas.ToListAsync();

            return Ok(subAreas);
        }

        [HttpPost]
        public async Task<IActionResult> PostSubarea([FromBody] Subarea subarea)
        {
            await _context.Subareas.AddAsync(subarea);
            await _context.SaveChangesAsync();

            return Ok(subarea);
        }
    }
}
