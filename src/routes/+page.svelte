<script>
  import Intro from '$lib/components/Intro.svelte'
  import Building from '$lib/components/Building.svelte'
  import IntroText from '$lib/components/IntroText.svelte'
  import { onMount } from 'svelte'
  import { data } from './data'

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
<div class="text">
  <IntroText text={data.introText} />
</div>
<Building bind:this={buildingComponent} courses={data.courses} />


<style>
</style>