<script lang="ts">
  import type {Recipe} from "../data/recipes";
  import TBIcon from "./TBIcon.svelte";

  export let recipe: Recipe;
</script>

<span class="text-nowrap">
  <TBIcon iconName={recipe.building}/>{recipe.building}
  {#if recipe.ingredients.length > 0}
    {#each recipe.ingredients as ingredient}
      <span class="px-1">{ingredient.count}
        <TBIcon iconName={ingredient.resource}/>
      </span>
    {/each}
    <TBIcon iconName="Arrow"/>
  {/if}
  <span class="px-1">
  <TBIcon iconName="Time"/>
    {recipe.durationInHours > 36 ? recipe.durationInHours / 24 + "d" : recipe.durationInHours + "h"}
    </span>
  <TBIcon iconName="Arrow"/>
  <span class="px-1">{recipe.product.count}
    <TBIcon iconName={recipe.product.resource}/>
  </span>
</span>
