using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TestAPI.DTOs;
using TestAPI.Entities;
using TestAPI.Utilities;

namespace TestAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubareasController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper mapper;
        private readonly IFileStorage fileStorage;
        private readonly string container = "subareas";

        public SubareasController(
            ApplicationDbContext _context,
            IMapper mapper, 
            IFileStorage fileStorage)
        {
            this._context = _context;
            this.mapper = mapper;
            this.fileStorage = fileStorage;
        }

        [HttpGet]
        public async Task<IActionResult> GetSubareas()
        {
            var subAreas = await _context.Subareas.Select(s =>
            new {
                Id = s.Id,
                Name = s.Name,
                Image = s.Image,
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
            var subarea = mapper.Map<Subarea>(subareaCreationDTO);

            if (subareaCreationDTO.Image != null)
            {
                subarea.Image = await fileStorage.SaveFile(container, subareaCreationDTO.Image);
            }

            await _context.Subareas.AddAsync(subarea);
            await _context.SaveChangesAsync();
            return Ok(subarea);
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
        public async Task<IActionResult> PutSubarea(int Id, [FromForm] SubareaCreationDTO subareaCreationDTO)
        {
            var subareaToEdit = await _context.Subareas.FirstOrDefaultAsync(x => x.Id == Id);

            if (subareaToEdit == null)
            {
                return NotFound("Subarea not found");
            }

            subareaToEdit = mapper.Map(subareaCreationDTO, subareaToEdit);

            if (subareaCreationDTO.Image != null)
            {
                subareaToEdit.Image = await fileStorage.EditFile(container, subareaCreationDTO.Image, subareaToEdit.Image);
            }

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
