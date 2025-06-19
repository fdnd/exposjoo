<script>
  import Text from '$lib/components/Text.svelte'
  import { data } from './data'
</script>

<svelte:head>
  <title>
    About Exposjoo - a typical Amsterdam digital design sjoo
  </title>
  <meta name="description" content="Exposjoo is an evening in which we proudly present the student work of the Associate Degreed Frontend Design and Development, the Master Digital Design and the Bachelor Communication and Multimedia Design." />
  <meta name="keywords" content="digital design, development, sjoo, amsterdam, university of applied sciences" />
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

<Text textContainers={data.textContainers} />

