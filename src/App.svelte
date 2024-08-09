<script lang="ts">
  import {calculate, type RecipeInstance, to2Decimal} from "./data/calculator";
  import {recipes} from "./data/recipes";
  import FoodChooserComponent from "./lib/FoodSettingsComponent.svelte";
  import type {Resource} from "./data/resources";
  import RecipeInstanceComponent from "./lib/RecipeInstanceComponent.svelte";
  import RecipeCollisionSolverComponent from "./lib/RecipeCollisionSolverComponent.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import TBIcon from "./lib/TBIcon.svelte";

  let foodItems: Array<Resource> = ["Blueberry"]

  const botBiofuelPerDay: number = 1.94;
  const botCatalystPerDay: number = 0.69;
  const botPunchcardsPerDay: number = 0.69;

  const beaverFoodPerDay: number = 2.67;
  const beaverWaterPerDay: number = 2.13;
  const beaverBooksPerDay: number = 1; // TODO find out

  let populationTarget: number = 12;
  let useBooks: boolean = false;

  let botTarget: number = 0;
  let usePunchcards: boolean = true;
  let useCatalyst: boolean = true;

  let calculation: Array<RecipeInstance> = []

  $: calculation = calculate([
    ...foodItems.map(foodItem => ({
      resource: foodItem,
      count: populationTarget * (beaverFoodPerDay / 24) / foodItems.length,
    })),
    {resource: "Water", count: populationTarget * (beaverWaterPerDay / 24)},
    {resource: "Book", count: useBooks ? populationTarget * (beaverBooksPerDay / 24) : 0},
    {resource: "Biofuel", count: botTarget * (botBiofuelPerDay / 24)},
    {resource: "Catalyst", count: useCatalyst ? botTarget * (botCatalystPerDay / 24) : 0},
    {resource: "Punchcard", count: usePunchcards ? botTarget * (botPunchcardsPerDay / 24) : 0},
    {resource: "Bot", count: botTarget / 70 / 24},
  ]);
</script>

<Navbar/>
<main class="grid grid-cols-1 gap-3">
  <div role="alert" class="alert alert-warning">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 shrink-0 stroke-current"
      fill="none"
      viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
    <span>Warning: This calculator is still under construction! Calculations are still incorrect</span>
  </div>
  <section id="settings-section">
    <div class="join">
      <input
        aria-label="Folktails"
        checked
        class="join-item btn"
        name="options"
        type="radio"
      />
      <input
        aria-label="Iron Teeth"
        class="join-item btn"
        disabled
        name="options"
        type="radio"
      />
    </div>
    <FoodChooserComponent bind:chosenFoods={foodItems}/>
    <RecipeCollisionSolverComponent/>
  </section>
  <section class="grid gap-3 grid-flow-row grid-cols-2" id="target-section">
    <div>
      <label class="form-control">
        <div class="label">
          <span class="label-text"><TBIcon iconName="Beavers"/>Target Population</span>
        </div>
        <input
          bind:value={populationTarget}
          class="input input-bordered"
          placeholder="0"
          type="number"
        />
      </label>
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text"><TBIcon iconName="Book"/>Books</span>
          <input bind:checked={useBooks} class="checkbox" type="checkbox"/>
        </label>
      </div>
    </div>
    <div>
      <label class="form-control">
        <div class="label">
          <span class="label-text"><TBIcon iconName="Bot"/>Target bot count</span>
        </div>
        <input
          bind:value={botTarget}
          class="input input-bordered"
          placeholder="0"
          type="number"
        />
      </label>
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text"><TBIcon iconName="Catalyst"/>Catalyst</span>
          <input bind:checked={useCatalyst} class="checkbox" type="checkbox"/>
        </label>
      </div>
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text"><TBIcon iconName="Punchcard"/>Punchcards</span>
          <input
            bind:checked={usePunchcards}
            class="checkbox"
            type="checkbox"
          />
        </label>
      </div>
    </div>
  </section>
  <section class="grid gap-3 grid-flow-row grid-cols-3" id="production-section">
    <div>
      <p class="text-accent"> Food Need:</p>
      <p> {to2Decimal(populationTarget * beaverFoodPerDay)}/day</p>
      <p> {to2Decimal(populationTarget * beaverFoodPerDay / 24)}/h</p>
    </div>
    <div>
      <p class="text-accent">Water Need:</p>
      <p> {to2Decimal(populationTarget * beaverWaterPerDay)}/day</p>
      <p> {to2Decimal(populationTarget * beaverWaterPerDay / 24)}/h</p>
    </div>
    {#if useBooks}
      <div>
        <p class="text-accent">Books Need:</p>
        <p> {to2Decimal(populationTarget * beaverBooksPerDay)}/day</p>
        <p> {to2Decimal(populationTarget * beaverBooksPerDay / 24)}/h</p>
      </div>
    {:else}
      <div class="text-neutral-600">Books disabled</div>
    {/if}
    <div>
      <p class="text-accent">Biofuel Need:</p>
      <p> {to2Decimal(botTarget * botBiofuelPerDay)}/day</p>
      <p> {to2Decimal(botTarget * botBiofuelPerDay / 24)}/h</p>
    </div>
    {#if useCatalyst}
      <div>
        <p class="text-accent">Catalyst Need:</p>
        <p> {to2Decimal(botTarget * botCatalystPerDay)}/day</p>
        <p>{to2Decimal(botTarget * botCatalystPerDay / 24)}/h</p>
      </div>
    {:else}
      <div class="text-neutral-600">Catalyst disabled</div>
    {/if}
    {#if usePunchcards}
      <div>
        <p class="text-accent">Punchcards Need:</p>
        <p> {to2Decimal(botTarget * botPunchcardsPerDay)}/day</p>
        <p> {to2Decimal(botTarget * botPunchcardsPerDay / 24)}/h</p>
      </div>
    {:else}
      <div class="text-neutral-600">Punchcards disabled</div>
    {/if}
  </section>
  <section id="calculation-results-section">
    {#each calculation as recipeInstance}
      <RecipeInstanceComponent recipeInstance={recipeInstance}/>
    {/each}
  </section>
  <section id="all-recipes-section">
    <details class="collapse bg-base-200">
      <summary class="collapse-title text-xl font-medium">All Recipes</summary>
      <div class="collapse-content">
        <ol>
          {#each recipes as recipe}
            <li>
              <span>{recipe.building}</span>
              <span>produces</span>
              <span
              >{recipe.product.resource} x {recipe.product
                .count}</span
              >
              <span>using</span>
              {#each recipe.ingredients as ingedient}
                <span>{ingedient.resource} x {ingedient.count}</span>
              {:else}
                <span>Nothing</span>
              {/each}
              <span>in {recipe.durationInHours}h</span>
            </li>
          {/each}
        </ol>
      </div>
    </details>
  </section>
</main>
