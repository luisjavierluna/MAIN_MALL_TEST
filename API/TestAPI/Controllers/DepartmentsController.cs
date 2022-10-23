﻿using Microsoft.AspNetCore.Http;
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
                        Subareas = x.Subareas.Select(x =>
                        new
                        {
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
    }
}
