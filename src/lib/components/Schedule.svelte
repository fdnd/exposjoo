<script>
  export let schedule;
</script>

<section class="schedule">
  <ul>
    {#each schedule as item}
      <li>
        <div
          class="header"
          style="background-color: {item.color}; color: {item.textColor}"
        >
          <h2 class="medium-body font-semibold">{item.title}</h2>
          <p class="small-body font-medium">({item.floor})</p>
          <p class="small-body font-medium subtext">
            <span>{item.subtext}</span>
            <span>{item.time}</span>
          </p>
        </div>
        <div class="text-container p">
          {#each item.text as text}
            <p class="small-body">{@html text}</p>
          {/each}
          <div class="bubbles">
            {#each item.bubbles as bubble}
              <p class="bubble xsmall-body" style="background-color: {item.color}; color: {item.textColor}">{@html bubble}</p>
            {/each}
          </div>
          {#if item.button}
            <a class="button" href={item.button.href}>{item.button.text}</a>
          {/if}
        </div>
      </li>
    {/each}
  </ul>
</section>

<style lang="scss">
  .schedule {
    margin-top: max(4rem, calc(80 / var(--design-size) * 100vw));
    margin-bottom: max(4rem, calc(80 / var(--design-size) * 100vw));
    padding: 0 var(--padding);
    ul {
      @media (min-width: 1440px) {
        max-width: calc(1024 / var(--design-size) * 100vw);
        margin: 0 auto;
      }
      list-style-type: "";
      padding: 0;
      margin: 0;
      li {
        max-width: 50rem;
        & + li {
          margin-top: 2em;
        }
        .header {
          padding: var(--padding);
          p + p {
            margin-top: 0.25em;
          }
        }
        .subtext {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.25em;
        }
        .text-container {
          padding: 0.5em var(--padding) 0;
          @media (max-width: 750px) {
            padding: 0.5em 0 0;
          }
          .button {
            margin-top: 1em;
          }
        }
        .bubbles {
          display: flex;
          flex-direction: column;
          gap: 0.25em;
        }
        .bubble {
          padding: 0.25em 0.5em;
          border-radius: 0.25em;
          margin-top: 0.5em;
        }
      }
    }
  }
</style>
