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

	public DbSet<Models.Recipe> Recipe { get; set; }
}
