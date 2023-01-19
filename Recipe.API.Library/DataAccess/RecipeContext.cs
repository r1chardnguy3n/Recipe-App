using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Recipe.API.Library.Models;

namespace Recipe.API.Library.DataAccess;

public class RecipeContext : DbContext
{
	public RecipeContext(DbContextOptions options) : base(options)
	{

	}

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<RecipeCategory>().HasKey(rc => new { rc.RecipeId, rc.CategoryId });
        modelBuilder.Entity<RecipeCuisine>().HasKey(rc => new { rc.RecipeId, rc.CuisineId });
    }

    public DbSet<Models.Recipe> Recipe { get; set; }
	public DbSet<Category> Category { get; set; }
    public DbSet<Cuisine> Cuisine { get; set; }
    public DbSet<RecipeCategory> RecipeCategory { get; set; }
    public DbSet<RecipeCuisine> RecipeCuisine{ get; set; }
}
