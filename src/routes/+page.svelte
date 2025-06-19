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

<svelte:head>
  <title>
    Exposjoo - a typical Amsterdam digital design sjoo
  </title>
  <meta name="description" content="Exposjoo is a typical Amsterdam digital design sjoo hosted by the Amsterdam University of Applied Sciences." />
  <meta name="keywords" content="digital design, development, sjoo, amsterdam" />
  <!-- social image -->
  <meta property="og:image" content="%sveltekit.assets%/social-image.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="675" />
  <meta property="og:image:alt" content="Exposjoo, 2 July 2025, 17-19h, Theo Thijssenhuis Amsterdam" />
  <meta property="og:image:type" content="image/jpg" />
  <meta property="og:image:secure_url" content="%sveltekit.assets%/social-image.jpg" />
  <meta property="og:title" content="Exposjoo - a typical Amsterdam digital design sjoo" />
  <meta property="og:description" content="Exposjoo is a typical Amsterdam digital design sjoo hosted by the Amsterdam University of Applied Sciences." />
  <meta property="og:url" content="https://exposjoo.nl" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Exposjoo" />
  <meta property="og:locale" content="en_US" />
</svelte:head>

<Intro on:introComplete={handleIntroComplete} />
<div class="text">
  <IntroText text={data.introText} />
</div>
<Building bind:this={buildingComponent} courses={data.courses} />


<style>
</style>