﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipe.API.Library.Models;

public class RecipeCategory
{
    public int RecipeId { get; set; }
    public Recipe Recipe { get; set; }

    public int CategoryId { get; set; }
    public Category Category { get; set; }
}
