using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipe.API.Library.Models;

public class Cuisine
{
    public int Id { get; set; }

    [Required]
    [MaxLength(50)]
    public string CuisineType { get; set; }

    public IList<RecipeCuisine> RecipeCuisine { get; set; }
}
