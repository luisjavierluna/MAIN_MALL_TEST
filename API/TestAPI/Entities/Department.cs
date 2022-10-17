﻿using System.ComponentModel.DataAnnotations;

namespace TestAPI.Entities
{
    public class Department
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
