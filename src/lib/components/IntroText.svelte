<script>
  import { LocationPin, Calendar } from '$lib/svgs'

  export let text
</script>

<section class="text p small-body">
  <p class="small-body">
    {@html text}
  </p>
  <p class="small-body">
    <!-- <button onclick={openRegisterForm}> -->
     <a href="https://assets-eur.mkt.dynamics.com/7c8e8ad8-52ca-ed11-aece-0022489e3349/digitalassets/standaloneforms/4fbea2b4-af4a-f011-877a-000d3ab670f1?readableEventId=Exposjoo_20253465078783" target="_blank">
      <Calendar /> 2 july 2025 - 5 PM - 9 PM 
     </a>
    <!-- </button> -->
    <a href="https://maps.app.goo.gl/R6NSiGg9Qx6RXmuT6" target="_blank">  
      <LocationPin /> Theo Thijssenhuis Amsterdam
    </a>
  </p>
</section>

<style lang="scss">
  .text {
    position: absolute;
    max-width: max(30rem, calc(480 / var(--design-size) * 100vw));
    padding: max(4rem, calc(80 / var(--design-size) * 100vw)) var(--padding) 0;
    text-wrap: balance;
    @media (max-width: 1024px) {
      position: static;
    }
    a {
      display: flex;
      align-items: center;
      gap: 0.5em;
      text-decoration: none;
    }
    :global(svg) {
      display: inline-block;
      width: 1.25em;
      height: 1.25em;
    }
    /* button {
      padding: 0;
      background: none;
      border: none;
      cursor: pointer;
      color: inherit;
      
    } */
  }
</style>
