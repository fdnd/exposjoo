<script>
  export let textContainers;
  import LineDrawings from "$lib/components/LineDrawings/LineDrawings.svelte";

  const arrows = ['Arrow', 'Arrow2', 'Arrow3']
</script>

<section class="text p small-body">
  {#each textContainers as item}
    <div class="text-container">
      <svelte:element
        this={item.level}
        class={item.titleClass}
        id={item.title.toLowerCase().replace(/ /g, "-")}
      >
        {item.title}
        <LineDrawings line={arrows[Math.floor(Math.random() * arrows.length)]} />
      </svelte:element>
      {#each item.text as text}
        <p class={item.textClass}>
          {@html text}
        </p>
      {/each}
      {#if item.button}
        <a href={item.link} class="button">{item.button}</a>
      {/if}
    </div>
  {/each}
</section>

<style lang="scss">
  .text {
    position: absolute;
    max-width: max(30rem, calc(820 / var(--design-size) * 100vw));
    margin-top: max(4rem, calc(80 / var(--design-size) * 100vw));
    padding: 0 var(--padding);
    .text-container {
      .medium-heading {
        position: relative;
      }
      :global(.line-drawing) {
        position: absolute;
        top: -2em;
        width: 2em;
      }
      & + .text-container {
        margin-top: max(4rem, calc(80 / var(--design-size) * 100vw));
      }
      .button {
        display: inline-block;
        margin-top: 1em;
      }
      &:last-child {
        margin-bottom: var(--gap);
      }
    }
  }
</style>
