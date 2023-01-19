using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Recipe.API.Library.DataAccess;
using Recipe.API.Library.Models;

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

        // Get 
        #region Get
        // Get individual recipe
        [HttpGet("get-recipe")]
        public async Task<Recipe.API.Library.Models.Recipe> GetRecipe(int id)
        {
            var recipe = await _recipeContext.Recipe
                .Where(r => r.Id == id)
                .FirstOrDefaultAsync();

            return recipe;
        }

        // Get list of recipes
        [HttpGet("get-recipes")]
        public async Task<List<Recipe.API.Library.Models.Recipe>> GetRecipes()
        {
            var recipes = await _recipeContext.Recipe
                .Include(r => r.Ingredients)
                .Include(r => r.Instructions)
                .ToListAsync();

            return recipes;             
        }

        // Get list of categories
        [HttpGet("get-categories")]
        public async Task<List<Category>> GetCategories()
        {
            var categories = await _recipeContext.Category
                .ToListAsync();

            return categories;
        }

        // Get list of cuisine
        [HttpGet("get-cuisines")]
        public async Task<List<Cuisine>> GetCuisines()
        {
            var Cuisines = await _recipeContext.Cuisine
                .ToListAsync();

            return Cuisines;
        }
        #endregion

        // Post
        #region Post
        [HttpPost("post-recipe")]
        public async Task<IActionResult> PostRecipe(Recipe.API.Library.Models.Recipe recipe)
        {
            await _recipeContext.AddAsync(recipe);
            await _recipeContext.SaveChangesAsync();

            return Ok();
        }
        #endregion
    }
}
