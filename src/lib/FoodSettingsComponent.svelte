<script lang="ts">
  import type {Resource} from "../data/resources";

  const availableFoods: Array<Resource> = [
    "Blueberry",
    "Carrot",
    "Sunflower_Seeds",
    "Cattail_Crackers",
    "Grilled_Potato",
    "Grilled_Chestnut",
    "Grilled_Spadderdock",
    "Bread",
    "Maple_Pastries",
  ]

  export let chosenFoods: Array<Resource> = ["Blueberry"];

</script>


<details class="dropdown">
  <summary class="btn m-1">Food Settings</summary>
  <div class="menu dropdown-content bg-base-200 rounded-box z-[1] w-52 p-2 shadow">
    <div class="group grid grid-cols-3">
    <button class="btn" on:click={() => {chosenFoods = availableFoods}}>All</button>
    <button class="btn" on:click={() => {chosenFoods = availableFoods.filter(x => x !== "Blueberry")}}>Optimal</button>
    <button class="btn" on:click={() => {chosenFoods = []}}>None</button>
    </div>
    {#each availableFoods as foodItem}
      <div class="form-control">
        <label class="label cursor-pointer">
          <input type="checkbox" value={foodItem} bind:group={chosenFoods} class="checkbox"/>
          {foodItem}<img class="inline" src="/icons/24px-{foodItem}_icon.png" alt="" />
        </label>
      </div>
    {/each}
  </div>
</details>
