<script lang="ts">
  import {type RecipeInstance, to2Decimal} from "../data/calculator";
import RecipeComponent from "./RecipeComponent.svelte";

export let recipeInstance: RecipeInstance;
</script>

<div>
  {to2Decimal(recipeInstance.count)} x <RecipeComponent recipe={recipeInstance.recipe}/>
  {#if recipeInstance.subInstances}
  <div class="pl-4">
    {#each recipeInstance.subInstances as subInstance}
      <svelte:self recipeInstance={subInstance}/>
    {/each}
  </div>
  {/if}
</div>
