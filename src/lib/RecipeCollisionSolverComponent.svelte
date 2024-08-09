<script lang="ts">
  import {type Recipe, recipes} from "../data/recipes";
  import RecipeComponent from "./RecipeComponent.svelte";
  import type {Resource} from "../data/resources";

  const duplicates = recipes.filter(recipe => recipes.filter(r => r.product.resource === recipe.product.resource).length > 1);
  const duplicateMap: Map<Resource, Array<Recipe>> = new Map<Resource, Array<Recipe>>();
  duplicates.forEach(recipe => {
    let resource = recipe.product.resource;
    duplicateMap.set(resource, [recipe, ...(duplicateMap.get(resource) ?? [])]);
  })

</script>
<details class="dropdown">
  <summary class="btn m-1">Alternative Recipe Settings</summary>
  <ul class="menu dropdown-content bg-base-200 rounded-box z-[1] p-2 shadow">
    {#each duplicateMap.entries() as [resource, recipes]}
      <li class="text-nowrap font-bold pt-3 pb-1">Choose the prefered production method for <img class="inline" src="/icons/24px-{resource}_icon.png" alt="" /> {resource}</li>
          {#each recipes as recipe, index}
            <li class="form-control">
              <label class="label cursor-pointer">
                <span class="label-text"><RecipeComponent recipe={recipe}/></span>
                <input type="radio" name={resource} value={recipe} class="radio checked:bg-red-500" />
              </label>
            </li>
          {/each}
    {/each}
  </ul>
</details>
