import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) {}

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Lemon Salmon',
      'Salmon cooked with lemon and basil',
      'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg',
      [
        new Ingredient('Lemon', 2),
        new Ingredient('Salmon', 1),
      ]
    ),
    new Recipe(
      'Fresh Lettuce',
      'Delicious plain Lettuce',
      'http://www.vegkitchen.com/wp-content/uploads/2011/07/Romaine-lettuce.jpg',
      [
        new Ingredient('Lettuce', 10),
        new Ingredient('Water', 2)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
