using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipe.API.Library.Models;

public class RecipeCuisine
{
    public int RecipeId { get; set; }
    public Recipe Recipe { get; set; }

    public int CuisineId { get; set; }
    public Cuisine Cuisine { get; set; }
}
