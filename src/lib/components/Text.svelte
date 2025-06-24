<script>
  export let textContainers;
  import LineDrawings from "$lib/components/LineDrawings/LineDrawings.svelte";

  const arrows = ['Arrow', 'Arrow2', 'Arrow3']
</script>

<section class="text p small-body">
  {#each textContainers as item}
    <div class="text-container {item.image ? 'has-image' : ''}">
      {#if item.image}
        <figure class="image">
          <img src={item.image.src} alt={item.image.alt} loading="lazy" />
          {#if item.image.caption}
            <figcaption class="caption xxsmall-body">{item.image.caption}</figcaption>
          {/if}
        </figure>
      {/if}
      <div class="text-content">
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
    </div>
  {/each}
</section>

<style lang="scss">
  .text {
    margin-top: max(4rem, calc(80 / var(--design-size) * 100vw));
    padding: 0 var(--padding);
    .text-container {
      display: grid;
      @media (min-width: 1440px) {
        max-width: calc(1024 / var(--design-size) * 100vw);
        margin: 0 auto;
      }
      &.has-image {
        grid-template-columns: 1fr 2fr;
        gap: var(--gap);
        
        @media (max-width: 750px) {
          grid-template-columns: 1fr;
        }
        &:nth-child(even) {
          grid-template-columns: 2fr 1fr;
          
          @media (max-width: 750px) {
            grid-template-columns: 1fr;
          }
          .text-content {
            grid-column: 1;
            grid-row: 1;
            @media (max-width: 750px) {
              grid-column: auto;
              grid-row: auto;
            }
          }
          .image {
            grid-column: 2;
            grid-row: 1;
            @media (max-width: 750px) {
              grid-column: auto;
              grid-row: auto;
            }
          }
        }
      }
      .image {
        min-height: max(10rem, calc(200 / var(--design-size) * 100vw));
        position: relative;
        @media (max-width: 750px) {
          min-height: 300px;
        }

        img, video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        figcaption {
          position: absolute;
          top: calc(100% + 0.5em);
        }
      }
      .text-content {
        max-width: 50rem;
      }
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
