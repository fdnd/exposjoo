<script>
  import Intro from "$lib/components/Intro.svelte";
  import Building from "$lib/components/Building.svelte";
  import IntroText from "$lib/components/IntroText.svelte";
  import { onMount } from "svelte";
  import { data } from "./data";

  let buildingComponent;
  let introComplete = false;

  function handleIntroComplete() {
    introComplete = true;
    if (buildingComponent) {
      buildingComponent.startBuildingAnimation();
    }
  }

  onMount(() => {
    if (introComplete && buildingComponent) {
      buildingComponent.startBuildingAnimation();
    }
  });
</script>

<svelte:head>
  <title>Exposjoo - a typical Amsterdam digital design sjoo</title>
  <meta
    name="description"
    content="Exposjoo is a typical Amsterdam digital design sjoo hosted by the Amsterdam University of Applied Sciences."
  />
  <meta
    name="keywords"
    content="digital design, development, sjoo, amsterdam"
  />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://exposjoo.nl/" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Exposjoo - a typical Amsterdam digital design sjoo"
  />
  <meta
    property="og:description"
    content="Exposjoo is a typical Amsterdam digital design sjoo hosted by the Amsterdam University of Applied Sciences."
  />
  <meta property="og:image" content="https://exposjoo.nl/social-image.jpg" />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="exposjoo.nl" />
  <meta property="twitter:url" content="https://exposjoo.nl/" />
  <meta
    name="twitter:title"
    content="Exposjoo - a typical Amsterdam digital design sjoo"
  />
  <meta
    name="twitter:description"
    content="Exposjoo is a typical Amsterdam digital design sjoo hosted by the Amsterdam University of Applied Sciences."
  />
  <meta name="twitter:image" content="https://exposjoo.nl/social-image.jpg" />
</svelte:head>

<Intro text="Exposjoo" on:introComplete={handleIntroComplete} />
<IntroText text={data.introText} />
<Building bind:this={buildingComponent} courses={data.courses} />
