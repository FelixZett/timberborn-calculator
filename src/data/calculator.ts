import {type Recipe, recipes, type ResourceDefinition} from "./recipes";

export type RecipeInstance = {
  recipe: Recipe;
  count: number;
  subInstances?: Array<RecipeInstance>;
};

export function calculate(requestedResources: Array<ResourceDefinition>): Array<RecipeInstance> {
  return requestedResources
    .flatMap(({count, resource}) =>
      recipes
        .filter((recipe) => recipe.product.resource === resource)
        .flatMap((recipe) => [{
          recipe,
          count: count / (recipe.product.count / recipe.durationInHours),
          subInstances: calculate(recipe.ingredients.map(ingredient => ({
            count: ingredient.count * count / (recipe.product.count / recipe.durationInHours),
            resource: ingredient.resource,
          })))
        }])
        .filter(recipe => recipe.count !== 0),
    )
    .reduce<Array<RecipeInstance>>(mergeReducer, []);
}

const mergeReducer = (result: Array<RecipeInstance>, recipeInstance: RecipeInstance) => {
  const x = result.find((r) =>
    r.recipe.product.resource === recipeInstance.recipe.product.resource &&
    r.recipe.building === recipeInstance.recipe.building &&
    r.recipe.ingredients === recipeInstance.recipe.ingredients,
  );
  if (x) {
    x.count = x.count + recipeInstance.count;
  } else {
    result.push(recipeInstance);
  }
  return result;
};

export function to2Decimal(number: number): string {
  const ceil = Math.ceil(number).toString();
  const round = (Math.round(number * 100) / 100).toString();
  return ceil === round ? ceil : `${ceil} (${round})`;
}
