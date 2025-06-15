<script>
  export let text;
</script>

<section class="text p small-body">
  {@html text}
</section>

<style>
  .text {
    position: absolute;
    max-width: max(30rem, calc(480 / var(--design-size) * 100vw));
    margin-top: max(4rem, calc(80 / var(--design-size) * 100vw));
    padding: 0 var(--padding);
    text-wrap: balance;
  }
</style>
