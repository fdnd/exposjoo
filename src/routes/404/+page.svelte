<script>
  import Intro from "$lib/components/Intro.svelte";
  import Text from "$lib/components/Text.svelte";
  import { data } from '../data'

  // Set the error code for the 404 page
  data.textContainers[0].title = `Error 404 — ${data.textContainers[0].title}`
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
  <meta name="twitter:domain" content="exposjoo.nl" />
  <meta name="twitter:url" content="https://exposjoo.nl/" />    
  <meta name="twitter:title" content="Exposjoo - a typical Amsterdam digital design sjoo" />
  <meta name="twitter:description" content="Exposjoo is a typical Amsterdam digital design sjoo hosted by the Amsterdam University of Applied Sciences." />
  <meta name="twitter:image" content="https://exposjoo.nl/social-image.jpg" />
</svelte:head>

<Intro text="error 404" />
<div class="text">
  <Text textContainers={data.textContainers} />
</div>
