using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TestAPI.DTOs;
using TestAPI.Entities;

namespace TestAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubareasController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper mapper;

        public SubareasController(
            ApplicationDbContext _context,
            IMapper mapper)
        {
            this._context = _context;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetSubareas()
        {
            var subAreas = await _context.Subareas.Select(s =>
            new {
                Id = s.Id,
                Name = s.Name,
                AreaId = s.Area.Id,
                AreaName = s.Area.Name,
                DepartmentId = s.Department.Id,
                DepartmentName = s.Department.Name
            }).ToListAsync();

            return Ok(subAreas);
        }

        [HttpPost]
        public async Task<IActionResult> PostSubarea([FromForm] SubareaCreationDTO subareaCreationDTO)
        {
            //var subarea = mapper.Map<Subarea>(subareaCreationDTO);
            //await _context.Subareas.AddAsync(subarea);
            //await _context.SaveChangesAsync();
            //return Ok(subarea);
            return NoContent();
        }

        [HttpGet("{Id:int}")]
        public async Task<IActionResult> GetSubarea(int Id)
        {
            var existingSubarea = await _context.Subareas.FirstOrDefaultAsync(x => x.Id == Id);

            if (existingSubarea == null)
            {
                return NotFound("Subarea not found");
            }

            return Ok(existingSubarea);
        }

        [HttpPut("{Id:int}")]
        public async Task<IActionResult> PutSubarea(int Id, [FromBody] Subarea newSubarea)
        {
            var subareaToEdit = await _context.Subareas.FirstOrDefaultAsync(x => x.Id == Id);

            if (subareaToEdit == null)
            {
                return NotFound("Subarea not found");
            }

            subareaToEdit.Name = newSubarea.Name;
            subareaToEdit.AreaId = newSubarea.AreaId;
            subareaToEdit.DepartmentId = newSubarea.DepartmentId;

            await _context.SaveChangesAsync();

            return Ok(subareaToEdit);
        }

        [HttpDelete("{Id:int}")]
        public async Task<IActionResult> DeleteSubarea(int Id)
        {
            var subareaToDelete = await _context.Subareas.FirstOrDefaultAsync(x => x.Id == Id);

            if (subareaToDelete == null)
            {
                return NotFound("Subarea not found");
            }

            _context.Subareas.Remove(subareaToDelete);
            await _context.SaveChangesAsync();

            return Ok(subareaToDelete);
        }

    }
}
