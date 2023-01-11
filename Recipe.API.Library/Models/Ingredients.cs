using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipe.API.Library.Models;

public class Ingredients
{
    public int Id { get; set; }

    [Required]
    [MaxLength(100)]
    public string Ingredient { get; set; }
}
