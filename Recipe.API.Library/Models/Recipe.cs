using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipe.API.Library.Models;

public class Recipe
{
    public int Id { get; set; }

    [Required]
    [MaxLength(150)]
    public string Name { get; set; }

    [Required]
    [MaxLength(500)]
    public string Description { get; set; }

    [MaxLength(500)]
    public string? Notes { get; set; }

    public string? Image { get; set; }

    public List<Ingredients> Ingredients { get; set; } = new List<Ingredients>();

    public List<Instructions> Instructions { get; set; } = new List<Instructions>();

    public IList<RecipeCategory> RecipeCategory { get; set; } 
}
