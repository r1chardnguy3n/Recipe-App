using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipe.API.Library.Models;

public class Instructions
{
    public int Id { get; set; }

    [Required]
    [MaxLength(10)]
    public string Step { get; set; }

    [Required]
    [MaxLength(500)]
    public string Instruction { get; set; }
}
