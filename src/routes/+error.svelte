<script>
  import Intro from "$lib/components/Intro.svelte";
  import Text from "$lib/components/Text.svelte";
  import { page } from '$app/stores'
  import { data } from './data'
  // get the error code
  const errorCode = $page.status

  data.textContainers[0].title = `Error ${errorCode} —  ${data.textContainers[0].title}`
</script>

<svelte:head>
  <title>404 - Exposjoo - a typical Amsterdam digital design sjoo</title>
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
  <meta property="og:title" content="Exposjoo - a typical Amsterdam digital design sjoo" />
  <meta property="og:description" content="Exposjoo is a typical Amsterdam digital design sjoo hosted by the Amsterdam University of Applied Sciences." />
  <meta property="og:image" content="https://exposjoo.nl/social-image.jpg" />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="exposjoo.nl" />
  <meta property="twitter:url" content="https://exposjoo.nl/" />    
  <meta name="twitter:title" content="Exposjoo - a typical Amsterdam digital design sjoo" />
  <meta name="twitter:description" content="Exposjoo is a typical Amsterdam digital design sjoo hosted by the Amsterdam University of Applied Sciences." />
  <meta name="twitter:image" content="https://exposjoo.nl/social-image.jpg" />

</svelte:head>

<Intro text="error {errorCode}" />
<div class="text">
  <Text textContainers={data.textContainers} />
</div>

