using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Recipe.API.Library.DataAccess;

namespace Recipes.API.Controllers
{
    [ApiController]
    [Route("recipe")]
    public class RecipeController : ControllerBase
    {
        private readonly RecipeContext _recipeContext;
        public RecipeController(RecipeContext recipeContext)
        {
            _recipeContext = recipeContext;
        }

        public Recipe.API.Library.Models.Recipe Recipe { get; set; } = new Recipe.API.Library.Models.Recipe();
        public List<Recipe.API.Library.Models.Recipe> Recipes { get; set; } = new List<Recipe.API.Library.Models.Recipe>();

        [HttpGet("get-recipe")]
        public async Task<Recipe.API.Library.Models.Recipe> GetRecipe(int id)
        {
            Recipe = await _recipeContext.Recipe
                .Where(r => r.Id == id)
                .FirstOrDefaultAsync();

            return Recipe;
        }

        [HttpGet("get-recipes")]
        public async Task<List<Recipe.API.Library.Models.Recipe>> GetRecipes()
        {
            Recipes = await _recipeContext.Recipe
                .Include(r => r.Ingredients)
                .Include(r => r.Instructions)
                .ToListAsync();

            return Recipes;             
        }

        [HttpPost("post-recipe")]
        public async Task<IActionResult> PostRecipe(Recipe.API.Library.Models.Recipe recipe)
        {
            await _recipeContext.AddAsync(recipe);
            await _recipeContext.SaveChangesAsync();

            return Ok();
        }
    }
}
