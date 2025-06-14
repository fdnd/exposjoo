<script>
  import Intro from '$lib/components/Intro.svelte'
  import Building from '$lib/components/Building.svelte'
  import { onMount } from 'svelte'
  
  let buildingComponent
  let introComplete = false

  function handleIntroComplete() {
    introComplete = true
    if (buildingComponent) {
      buildingComponent.startBuildingAnimation()
    }
  }

  onMount(() => {
    if (introComplete && buildingComponent) {
      buildingComponent.startBuildingAnimation()
    }
  })
</script>

<Intro on:introComplete={handleIntroComplete} />
<Building bind:this={buildingComponent} />
