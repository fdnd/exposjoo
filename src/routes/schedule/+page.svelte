<script>
  import Text from '$lib/components/Text.svelte'
  import { data } from './data'
</script>

<svelte:head>
  <title>
    Schedule Exposjoo - a typical Amsterdam digital design sjoo
  </title>
  <meta name="description" content="Exposjoo is an evening in which we proudly present the student work of the Associate Degreed Frontend Design and Development, the Master Digital Design and the Bachelor Communication and Multimedia Design." />
  <meta name="keywords" content="digital design, development, sjoo, amsterdam, university of applied sciences" />
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

<Text textContainers={data.textContainers} />

