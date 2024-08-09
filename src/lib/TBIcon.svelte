<script lang="ts">
  import type {Resource} from "../data/resources";
  import type {Building} from "../data/buildings";

  export let iconName: Resource | Building | "Time" | "Arrow" | "Beavers"
</script>

<span class="tooltip" data-tip={iconName}>
  <img class="inline" src="/icons/24px-{iconName}_icon.png" alt={iconName}/>
</span>
